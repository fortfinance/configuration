const regular_tokens = {
    WETH: {
        address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        symbol: 'WETH',
        name: 'WETH',
        abi: "Erc20",
        decimals: 18,
        enabled: true
    },
    USDC: {
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        symbol: 'USDC',
        name: 'USDC',
        abi: "Erc20",
        decimals: 6,
        enabled: true
    },
    USDT: {
        address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        symbol: 'USDT',
        name: 'USDT',
        abi: "Erc20",
        decimals: 6,
        enabled: true
    },
    DAI: {
        address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        symbol: 'DAI',
        name: 'DAI',
        abi: "Erc20",
        decimals: 18,
        enabled: true
    },
    LINK: {
        address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
        symbol: 'LINK',
        name: 'LINK',
        abi: "Erc20",
        decimals: 18,
        enabled: true
    },
    AAVE: {
        address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
        symbol: 'AAVE',
        name: 'AAVE',
        abi: "Erc20",
        decimals: 18,
        enabled: true
    },
    WBTC: {
        address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        symbol: 'WBTC',
        name: 'WBTC',
        abi: "Erc20",
        decimals: 8,
        enabled: true
    },
    COMP: {
        address: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
        symbol: 'COMP',
        name: 'COMP',
        abi: "Erc20",
        decimals: 18,
        enabled: true
    },
    SUSHI: {
        address: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
        symbol: 'SUSHI',
        name: 'SUSHI',
        abi: "Erc20",
        decimals: 18,
        enabled: true
    },
    YFI: {
        address: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
        symbol: 'YFI',
        name: 'YFI',
        abi: "Erc20",
        decimals: 18,
        enabled: true
    },
    TUSD: {
        address: '0x0000000000085d4780B73119b644AE5ecd22b376',
        symbol: 'TUSD',
        name: 'TUSD',
        abi: "Erc20",
        decimals: 18,
        enabled: true
    },
    BAT: {
        address: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
        symbol: 'BAT',
        name: 'BAT',
        abi: "Erc20",
        decimals: 18,
        enabled: true
    },
    ZRX: {
        address: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
        symbol: 'ZRX',
        name: 'ZRX',
        abi: "Erc20",
        decimals: 6,
        enabled: true
    },
    UNI: {
        address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
        symbol: 'UNI',
        name: 'UNI',
        abi: "Erc20",
        decimals: 18,
        enabled: true
    },
    "BTC": {
        "abi": "Erc20",
        "symbol": "WBTC",
        "name": "Wrapped BTC",
        "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        "decimals": 8
    },
    "XRP": {
        "abi": "Erc20",
        "symbol": "WXRP",
        "name": "Wrapped XRP",
        "decimals": 18,
        "address": "0x39fbbabf11738317a448031930706cd3e612e1b9"
    },
    "LUNA": {
        "abi": "Erc20",
        "symbol": "LUNA",
        "name": "Wrapped LUNA Token",
        "decimals": 18,
        "address": "0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9"
    },
    "BUSD": {
        "abi": "Erc20",
        "symbol": "BUSD",
        "name": "Binance USD",
        "decimals": 18,
        "address": "0x4fabb145d64652a948d72533023f6e7a623c7c53"
    },
    "UST": {
        "abi": "Erc20",
        "symbol": "UST",
        "name": "Wrapped UST Token",
        "decimals": 18,
        "address": "0xa47c8bf37f92abed4a126bda807a7b7498661acd"
    },
    "SHIB": {
        "abi": "Erc20",
        "symbol": "SHIB",
        "name": "SHIBA INU",
        "decimals": 18,
        "address": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
    },
    "CRO": {
        "abi": "Erc20",
        "symbol": "CRO",
        "name": "CRO",
        "decimals": 8,
        "address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
    },
    "MATIC": {
        "abi": "Erc20",
        "symbol": "MATIC",
        "name": "Matic Token",
        "decimals": 18,
        "address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"
    },
    "STETH": {
        "abi": "Erc20",
        "symbol": "stETH",
        "name": "stETH",
        "decimals": 18,
        "address": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84"
    },
    "AXS": {
        "abi": "Erc20",
        "symbol": "AXS",
        "name": "Axie Infinity Shard",
        "decimals": 18,
        "address": "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b"
    },
    "LEO": {
        "abi": "Erc20",
        "symbol": "LEO",
        "name": "Bitfinex LEO Token",
        "decimals": 18,
        "address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3"
    },
    "SAND": {
        "abi": "Erc20",
        "symbol": "SAND",
        "name": "SAND",
        "decimals": 18,
        "address": "0x3845badade8e6dff049820680d1f14bd3903a5d0"
    },
    "MANA": {
        "abi": "Erc20",
        "symbol": "MANA",
        "name": "Mana",
        "address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
        "decimals": 18
    },
    "FTM": {
        "abi": "Erc20",
        "symbol": "FTM",
        "name": "Fantom Token",
        "decimals": 18,
        "address": "0x4e15361fd6b4bb609fa63c81a2be19d873717870"
    },
    "RUNE": {
        "abi": "Erc20",
        "symbol": "RUNE",
        "name": "THORChain ETH.RUNE",
        "decimals": 18,
        "address": "0x3155ba85d5f96b2d030a4966af206230e46849cb"
    },
    "GRT": {
        "abi": "Erc20",
        "symbol": "GRT",
        "name": "Graph Token",
        "decimals": 18,
        "address": "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
    },
    "MIM": {
        "abi": "Erc20",
        "symbol": "MIM",
        "name": "Magic Internet Money",
        "decimals": 18,
        "address": "0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3"
    },
    "FRAX": {
        "abi": "Erc20",
        "symbol": "FRAX",
        "name": "Frax",
        "decimals": 18,
        "address": "0x853d955acef822db058eb8505911ed77f175b99e"
    },
    "FLOW": {
        "abi": "Erc20",
        "symbol": "WFLOW",
        "name": "Wrapped Flow",
        "decimals": 18,
        "address": "0x5c147e74d63b1d31aa3fd78eb229b65161983b2b"
    },
    "DFI": {
        "abi": "Erc20",
        "symbol": "DFI",
        "name": "Amun DeFi Index",
        "decimals": 18,
        "address": "0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978"
    },
    "APE": {
        "abi": "Erc20",
        "symbol": "APE",
        "name": "ApeCoin",
        "decimals": 18,
        "address": "0x4d224452801aced8b2f0aebe155379bb5d594381"
    },
    "GALA": {
        "abi": "Erc20",
        "symbol": "GALA",
        "name": "Gala",
        "decimals": 8,
        "address": "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da"
    },
    "MKR": {
        "abi": "Erc20",
        "symbol": "MKR",
        "name": "Maker",
        "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
        "decimals": 18
    },
    "QNT": {
        "abi": "Erc20",
        "symbol": "QNT",
        "name": "Quant",
        "address": "0x4a220e6096b25eadb88358cb44068a3248254675",
        "decimals": 18
    },
    "HBTC": {
        "abi": "Erc20",
        "symbol": "HBTC",
        "name": "Huobi BTC",
        "decimals": 18,
        "address": "0x0316eb71485b0ab14103307bf65a021042c6d380"
    },
    "ENJ": {
        "abi": "Erc20",
        "symbol": "ENJ",
        "name": "Enjin Coin",
        "address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
        "decimals": 18
    },
    "CVX": {
        "abi": "Erc20",
        "symbol": "CVX",
        "name": "Convex Token",
        "decimals": 18,
        "address": "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b"
    },
    "CHZ": {
        "abi": "Erc20",
        "symbol": "CHZ",
        "name": "chiliZ",
        "decimals": 18,
        "address": "0x3506424f91fd33084466f402d5d97f05f8e3b4af"
    },
    "LRC": {
        "abi": "Erc20",
        "symbol": "LRC",
        "name": "Loopring",
        "address": "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
        "decimals": 18
    },
    "STX": {
        "abi": "Erc20",
        "symbol": "STX",
        "name": "Stox",
        "address": "0x006bea43baa3f7a6f765f14f10a1a1b08334ef45",
        "decimals": 18
    },
    "SNX": {
        "abi": "Erc20",
        "symbol": "SNX",
        "name": "Synthetix Network Token",
        "decimals": 18,
        "address": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f"
    },
    "HT": {
        "abi": "Erc20",
        "symbol": "HT",
        "name": "HuobiToken",
        "decimals": 18,
        "address": "0x6f259637dcd74c767781e37bc6133cd6a68aa161"
    },
    "CEL": {
        "abi": "Erc20",
        "symbol": "CEL",
        "name": "Celsius",
        "address": "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
        "decimals": 4
    },
    "NFTX": {
        "address": "0x87d73E916D7057945c9BcD8cdd94e42A6F47f776",
        "symbol": "NFTX",
        "name": "NFTX",
        "abi": "Erc20",
        "decimals": 18,
    },
    "NEXO": {
        "abi": "Erc20",
        "symbol": "NEXO",
        "name": "Nexo",
        "decimals": 18,
        "address": "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206"
    },
    "AMP": {
        "abi": "Erc20",
        "symbol": "AMP",
        "name": "Amp",
        "decimals": 18,
        "address": "0xff20817765cb7f73d4bde2e66e067e58d11095c2"
    },
    "FXS": {
        "abi": "Erc20",
        "symbol": "FXS",
        "name": "Frax Share",
        "decimals": 18,
        "address": "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0"
    },
    "HOT": {
        "abi": "Erc20",
        "symbol": "HOT",
        "name": "HoloToken",
        "address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
        "decimals": 18
    },
    "CRV": {
        "abi": "Erc20",
        "symbol": "CRV",
        "name": "Curve DAO Token",
        "decimals": 18,
        "address": "0xd533a949740bb3306d119cc777fa900ba034cd52"
    },
    "LDO": {
        "abi": "Erc20",
        "symbol": "LDO",
        "name": "Lido DAO Token",
        "decimals": 18,
        "address": "0x5a98fcbea516cf06857215779fd812ca3bef1b32"
    },
    "USDP": {
        "abi": "Erc20",
        "symbol": "USDP",
        "name": "Pax Dollar",
        "address": "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
        "decimals": 18
    },
    "GNO": {
        "abi": "Erc20",
        "symbol": "GNO",
        "name": "Gnosis",
        "address": "0x6810e776880c02933d47db1b9fc05908e5386b96",
        "decimals": 18
    },
    "USDN": {
        "abi": "Erc20",
        "symbol": "USDN",
        "name": "Neutrino",
        "decimals": 18,
        "address": "0x674c6ad92fd080e4004b2312b45f796a192d27a0"
    },
    "SLP": {
        "abi": "Erc20",
        "symbol": "SLP",
        "name": "Smooth Love Potion",
        "decimals": 0,
        "address": "0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25"
    },
    "OMG": {
        "abi": "Erc20",
        "symbol": "OMG",
        "name": "OmiseGO",
        "address": "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
        "decimals": 18
    },
    "SXP": {
        "abi": "Erc20",
        "symbol": "SXP",
        "name": "Swipe",
        "address": "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9",
        "decimals": 18
    },
    "LPT": {
        "abi": "Erc20",
        "symbol": "LPT",
        "name": "Livepeer Token",
        "decimals": 18,
        "address": "0x58b6a8a3302369daec383334672404ee733ab239"
    },
    "NXM": {
        "abi": "Erc20",
        "symbol": "wNXM",
        "name": "Wrapped NXM",
        "decimals": 18,
        "address": "0x0d438f3b5175bebc262bf23753c1e53d03432bde",
        "eip2612": true
    },
    "1INCH": {
        "abi": "Erc20",
        "symbol": "1INCH",
        "name": "1INCH Token",
        "decimals": 18,
        "address": "0x111111111117dc0aa78b770fa6a738034120c302",
        "eip2612": true
    },
    "SKL": {
        "abi": "Erc20",
        "symbol": "SKL",
        "name": "SKALE",
        "decimals": 18,
        "address": "0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7"
    },
    "ANKR": {
        "abi": "Erc20",
        "symbol": "ANKR",
        "name": "Ankr Network",
        "decimals": 18,
        "address": "0x8290333cef9e6d528dd5618fb97a76f268f3edd4"
    },
    "AUDIO": {
        "abi": "Erc20",
        "symbol": "AUDIO",
        "name": "Audius",
        "decimals": 18,
        "address": "0x18aaa7115705e8be94bffebde57af9bfc265b998",
        "eip2612": true
    },
    "BNT": {
        "abi": "Erc20",
        "symbol": "BNT",
        "name": "Bancor",
        "address": "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
        "decimals": 18
    },
    "RNDR": {
        "abi": "Erc20",
        "symbol": "RNDR",
        "name": "Render Token",
        "decimals": 18,
        "address": "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24"
    },
    "LOOKS": {
        "abi": "Erc20",
        "symbol": "LOOKS",
        "name": "LooksRare Token",
        "decimals": 18,
        "address": "0xf4d2888d29d722226fafa5d9b24f9164c092421e"
    },
    "RENBTC": {
        "abi": "Erc20",
        "symbol": "renBTC",
        "name": "renBTC",
        "decimals": 8,
        "address": "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
        "eip2612": true
    },
    "WOO": {
        "abi": "Erc20",
        "symbol": "WOO",
        "name": "Wootrade Network",
        "decimals": 18,
        "address": "0x4691937a7508860f876c9c0a2a617e7d9e945d4b"
    },
    "EXRD": {
        "abi": "Erc20",
        "symbol": "eXRD",
        "name": "E-RADIX",
        "decimals": 18,
        "address": "0x6468e79a80c0eab0f9a2b574c8d5bc374af59414"
    },
    "IMX": {
        "abi": "Erc20",
        "symbol": "IMX",
        "name": "Immutable X",
        "decimals": 18,
        "address": "0xf57e7e7c23978c3caec3c3548e3d615c346e79ff"
    },
    "PAXG": {
        "abi": "Erc20",
        "symbol": "PAXG",
        "name": "Paxos Gold",
        "decimals": 18,
        "address": "0x45804880de22913dafe09f4980848ece6ecbaf78"
    },
    "RPL": {
        "abi": "Erc20",
        "symbol": "RPL",
        "name": "Rocket Pool",
        "address": "0xb4efd85c19999d84251304bda99e90b92300bd93",
        "decimals": 18
    },
    "DYDX": {
        "abi": "Erc20",
        "symbol": "DYDX",
        "name": "dYdX",
        "decimals": 18,
        "address": "0x92d6c1e31e14520e676a687f0a93788b716beff5",
        "eip2612": true
    },
    "ELON": {
        "abi": "Erc20",
        "symbol": "ELON",
        "name": "Dogelon",
        "decimals": 18,
        "address": "0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3"
    },
    "RLY": {
        "abi": "Erc20",
        "symbol": "RLY",
        "name": "Rally",
        "decimals": 18,
        "address": "0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b"
    },
    "FEI": {
        "abi": "Erc20",
        "symbol": "FEI",
        "name": "Fei USD",
        "decimals": 18,
        "address": "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
        "eip2612": true
    },
    "GLM": {
        "abi": "Erc20",
        "symbol": "GLM",
        "name": "Golem Network Token",
        "decimals": 18,
        "address": "0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429",
        "eip2612": true
    },
    "UMA": {
        "abi": "Erc20",
        "symbol": "UMA",
        "name": "UMA Voting Token v1",
        "decimals": 18,
        "address": "0x04fa0d235c4abf4bcf4787af4cf447de572ef828"
    },
    "REN": {
        "abi": "Erc20",
        "symbol": "REN",
        "name": "Republic",
        "address": "0x408e41876cccdc0f92210600ef50372656052a38",
        "decimals": 18
    },
    "TEL": {
        "abi": "Erc20",
        "symbol": "TEL",
        "name": "Telcoin",
        "decimals": 2,
        "address": "0x467bccd9d29f223bce8043b84e8c8b282827790f"
    },
    "OHM": {
        "abi": "Erc20",
        "symbol": "OHM",
        "name": "Olympus",
        "decimals": 9,
        "address": "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
        "eip2612": true
    },
    "SYN": {
        "abi": "Erc20",
        "symbol": "SYN",
        "name": "Synapse",
        "decimals": 18,
        "address": "0x0f2d719407fdbeff09d87557abb7232601fd9f29",
        "eip2612": true
    },
    "LUSD": {
        "abi": "Erc20",
        "symbol": "LUSD",
        "name": "LUSD Stablecoin",
        "decimals": 18,
        "address": "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
        "eip2612": true
    },
    "ENS": {
        "abi": "Erc20",
        "symbol": "ENS",
        "name": "Ethereum Name Service",
        "decimals": 18,
        "eip2612": true,
        "address": "0xc18360217d8f7ab5e7c516566761ea12ce7f9d72"
    },
    "POLY": {
        "abi": "Erc20",
        "symbol": "POLY",
        "name": "Polymath",
        "address": "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
        "decimals": 18
    },
    "SRM": {
        "abi": "Erc20",
        "symbol": "SRM",
        "name": "Serum",
        "decimals": 6,
        "address": "0x476c5e26a75bd202a9683ffd34359c0cc15be0ff"
    },
    "METIS": {
        "abi": "Erc20",
        "symbol": "Metis",
        "name": "Metis Token",
        "decimals": 18,
        "address": "0x9e32b13ce7f2e80a01932b42553652e053d6ed8e"
    },
    "SPELL": {
        "abi": "Erc20",
        "symbol": "SPELL",
        "name": "Spell Token",
        "decimals": 18,
        "address": "0x090185f2135308bad17527004364ebcc2d37e5f6"
    },
    "ILV": {
        "abi": "Erc20",
        "symbol": "ILV",
        "name": "Illuvium",
        "decimals": 18,
        "address": "0x767fe9edc9e0df98e07454847909b5e959d7ca0e"
    },
    "NU": {
        "abi": "Erc20",
        "symbol": "NU",
        "name": "NuCypher",
        "decimals": 18,
        "address": "0x4fe83213d56308330ec302a8bd641f1d0113a4cc"
    },
    "KEEP": {
        "abi": "Erc20",
        "symbol": "KEEP",
        "name": "KEEP Token",
        "decimals": 18,
        "address": "0x85eee30c52b0b379b046fb0f85f4f3dc3009afec"
    },
    "UOS": {
        "abi": "Erc20",
        "symbol": "UOS",
        "name": "Ultra Token",
        "decimals": 4,
        "address": "0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c"
    },
    "KNC": {
        "abi": "Erc20",
        "symbol": "KNC",
        "name": "Kyber Network Crystal v2",
        "decimals": 18,
        "address": "0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202"
    },
    "10SET": {
        "abi": "Erc20",
        "symbol": "10SET",
        "name": "10Set Token",
        "decimals": 18,
        "address": "0x7ff4169a6b5122b664c51c95727d87750ec07c84"
    },
    "ASTRO": {
        "abi": "Erc20",
        "symbol": "ASTRO",
        "name": "AstroTools.io",
        "decimals": 18,
        "address": "0xcbd55d4ffc43467142761a764763652b48b969ff"
    },
    "XDB": {
        "abi": "Erc20",
        "symbol": "XDB",
        "name": "digitalbits",
        "decimals": 7,
        "address": "0xb9eefc4b0d472a44be93970254df4f4016569d27"
    },
    "XSUSHI": {
        "abi": "Erc20",
        "symbol": "xSUSHI",
        "name": "SushiBar",
        "decimals": 18,
        "address": "0x8798249c2e607446efb7ad49ec89dd1865ff4272"
    },
    "FLOKI": {
        "abi": "Erc20",
        "symbol": "FLOKI",
        "name": "FLOKI",
        "decimals": 9,
        "address": "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e"
    },
    "PERP": {
        "abi": "Erc20",
        "symbol": "PERP",
        "name": "Perpetual",
        "decimals": 18,
        "address": "0xbc396689893d065f41bc2c6ecbee5e0085233447"
    },
    "TOKE": {
        "abi": "Erc20",
        "symbol": "TOKE",
        "name": "Tokemak",
        "decimals": 18,
        "address": "0x2e9d63788249371f1dfc918a52f8d799f4a38c94"
    },
    "FET": {
        "abi": "Erc20",
        "symbol": "FET",
        "name": "Fetch",
        "decimals": 18,
        "address": "0xaea46a60368a7bd060eec7df8cba43b7ef41ad85"
    },
    "ICHI": {
        "abi": "Erc20",
        "symbol": "ICHI",
        "name": "ichi.farm",
        "decimals": 9,
        "address": "0x903bef1736cddf2a537176cf3c64579c3867a881"
    },
    "DENT": {
        "abi": "Erc20",
        "symbol": "DENT",
        "name": "DENT",
        "decimals": 8,
        "address": "0x3597bfd533a99c9aa083587b074434e61eb0a258"
    },
    "SNT": {
        "abi": "Erc20",
        "symbol": "SNT",
        "name": "Status",
        "address": "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
        "decimals": 18
    },
    "OGN": {
        "abi": "Erc20",
        "symbol": "OGN",
        "name": "Origin Protocol",
        "address": "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26",
        "decimals": 18
    },
    "COTI": {
        "abi": "Erc20",
        "symbol": "COTI",
        "name": "COTI Token",
        "decimals": 18,
        "address": "0xddb3422497e61e13543bea06989c0789117555c5"
    },
    "INJ": {
        "abi": "Erc20",
        "symbol": "INJ",
        "name": "Injective Token",
        "decimals": 18,
        "address": "0xe28b3b32b6c345a34ff64674606124dd5aceca30"
    },
    "OCEAN": {
        "abi": "Erc20",
        "symbol": "OCEAN",
        "name": "OceanToken",
        "address": "0x967da4048cd07ab37855c090aaf366e4ce1b9f48",
        "decimals": 18
    },
    "API3": {
        "abi": "Erc20",
        "symbol": "API3",
        "name": "API3",
        "decimals": 18,
        "address": "0x0b38210ea11411557c13457d4da7dc6ea731b88a"
    },
    "HUSD": {
        "abi": "Erc20",
        "symbol": "HUSD",
        "name": "HUSD",
        "decimals": 8,
        "address": "0xdf574c24545e5ffecb9a659c229253d4111d87e1"
    },
    "MASK": {
        "abi": "Erc20",
        "symbol": "MASK",
        "name": "Mask",
        "decimals": 18,
        "address": "0x0fe629d1e84e171f8ff0c1ded2cc2221caa48a3f"
    },
    "MIR": {
        "abi": "Erc20",
        "symbol": "MIR",
        "name": "Wrapped MIR Token",
        "decimals": 18,
        "address": "0x09a3ecafa817268f77be1283176b946c4ff2e608"
    }
}

export default regular_tokens
