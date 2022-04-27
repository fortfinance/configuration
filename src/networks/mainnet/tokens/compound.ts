const compound_tokens = {
    cAAVE: {
        address: '0xe65cdb6479bac1e22340e4e755fae7e509ecd06c',
        symbol: 'cAAVE',
        abi: "cToken",
        name: "cAAVE",
        decimals: 18,
        platform: 'compound',
        enabled: true,
        underlying: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9"
    },
    cBAT: {
        address: '0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E',
        symbol: 'cBAT',
        abi: "cToken",
        name: "cBAT",
        decimals: 18,
        platform: 'compound',
        enabled: true,
        underlying: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
    },
    cCOMP: {
        address: '0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4',
        symbol: 'cCOMP',
        abi: "cToken",
        name: "cCOMP",
        decimals: 18,
        platform: 'compound',
        enabled: true,
        underlying: "0xc00e94cb662c3520282e6f5717214004a7f26888"
    },
    cDAI: {
        address: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
        symbol: 'cDAI',
        abi: "cToken",
        name: "cDAI",
        decimals: 18,
        underlying: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
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
        underlying: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA"
    },
    cLINK: {
        address: '0xface851a4921ce59e912d19329929ce6da6eb0c7',
        symbol: 'cLINK',
        abi: "cToken",
        name: "cLINK",
        decimals: 18,
        platform: 'compound',
        enabled: true,
        underlying: "0x514910771af9ca656af840dff83e8264ecf986ca"

    },
    cMKR: {
        address: "0x95b4eF2869eBD94BEb4eEE400a99824BF5DC325b",
        symbol: "cMKR",
        abi: "cToken",
        name: "Compound Maker",
        decimals:81,
        platform: 'compound',
        enabled: true,
        underlying: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",

    },
    cSUSHI: {
        address: '0x4b0181102a0112a2ef11abee5563bb4a3176c9d7',
        symbol: 'cSUSHI',
        abi: "cToken",
        name: "cSUSHI",
        decimals: 18,
        platform: 'compound',
        underlying: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",

        enabled: true
    },
    cTUSD: {
        address: '0x12392f67bdf24fae0af363c24ac620a2f67dad86',
        symbol: 'cTUSD',
        abi: "cToken",
        name: "cTUSD",
        underlying: "0x0000000000085d4780b73119b644ae5ecd22b376",
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
        underlying: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
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
        underlying: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",

    },
    cUSDCP: {
        address: '0x041171993284df560249b57358f931d9eb7b925d',
        symbol: 'cUSDP',
        abi: "cToken",
        name: "Compound Pax Dollar",
        decimals: 18,
        underlying: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
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
        underlying: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    },
    cWBTC2: {
        address: '0xccf4429db6322d5c611ee964527d42e5d685dd6a',
        symbol: 'cWBTC2',
        abi: "cToken",
        name: "cWBTC2",
        decimals: 18,
        underlying: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        platform: 'compound',
        enabled: true
    },
    cYFI: {
        address: '0x80a2ae356fc9ef4305676f7a3e2ed04e12c33946',
        symbol: 'cYFI',
        abi: "cToken",
        name: "cYFI",
        decimals: 18,
        underlying: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
        platform: 'compound',
        enabled: true
    },
    cZRX: {
        address: '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407',
        symbol: 'cZRX',
        abi: "cToken",
        underlying: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
        name: "cZRX",
        decimals: 18,
        platform: 'compound',
        enabled: true
    },
}

export default compound_tokens
