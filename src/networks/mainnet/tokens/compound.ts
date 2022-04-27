import regular_tokens from "./regular";

const compound_tokens = {
    cAAVE: {
        address: '0xe65cdb6479bac1e22340e4e755fae7e509ecd06c',
        symbol: 'cAAVE',
        abi: "cToken",
        name: "cAAVE",
        decimals: 18,
        platform: 'compound',
        enabled: true,
        underlying: regular_tokens.AAVE
    },
    cBAT: {
        address: '0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E',
        symbol: 'cBAT',
        abi: "cToken",
        name: "cBAT",
        decimals: 18,
        platform: 'compound',
        enabled: true,
        underlying: regular_tokens.BAT,
    },
    cCOMP: {
        address: '0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4',
        symbol: 'cCOMP',
        abi: "cToken",
        name: "cCOMP",
        decimals: 18,
        platform: 'compound',
        enabled: true,
        underlying: regular_tokens.COMP
    },
    cDAI: {
        address: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
        symbol: 'cDAI',
        abi: "cToken",
        name: "cDAI",
        decimals: 18,
        underlying: regular_tokens.DAI,
        platform: 'compound',
        enabled: true
    },
    cETH: {
        address: '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
        symbol: 'cETH',
        abi: "CETH",
        name: "cETH",
        decimals:81,
        platform: 'compound',
        enabled: true
    },
    cFEI: {
        address: '0x7713DD9Ca933848F6819F38B8352D9A15EA73F67',
        symbol: 'cFEI',
        abi: "cToken",
        name: "Compound FEI USD",
        decimals:81,
        platform: 'compound',
        enabled: true,
        underlying: regular_tokens.FEI
    },
    cLINK: {
        address: '0xface851a4921ce59e912d19329929ce6da6eb0c7',
        symbol: 'cLINK',
        abi: "cToken",
        name: "cLINK",
        decimals: 18,
        platform: 'compound',
        enabled: true,
        underlying: regular_tokens.LINK

    },
    cMKR: {
        address: "0x95b4eF2869eBD94BEb4eEE400a99824BF5DC325b",
        symbol: "cMKR",
        abi: "cToken",
        name: "Compound Maker",
        decimals:81,
        platform: 'compound',
        enabled: true,
        underlying: regular_tokens.MKR,

    },
    cSUSHI: {
        address: '0x4b0181102a0112a2ef11abee5563bb4a3176c9d7',
        symbol: 'cSUSHI',
        abi: "cToken",
        name: "cSUSHI",
        decimals: 18,
        platform: 'compound',
        underlying: regular_tokens.SUSHI,
        enabled: true
    },
    cTUSD: {
        address: '0x12392f67bdf24fae0af363c24ac620a2f67dad86',
        symbol: 'cTUSD',
        abi: "cToken",
        name: "cTUSD",
        underlying: regular_tokens.TUSD,
        decimals: 18,
        platform: 'compound',
        enabled: true
    },
    cUNI: {
        address: '0x35a18000230da775cac24873d00ff85bccded550',
        symbol: 'cUNI',
        abi: "cToken",
        name: "cUNI",
        decimals: 18,
        platform: 'compound',
        underlying: regular_tokens.UNI,
        enabled: true
    },
    cUSDC: {
        address: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
        symbol: 'cUSDC',
        abi: "cToken",
        name: "cUSDC",
        decimals: 18,
        platform: 'compound',
        enabled: true,
        underlying: regular_tokens.USDC,

    },
    cUSDP: {
        address: '0x041171993284df560249b57358f931d9eb7b925d',
        symbol: 'cUSDP',
        abi: "cToken",
        name: "Compound Pax Dollar",
        decimals: 18,
        underlying: regular_tokens.USDP,
        platform: 'compound',
        enabled: true
    },
    cUSDT: {
        address: '0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9',
        symbol: 'cUSDT',
        abi: "cToken",
        name: "cUSDT",
        decimals: 18,
        platform: 'compound',
        enabled: true,
        underlying: regular_tokens.USDT,
    },
    cWBTC2: {
        address: '0xccf4429db6322d5c611ee964527d42e5d685dd6a',
        symbol: 'cWBTC2',
        abi: "cToken",
        name: "cWBTC2",
        decimals: 18,
        underlying: regular_tokens.WBTC,
        platform: 'compound',
        enabled: true
    },
    cYFI: {
        address: '0x80a2ae356fc9ef4305676f7a3e2ed04e12c33946',
        symbol: 'cYFI',
        abi: "cToken",
        name: "cYFI",
        decimals: 18,
        underlying: regular_tokens.YFI,
        platform: 'compound',
        enabled: true
    },
    cZRX: {
        address: '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407',
        symbol: 'cZRX',
        abi: "cToken",
        underlying: regular_tokens.ZRX,
        name: "cZRX",
        decimals: 18,
        platform: 'compound',
        enabled: true
    },
}

export default compound_tokens
