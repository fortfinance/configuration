import axios from 'axios'
import _ from "lodash";
import fs from 'fs-extra'
import omitDeep from 'omit-deep-lodash'

const TOP_TOKEN_FETCH_AMOUNT = 250
const MIN_LENGTH = 100

async function main() {
  console.log(`Fetching top ${TOP_TOKEN_FETCH_AMOUNT} tokens from CoinGecko (Sorted by Market Cap - Descending)`)
  const topTokensResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${TOP_TOKEN_FETCH_AMOUNT}&page=1&sparkline=false`)
  const topTokens = topTokensResponse.data
  const topTokensSymbols = topTokens.map(token => token.symbol.toUpperCase())
  console.log('Done fetching')

  console.log('Fetching supported tokens of OneInch')
  const supportedTokensResponse = await axios.get('https://api.1inch.io/v4.0/1/tokens')
  const supportedTokens = Object.entries(supportedTokensResponse.data.tokens)
  console.log('Done fetching')

  console.log("Getting popular tokens metadata from OneInch's data")
  console.group()
  let topTokensMetadata = {}
  topTokensSymbols.forEach(topTokenSymbol => {
    if (topTokenSymbol === 'ETH') return // Skip native eth
    let topTokenMetadata = supportedTokens
      .find(supportedToken => supportedToken[1].symbol.toUpperCase() === topTokenSymbol ||
        supportedToken[1].symbol.toUpperCase() === "W" + topTokenSymbol) // For wrapped tokens

    if (!topTokenMetadata) {
      console.warn(`${topTokenSymbol} is not supported by OneInch or it's metadata was not found`)
      return undefined
    }
    topTokenMetadata = _.omit(topTokenMetadata, 'logoURI')
    topTokensMetadata[topTokenSymbol] = { abi: "Erc20", ...topTokenMetadata[1] }
  })
  console.groupEnd()

  console.log(`Done getting metadata, OneInch supports ${Object.entries(topTokensMetadata).length}/${TOP_TOKEN_FETCH_AMOUNT} of these tokens`)

  if (topTokensMetadata.length < MIN_LENGTH) {
    throw new Error(
      'I was unable to fetch the minimum amount of tokens needed, please increase the TOP_TOKEN_FETCH_AMOUNT!')
  }

  topTokensMetadata = omitDeep(topTokensMetadata, 'logoURI')
  fs.writeJSON('popularTokensConfig.json', topTokensMetadata)

  console.log()
  console.log(`Done! the result has been saved to ${process.cwd()}/popularTokensConfig.json`)
  console.log()
  console.log('Keep on keeping on!')
  console.log()
}

main()
