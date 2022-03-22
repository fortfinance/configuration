const uniswap_v2_tokens = {
    USDC_WETH: {
        address: "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
        abi: "UniswapV2Pair",
        symbol: "USDC/WETH",
        name: "USDC/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WISE_WETH: {
        address: "0x21b8065d10f73ee2e260e5b47d3344d3ced7596e",
        abi: "UniswapV2Pair",
        symbol: "WISE/WETH",
        name: "WISE/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x66a0f676479cee1d7373f3dc2e2952778bff5bd6",
            symbol: "WISE",
            name: "Wise Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_USDT: {
        address: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
        abi: "UniswapV2Pair",
        symbol: "WETH/USDT",
        name: "WETH/USDT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            symbol: "USDT",
            name: "Tether USD"
        }
    },
    TOKE_WETH: {
        address: "0x5fa464cefe8901d66c09b85d5fcdc55b3738c688",
        abi: "UniswapV2Pair",
        symbol: "TOKE/WETH",
        name: "TOKE/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x2e9d63788249371f1dfc918a52f8d799f4a38c94",
            symbol: "TOKE",
            name: "Tokemak"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    FXS_FRAX: {
        address: "0xe1573b9d29e2183b1af0e743dc2754979a40d237",
        abi: "UniswapV2Pair",
        symbol: "FXS/FRAX",
        name: "FXS/FRAX",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
            symbol: "FXS",
            name: "Frax Share"
        },
        token1: {
            address: "0x853d955acef822db058eb8505911ed77f175b99e",
            symbol: "FRAX",
            name: "Frax"
        }
    },
    DAI_USDC: {
        address: "0xae461ca67b15dc8dc81ce7615e0320da1a9ab8d5",
        abi: "UniswapV2Pair",
        symbol: "DAI/USDC",
        name: "DAI/USDC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            symbol: "DAI",
            name: "Dai Stablecoin"
        },
        token1: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        }
    },
    USDC_USDT: {
        address: "0x3041cbd36888becc7bbcbc0045e3b1f144466f5f",
        abi: "UniswapV2Pair",
        symbol: "USDC/USDT",
        name: "USDC/USDT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        },
        token1: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            symbol: "USDT",
            name: "Tether USD"
        }
    },
    MC_WETH: {
        address: "0xccb63225a7b19dcf66717e4d40c9a72b39331d61",
        abi: "UniswapV2Pair",
        symbol: "MC/WETH",
        name: "MC/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x949d48eca67b17269629c7194f4b727d4ef9e5d6",
            symbol: "MC",
            name: "Merit Circle"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_wPE: {
        address: "0x75f89ffbe5c25161cbc7e97c988c9f391eaefaf9",
        abi: "UniswapV2Pair",
        symbol: "WETH/wPE",
        name: "WETH/wPE",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b",
            symbol: "wPE",
            name: "OPES Finance"
        }
    },
    UNI_WETH: {
        address: "0xd3d2e2692501a5c9ca623199d38826e513033a17",
        abi: "UniswapV2Pair",
        symbol: "UNI/WETH",
        name: "UNI/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
            symbol: "UNI",
            name: "Uniswap"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    DAI_WETH: {
        address: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
        abi: "UniswapV2Pair",
        symbol: "DAI/WETH",
        name: "DAI/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            symbol: "DAI",
            name: "Dai Stablecoin"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    FNK_USDT: {
        address: "0x61b62c5d56ccd158a38367ef2f539668a06356ab",
        abi: "UniswapV2Pair",
        symbol: "FNK/USDT",
        name: "FNK/USDT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xb5fe099475d3030dde498c3bb6f3854f762a48ad",
            symbol: "FNK",
            name: "Finiko"
        },
        token1: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            symbol: "USDT",
            name: "Tether USD"
        }
    },
    WBTC_WETH: {
        address: "0xbb2b8038a1640196fbe3e38816f3e67cba72d940",
        abi: "UniswapV2Pair",
        symbol: "WBTC/WETH",
        name: "WBTC/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            symbol: "WBTC",
            name: "Wrapped BTC"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    SHINJA_WETH: {
        address: "0x63b61e73d3fa1fb96d51ce457cabe89fffa7a1f1",
        abi: "UniswapV2Pair",
        symbol: "SHINJA/WETH",
        name: "SHINJA/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xab167e816e4d76089119900e941befdfa37d6b32",
            symbol: "SHINJA",
            name: "Shibnobi"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    PAXG_WETH: {
        address: "0x9c4fe5ffd9a9fc5678cfbd93aa2d4fd684b67c4c",
        abi: "UniswapV2Pair",
        symbol: "PAXG/WETH",
        name: "PAXG/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x45804880de22913dafe09f4980848ece6ecbaf78",
            symbol: "PAXG",
            name: "Paxos Gold"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    SAND_WETH: {
        address: "0x3dd49f67e9d5bc4c5e6634b3f70bfd9dc1b6bd74",
        abi: "UniswapV2Pair",
        symbol: "SAND/WETH",
        name: "SAND/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x3845badade8e6dff049820680d1f14bd3903a5d0",
            symbol: "SAND",
            name: "SAND"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    ELON_WETH: {
        address: "0x7b73644935b8e68019ac6356c40661e1bc315860",
        abi: "UniswapV2Pair",
        symbol: "ELON/WETH",
        name: "ELON/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3",
            symbol: "ELON",
            name: "Dogelon"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_SUPER: {
        address: "0x25647e01bd0967c1b9599fa3521939871d1d0888",
        abi: "UniswapV2Pair",
        symbol: "WETH/SUPER",
        name: "WETH/SUPER",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55",
            symbol: "SUPER",
            name: "SuperFarm"
        }
    },
    XXi_WETH: {
        address: "0x0af81cd5d9c124b4859d65697a4cd10ee223746a",
        abi: "UniswapV2Pair",
        symbol: "XXi/WETH",
        name: "XXi/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x11e003e9ecc5a2320e8b11098acd550b928b6df2",
            symbol: "XXi",
            name: "Xi Transfer Coin"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_FOX: {
        address: "0x470e8de2ebaef52014a47cb5e6af86884947f08c",
        abi: "UniswapV2Pair",
        symbol: "WETH/FOX",
        name: "WETH/FOX",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xc770eefad204b5180df6a14ee197d99d808ee52d",
            symbol: "FOX",
            name: "FOX"
        }
    },
    HEX_USDC: {
        address: "0xf6dcdce0ac3001b2f67f750bc64ea5beb37b5824",
        abi: "UniswapV2Pair",
        symbol: "HEX/USDC",
        name: "HEX/USDC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
            symbol: "HEX",
            name: "HEX"
        },
        token1: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        }
    },
    WAXE_WETH: {
        address: "0x0ee0cb563a52ae1170ac34fbb94c50e89adde4bd",
        abi: "UniswapV2Pair",
        symbol: "WAXE/WETH",
        name: "WAXE/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x7a2bc711e19ba6aff6ce8246c546e8c4b4944dfd",
            symbol: "WAXE",
            name: "WAX Economic Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    FLX_WETH: {
        address: "0xd6f3768e62ef92a9798e5a8cedd2b78907cecef9",
        abi: "UniswapV2Pair",
        symbol: "FLX/WETH",
        name: "FLX/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x6243d8cea23066d098a15582d81a598b4e8391f4",
            symbol: "FLX",
            name: "Flex Ungovernance Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    OHM_FRAX: {
        address: "0xb612c37688861f1f90761dc7f382c2af3a50cc39",
        abi: "UniswapV2Pair",
        symbol: "OHM/FRAX",
        name: "OHM/FRAX",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
            symbol: "OHM",
            name: "Olympus"
        },
        token1: {
            address: "0x853d955acef822db058eb8505911ed77f175b99e",
            symbol: "FRAX",
            name: "Frax"
        }
    },
    BOND_USDC: {
        address: "0x6591c4bcd6d7a1eb4e537da8b78676c1576ba244",
        abi: "UniswapV2Pair",
        symbol: "BOND/USDC",
        name: "BOND/USDC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x0391d2021f89dc339f60fff84546ea23e337750f",
            symbol: "BOND",
            name: "BarnBridge Governance Token"
        },
        token1: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        }
    },
    WETH_RLY: {
        address: "0x27fd0857f0ef224097001e87e61026e39e1b04d1",
        abi: "UniswapV2Pair",
        symbol: "WETH/RLY",
        name: "WETH/RLY",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b",
            symbol: "RLY",
            name: "Rally"
        }
    },
    SAITAMA_WETH: {
        address: "0x9cbfb60a09a9a33a10312da0f39977cbdb7fde23",
        abi: "UniswapV2Pair",
        symbol: "SAITAMA/WETH",
        name: "SAITAMA/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x8b3192f5eebd8579568a2ed41e6feb402f93f73f",
            symbol: "SAITAMA",
            name: "Saitama Inu"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    LINK_WETH: {
        address: "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
        abi: "UniswapV2Pair",
        symbol: "LINK/WETH",
        name: "LINK/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x514910771af9ca656af840dff83e8264ecf986ca",
            symbol: "LINK",
            name: "ChainLink Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    UFO_WETH: {
        address: "0x97e1fcb93ae7267dbafad23f7b9afaa08264cfd8",
        abi: "UniswapV2Pair",
        symbol: "UFO/WETH",
        name: "UFO/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b",
            symbol: "UFO",
            name: "THE TRUTH"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    CHEDDA_WETH: {
        address: "0x32a505bf9db617d23bf3ebaac9aef80cb24a828c",
        abi: "UniswapV2Pair",
        symbol: "CHEDDA/WETH",
        name: "CHEDDA/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x16756ec1deb89a2106c35e0b586a799d0a61837d",
            symbol: "CHEDDA",
            name: "Chedda Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    X2Y2_WETH: {
        address: "0x6033368e4a402605294c91cf5c03d72bd96e7d8d",
        abi: "UniswapV2Pair",
        symbol: "X2Y2/WETH",
        name: "X2Y2/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9",
            symbol: "X2Y2",
            name: "X2Y2Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    MIST_WETH: {
        address: "0xcd6bcca48069f8588780dfa274960f15685aee0e",
        abi: "UniswapV2Pair",
        symbol: "MIST/WETH",
        name: "MIST/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab",
            symbol: "MIST",
            name: "Alchemist"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_BTT: {
        address: "0x2d0ba902badaa82592f0e1c04c71d66cea21d921",
        abi: "UniswapV2Pair",
        symbol: "WETH/BTT",
        name: "WETH/BTT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xc669928185dbce49d2230cc9b0979be6dc797957",
            symbol: "BTT",
            name: "BitTorrent"
        }
    },
    MOCHI_WETH: {
        address: "0x1693c24445895bd8f4d5a327eafa0263191ed906",
        abi: "UniswapV2Pair",
        symbol: "MOCHI/WETH",
        name: "MOCHI/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x60ef10edff6d600cd91caeca04caed2a2e605fe5",
            symbol: "MOCHI",
            name: "Mochi Inu"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    STARL_WETH: {
        address: "0xa5e9c917b4b821e4e0a5bbefce078ab6540d6b5e",
        abi: "UniswapV2Pair",
        symbol: "STARL/WETH",
        name: "STARL/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x8e6cd950ad6ba651f6dd608dc70e5886b1aa6b24",
            symbol: "STARL",
            name: "StarLink"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WILD_WETH: {
        address: "0xcaa004418eb42cdf00cb057b7c9e28f0ffd840a5",
        abi: "UniswapV2Pair",
        symbol: "WILD/WETH",
        name: "WILD/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x2a3bff78b79a009976eea096a51a948a3dc00e34",
            symbol: "WILD",
            name: "Wilder"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    XMON_WETH: {
        address: "0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9",
        abi: "UniswapV2Pair",
        symbol: "XMON/WETH",
        name: "XMON/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x3aada3e213abf8529606924d8d1c55cbdc70bf74",
            symbol: "XMON",
            name: "XMON"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    RAI_WETH: {
        address: "0x8ae720a71622e824f576b4a8c03031066548a3b1",
        abi: "UniswapV2Pair",
        symbol: "RAI/WETH",
        name: "RAI/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x03ab458634910aad20ef5f1c8ee96f1d6ac54919",
            symbol: "RAI",
            name: "Rai Reflex Index"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    "10SET_WETH": {
        address: "0x5f6fbe81171d0f52cc58d6a2ac6ee1a9e52d18d2",
        abi: "UniswapV2Pair",
        symbol: "10SET/WETH",
        name: "10SET/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x7ff4169a6b5122b664c51c95727d87750ec07c84",
            symbol: "10SET",
            name: "10Set Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    USDC_UNIX: {
        address: "0xccab68f48531215b0707e8d908c43e7de73dbdbc",
        abi: "UniswapV2Pair",
        symbol: "USDC/UNIX",
        name: "USDC/UNIX",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        },
        token1: {
            address: "0xddd6a0ecc3c6f6c102e5ea3d8af7b801d1a77ac8",
            symbol: "UNIX",
            name: "UniX Gaming"
        }
    },
    STRONG_WETH: {
        address: "0xc0bf97bffa94a50502265c579a3b7086d081664b",
        abi: "UniswapV2Pair",
        symbol: "STRONG/WETH",
        name: "STRONG/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x990f341946a3fdb507ae7e52d17851b87168017c",
            symbol: "STRONG",
            name: "Strong"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    TERA_WETH: {
        address: "0x2b788a7b1a0ee0da8cb1d2769825198d9c95d19d",
        abi: "UniswapV2Pair",
        symbol: "TERA/WETH",
        name: "TERA/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x009668a9691e456972c8ec4cc84e99486308b84d",
            symbol: "TERA",
            name: "Terareum"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    BigSB_USDC: {
        address: "0x149148acc3b06b8cc73af3a10e84189243a35925",
        abi: "UniswapV2Pair",
        symbol: "BigSB/USDC",
        name: "BigSB/USDC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x131157c6760f78f7ddf877c0019eba175ba4b6f6",
            symbol: "BigSB",
            name: "BigShortBets"
        },
        token1: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        }
    },
    DAI_USDT: {
        address: "0xb20bd5d04be54f870d5c0d3ca85d82b34b836405",
        abi: "UniswapV2Pair",
        symbol: "DAI/USDT",
        name: "DAI/USDT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            symbol: "DAI",
            name: "Dai Stablecoin"
        },
        token1: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            symbol: "USDT",
            name: "Tether USD"
        }
    },
    ERN_WETH: {
        address: "0x570febdf89c07f256c75686caca215289bb11cfc",
        abi: "UniswapV2Pair",
        symbol: "ERN/WETH",
        name: "ERN/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xbbc2ae13b23d715c30720f079fcd9b4a74093505",
            symbol: "ERN",
            name: "@EthernityChain $ERN Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    PNK_WETH: {
        address: "0x343fd171caf4f0287ae6b87d75a8964dc44516ab",
        abi: "UniswapV2Pair",
        symbol: "PNK/WETH",
        name: "PNK/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d",
            symbol: "PNK",
            name: "Pinakion"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    VADER_WETH: {
        address: "0x452c60e1e3ae0965cd27db1c7b3a525d197ca0aa",
        abi: "UniswapV2Pair",
        symbol: "VADER/WETH",
        name: "VADER/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x2602278ee1882889b946eb11dc0e810075650983",
            symbol: "VADER",
            name: "Vader"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    MKR_WETH: {
        address: "0xc2adda861f89bbb333c90c492cb837741916a225",
        abi: "UniswapV2Pair",
        symbol: "MKR/WETH",
        name: "MKR/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
            symbol: "MKR",
            name: "Maker"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WOO_WETH: {
        address: "0x6ada49aeccf6e556bb7a35ef0119cc8ca795294a",
        abi: "UniswapV2Pair",
        symbol: "WOO/WETH",
        name: "WOO/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
            symbol: "WOO",
            name: "Wootrade Network"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_BEAN: {
        address: "0x87898263b6c5babe34b4ec53f22d98430b91e371",
        abi: "UniswapV2Pair",
        symbol: "WETH/BEAN",
        name: "WETH/BEAN",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xdc59ac4fefa32293a95889dc396682858d52e5db",
            symbol: "BEAN",
            name: "Bean"
        }
    },
    WETH_AMPL: {
        address: "0xc5be99a02c6857f9eac67bbce58df5572498f40c",
        abi: "UniswapV2Pair",
        symbol: "WETH/AMPL",
        name: "WETH/AMPL",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
            symbol: "AMPL",
            name: "Ampleforth"
        }
    },
    RAD_USDC: {
        address: "0x8c1c499b1796d7f3c2521ac37186b52de024e58c",
        abi: "UniswapV2Pair",
        symbol: "RAD/USDC",
        name: "RAD/USDC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x31c8eacbffdd875c74b94b077895bd78cf1e64a3",
            symbol: "RAD",
            name: "Radicle"
        },
        token1: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        }
    },
    mTSLA_UST: {
        address: "0x5233349957586a8207c52693a959483f9aeaa50c",
        abi: "UniswapV2Pair",
        symbol: "mTSLA/UST",
        name: "mTSLA/UST",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x21ca39943e91d704678f5d00b6616650f066fd63",
            symbol: "mTSLA",
            name: "Wrapped Mirror TSLA Token"
        },
        token1: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        }
    },
    DG_USDC: {
        address: "0x873056a02255872514f05249d93228d788fe4fb4",
        abi: "UniswapV2Pair",
        symbol: "DG/USDC",
        name: "DG/USDC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x53c8395465a84955c95159814461466053dedede",
            symbol: "DG",
            name: "DeGate Token"
        },
        token1: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        }
    },
    UST_USDT: {
        address: "0xc50ef7861153c51d383d9a7d48e6c9467fb90c38",
        abi: "UniswapV2Pair",
        symbol: "UST/USDT",
        name: "UST/USDT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        },
        token1: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            symbol: "USDT",
            name: "Tether USD"
        }
    },
    HIGH_WETH: {
        address: "0x3854612b93b140726167cca5418b01e832515d42",
        abi: "UniswapV2Pair",
        symbol: "HIGH/WETH",
        name: "HIGH/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x71ab77b7dbb4fa7e017bc15090b2163221420282",
            symbol: "HIGH",
            name: "Highstreet token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    FLX_USDC: {
        address: "0xd6ef070951d008f1e6426ad9ca1c4fcf7220ee4d",
        abi: "UniswapV2Pair",
        symbol: "FLX/USDC",
        name: "FLX/USDC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x3ea8ea4237344c9931214796d9417af1a1180770",
            symbol: "FLX",
            name: "Flux Token"
        },
        token1: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        }
    },
    KUMA_WETH: {
        address: "0xdf60e6416fcf8c955fddf01148753a911f7a5905",
        abi: "UniswapV2Pair",
        symbol: "KUMA/WETH",
        name: "KUMA/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x48c276e8d03813224bb1e55f953adb6d02fd3e02",
            symbol: "KUMA",
            name: "Kuma Inu"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    RACA_USDT: {
        address: "0x700fc86c46299cf2a8fd86edadae3f57014351b0",
        abi: "UniswapV2Pair",
        symbol: "RACA/USDT",
        name: "RACA/USDT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x12bb890508c125661e03b09ec06e404bc9289040",
            symbol: "RACA",
            name: "Radio Caca V2"
        },
        token1: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            symbol: "USDT",
            name: "Tether USD"
        }
    },
    ShibDoge_WETH: {
        address: "0x3016a43b482d0480460f6625115bd372fe90c6bf",
        abi: "UniswapV2Pair",
        symbol: "ShibDoge/WETH",
        name: "ShibDoge/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x6adb2e268de2aa1abf6578e4a8119b960e02928f",
            symbol: "ShibDoge",
            name: "ShibaDoge"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    MINDS_WETH: {
        address: "0x8ff2fd6f94cdce7c56bb11328eb9928c9483aa66",
        abi: "UniswapV2Pair",
        symbol: "MINDS/WETH",
        name: "MINDS/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xb26631c6dda06ad89b93c71400d25692de89c068",
            symbol: "MINDS",
            name: "Minds"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    mSLV_UST: {
        address: "0x860425be6ad1345dc7a3e287facbf32b18bc4fae",
        abi: "UniswapV2Pair",
        symbol: "mSLV/UST",
        name: "mSLV/UST",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x9d1555d8cb3c846bb4f7d5b1b1080872c3166676",
            symbol: "mSLV",
            name: "Wrapped Mirror SLV Token"
        },
        token1: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        }
    },
    PERP_WETH: {
        address: "0xf66369997ae562bc9eec2ab9541581252f9ca383",
        abi: "UniswapV2Pair",
        symbol: "PERP/WETH",
        name: "PERP/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xbc396689893d065f41bc2c6ecbee5e0085233447",
            symbol: "PERP",
            name: "Perpetual"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    POLS_WETH: {
        address: "0xffa98a091331df4600f87c9164cd27e8a5cd2405",
        abi: "UniswapV2Pair",
        symbol: "POLS/WETH",
        name: "POLS/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa",
            symbol: "POLS",
            name: "PolkastarterToken"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_FLOKI: {
        address: "0xca7c2771d248dcbe09eabe0ce57a62e18da178c0",
        abi: "UniswapV2Pair",
        symbol: "WETH/FLOKI",
        name: "WETH/FLOKI",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e",
            symbol: "FLOKI",
            name: "FLOKI"
        }
    },
    TEMPLE_FRAX: {
        address: "0x9fe47318fa2b28b53ce673852922c4065b0bebcd",
        abi: "UniswapV2Pair",
        symbol: "TEMPLE/FRAX",
        name: "TEMPLE/FRAX",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x470ebf5f030ed85fc1ed4c2d36b9dd02e77cf1b7",
            symbol: "TEMPLE",
            name: "Temple"
        },
        token1: {
            address: "0x853d955acef822db058eb8505911ed77f175b99e",
            symbol: "FRAX",
            name: "Frax"
        }
    },
    FEG_WETH: {
        address: "0x854373387e41371ac6e307a1f29603c6fa10d872",
        abi: "UniswapV2Pair",
        symbol: "FEG/WETH",
        name: "FEG/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x389999216860ab8e0175387a0c90e5c52522c945",
            symbol: "FEG",
            name: "FEGtoken"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    PDT_WETH: {
        address: "0xee5647e90cc76bb966d2babb483995f3efd95c39",
        abi: "UniswapV2Pair",
        symbol: "PDT/WETH",
        name: "PDT/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x375abb85c329753b1ba849a601438ae77eec9893",
            symbol: "PDT",
            name: "Paragons DAO Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    PKF_WETH: {
        address: "0xfe903a12359496b932e24c5e9b78f1b9060a6342",
        abi: "UniswapV2Pair",
        symbol: "PKF/WETH",
        name: "PKF/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x8b39b70e39aa811b69365398e0aace9bee238aeb",
            symbol: "PKF",
            name: "PolkaFoundry"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    AUDIO_WETH: {
        address: "0xc730ef0f4973da9cc0ab8ab291890d3e77f58f79",
        abi: "UniswapV2Pair",
        symbol: "AUDIO/WETH",
        name: "AUDIO/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x18aaa7115705e8be94bffebde57af9bfc265b998",
            symbol: "AUDIO",
            name: "Audius"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WHALE_WETH: {
        address: "0x4fda00d490c1c05ff15d7313d1cebe9c711e434b",
        abi: "UniswapV2Pair",
        symbol: "WHALE/WETH",
        name: "WHALE/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x9355372396e3f6daf13359b7b607a3374cc638e0",
            symbol: "WHALE",
            name: "WHALE"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    LON_WETH: {
        address: "0x7924a818013f39cf800f5589ff1f1f0def54f31f",
        abi: "UniswapV2Pair",
        symbol: "LON/WETH",
        name: "LON/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x0000000000095413afc295d19edeb1ad7b71c952",
            symbol: "LON",
            name: "Tokenlon"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    IQ_FRAX: {
        address: "0xd6c783b257e662ca949b441a4fcb08a53fc49914",
        abi: "UniswapV2Pair",
        symbol: "IQ/FRAX",
        name: "IQ/FRAX",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x579cea1889991f68acc35ff5c3dd0621ff29b0c9",
            symbol: "IQ",
            name: "Everipedia IQ"
        },
        token1: {
            address: "0x853d955acef822db058eb8505911ed77f175b99e",
            symbol: "FRAX",
            name: "Frax"
        }
    },
    WETH_VEMP: {
        address: "0x05be6820730b30086d6355c44c424230aaff41fb",
        abi: "UniswapV2Pair",
        symbol: "WETH/VEMP",
        name: "WETH/VEMP",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xcfeb09c3c5f0f78ad72166d55f9e6e9a60e96eec",
            symbol: "VEMP",
            name: "vEmpire Gamer Token"
        }
    },
    WETH_PEEPS: {
        address: "0x6cbcd84abcfbb411426dc21a621fe9a68b985bf4",
        abi: "UniswapV2Pair",
        symbol: "WETH/PEEPS",
        name: "WETH/PEEPS",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xe1030b48b2033314979143766d7dc1f40ef8ce11",
            symbol: "PEEPS",
            name: "The People’s Coin"
        }
    },
    DG_WETH: {
        address: "0x3df70e5b6edead5277590d3de5731d17f46e043b",
        abi: "UniswapV2Pair",
        symbol: "DG/WETH",
        name: "DG/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x4b520c812e8430659fc9f12f6d0c39026c83588d",
            symbol: "DG",
            name: "Decentral Games"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_MCC: {
        address: "0x9c2b19dbdfad3f283c0b96c5546d91a275778d91",
        abi: "UniswapV2Pair",
        symbol: "WETH/MCC",
        name: "WETH/MCC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xc146b7cdbaff065090077151d391f4c96aa09e0c",
            symbol: "MCC",
            name: "MultiChainCapital"
        }
    },
    WETH_KEYS: {
        address: "0x5bacb4114ad2d448e79addef121714b74d67faec",
        abi: "UniswapV2Pair",
        symbol: "WETH/KEYS",
        name: "WETH/KEYS",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xe0a189c975e4928222978a74517442239a0b86ff",
            symbol: "KEYS",
            name: "Keys"
        }
    },
    CDS_WETH: {
        address: "0x0be902716176d66364f1c2ecf25829a6d95c5bee",
        abi: "UniswapV2Pair",
        symbol: "CDS/WETH",
        name: "CDS/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x3c48ca59bf2699e51d4974d4b6d284ae52076e5e",
            symbol: "CDS",
            name: "Capital DAO Starter Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_AMP: {
        address: "0x08650bb9dc722c9c8c62e79c2bafa2d3fc5b3293",
        abi: "UniswapV2Pair",
        symbol: "WETH/AMP",
        name: "WETH/AMP",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xff20817765cb7f73d4bde2e66e067e58d11095c2",
            symbol: "AMP",
            name: "Amp"
        }
    },
    USDT_HEZ: {
        address: "0xf6c4e4f339912541d3f8ed99dba64a1372af5e5b",
        abi: "UniswapV2Pair",
        symbol: "USDT/HEZ",
        name: "USDT/HEZ",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            symbol: "USDT",
            name: "Tether USD"
        },
        token1: {
            address: "0xeef9f339514298c6a857efcfc1a762af84438dee",
            symbol: "HEZ",
            name: "Hermez Network Token"
        }
    },
    mGOOGL_UST: {
        address: "0x4b70ccd1cf9905be1faed025eadbd3ab124efe9a",
        abi: "UniswapV2Pair",
        symbol: "mGOOGL/UST",
        name: "mGOOGL/UST",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x59a921db27dd6d4d974745b7ffc5c33932653442",
            symbol: "mGOOGL",
            name: "Wrapped Mirror GOOGL Token"
        },
        token1: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        }
    },
    VOLT_WETH: {
        address: "0xfe796ba940256e65048d1e6b52ec8755067c7145",
        abi: "UniswapV2Pair",
        symbol: "VOLT/WETH",
        name: "VOLT/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x3f7aff0ef20aa2e646290dfa4e67611b2220c597",
            symbol: "VOLT",
            name: "Volt Inu"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    HEX_WETH: {
        address: "0x55d5c232d921b9eaa6b37b5845e439acd04b4dba",
        abi: "UniswapV2Pair",
        symbol: "HEX/WETH",
        name: "HEX/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
            symbol: "HEX",
            name: "HEX"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    mQQQ_UST: {
        address: "0x9e3b47b861b451879d43bba404c35bdfb99f0a6c",
        abi: "UniswapV2Pair",
        symbol: "mQQQ/UST",
        name: "mQQQ/UST",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x13b02c8de71680e71f0820c996e4be43c2f57d15",
            symbol: "mQQQ",
            name: "Wrapped Mirror QQQ Token"
        },
        token1: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        }
    },
    GUILD_USDC: {
        address: "0xdcec563a15b0de0fdfc19c97d5ee18a5570fed7f",
        abi: "UniswapV2Pair",
        symbol: "GUILD/USDC",
        name: "GUILD/USDC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x83e9f223e1edb3486f876ee888d76bfba26c475a",
            symbol: "GUILD",
            name: "BlockchainSpace"
        },
        token1: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        }
    },
    WETH_URUS: {
        address: "0xebd54ad6c1d4b079bdc20ecf36dd29d1d76c9977",
        abi: "UniswapV2Pair",
        symbol: "WETH/URUS",
        name: "WETH/URUS",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xc6dddb5bc6e61e0841c54f3e723ae1f3a807260b",
            symbol: "URUS",
            name: "Aurox Token"
        }
    },
    SWFL_WETH: {
        address: "0x2caccf71bdf8fff97c06a46eca29b611b1a74b5e",
        abi: "UniswapV2Pair",
        symbol: "SWFL/WETH",
        name: "SWFL/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xba21ef4c9f433ede00badefcc2754b8e74bd538a",
            symbol: "SWFL",
            name: "Swapfolio"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_wCELO: {
        address: "0x8d1ca95559abed542ef4402a252974221b5e1036",
        abi: "UniswapV2Pair",
        symbol: "WETH/wCELO",
        name: "WETH/wCELO",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xe452e6ea2ddeb012e20db73bf5d3863a3ac8d77a",
            symbol: "wCELO",
            name: "Wrapped Celo"
        }
    },
    WETH_PUSH: {
        address: "0xaf31fd9c3b0350424bf96e551d2d1264d8466205",
        abi: "UniswapV2Pair",
        symbol: "WETH/PUSH",
        name: "WETH/PUSH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xf418588522d5dd018b425e472991e52ebbeeeeee",
            symbol: "PUSH",
            name: "Ethereum Push Notification Service"
        }
    },
    KISHU_WETH: {
        address: "0xf82d8ec196fb0d56c6b82a8b1870f09502a49f88",
        abi: "UniswapV2Pair",
        symbol: "KISHU/WETH",
        name: "KISHU/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa2b4c0af19cc16a6cfacce81f192b024d625817d",
            symbol: "KISHU",
            name: "Kishu Inu"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    UST_mAAPL: {
        address: "0xb022e08adc8ba2de6ba4fecb59c6d502f66e953b",
        abi: "UniswapV2Pair",
        symbol: "UST/mAAPL",
        name: "UST/mAAPL",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        },
        token1: {
            address: "0xd36932143f6ebdedd872d5fb0651f4b72fd15a84",
            symbol: "mAAPL",
            name: "Wrapped Mirror AAPL Token"
        }
    },
    AELIN_WETH: {
        address: "0x974d51fafc9013e42cbbb9465ea03fe097824bcc",
        abi: "UniswapV2Pair",
        symbol: "AELIN/WETH",
        name: "AELIN/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa9c125bf4c8bb26f299c00969532b66732b1f758",
            symbol: "AELIN",
            name: "Aelin"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    XFI_WETH: {
        address: "0xaf996125e98b5804c00ffdb4f7ff386307c99a00",
        abi: "UniswapV2Pair",
        symbol: "XFI/WETH",
        name: "XFI/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x5befbb272290dd5b8521d4a938f6c4757742c430",
            symbol: "XFI",
            name: "Xfinance"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_GOVI: {
        address: "0x1ee312a6d5fe7b4b8c25f0a32fca6391209ebebf",
        abi: "UniswapV2Pair",
        symbol: "WETH/GOVI",
        name: "WETH/GOVI",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107",
            symbol: "GOVI",
            name: "GOVI"
        }
    },
    GM_WETH: {
        address: "0x98d677887af8a699be38ef6276f4cd84aca29d74",
        abi: "UniswapV2Pair",
        symbol: "GM/WETH",
        name: "GM/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xbc7250c8c3eca1dfc1728620af835fca489bfdf3",
            symbol: "GM",
            name: "GM"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    BOTTO_WETH: {
        address: "0x9ff68f61ca5eb0c6606dc517a9d44001e564bb66",
        abi: "UniswapV2Pair",
        symbol: "BOTTO/WETH",
        name: "BOTTO/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x9dfad1b7102d46b1b197b90095b5c4e9f5845bba",
            symbol: "BOTTO",
            name: "Botto"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    DPI_WETH: {
        address: "0x4d5ef58aac27d99935e5b6b4a6778ff292059991",
        abi: "UniswapV2Pair",
        symbol: "DPI/WETH",
        name: "DPI/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b",
            symbol: "DPI",
            name: "DefiPulse Index"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    USDC_DOE: {
        address: "0xa626eb9cc7dec00703586414d0811e1ba2021443",
        abi: "UniswapV2Pair",
        symbol: "USDC/DOE",
        name: "USDC/DOE",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        },
        token1: {
            address: "0xf8e9f10c22840b613cda05a0c5fdb59a4d6cd7ef",
            symbol: "DOE",
            name: "Dogs Of Elon"
        }
    },
    SHEESHA_WETH: {
        address: "0x602414a63c90801dc4337ee440b3454a6d2c275b",
        abi: "UniswapV2Pair",
        symbol: "SHEESHA/WETH",
        name: "SHEESHA/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x232fb065d9d24c34708eedbf03724f2e95abe768",
            symbol: "SHEESHA",
            name: "Sheesha Finance"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    SUNC_WETH: {
        address: "0xaf5a7469cf2571b973aeee9ae2f8aad00e1337d2",
        abi: "UniswapV2Pair",
        symbol: "SUNC/WETH",
        name: "SUNC/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x692accdd8b86692427e0aa4752ae917df01cc56f",
            symbol: "SUNC",
            name: "Sunrise Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    MIR_UST: {
        address: "0x87da823b6fc8eb8575a235a824690fda94674c88",
        abi: "UniswapV2Pair",
        symbol: "MIR/UST",
        name: "MIR/UST",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x09a3ecafa817268f77be1283176b946c4ff2e608",
            symbol: "MIR",
            name: "Wrapped MIR Token"
        },
        token1: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        }
    },
    WETH_DEXT: {
        address: "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d",
        abi: "UniswapV2Pair",
        symbol: "WETH/DEXT",
        name: "WETH/DEXT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xfb7b4564402e5500db5bb6d63ae671302777c75a",
            symbol: "DEXT",
            name: "DEXTools"
        }
    },
    WETH_BEZOGE: {
        address: "0x1f964ff83c54ce447adae5cb93f9ec17018bf55b",
        abi: "UniswapV2Pair",
        symbol: "WETH/BEZOGE",
        name: "WETH/BEZOGE",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xdc349913d53b446485e98b76800b6254f43df695",
            symbol: "BEZOGE",
            name: "Bezoge Earth"
        }
    },
    KEX_WETH: {
        address: "0x1bfffb738d69167d5592160a47d5404a3cf5a846",
        abi: "UniswapV2Pair",
        symbol: "KEX/WETH",
        name: "KEX/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x16980b3b4a3f9d89e33311b5aa8f80303e5ca4f8",
            symbol: "KEX",
            name: "KIRA Network"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WDOGE_WETH: {
        address: "0xc3d7aa944105d3fafe07fc1822102449c916a8d0",
        abi: "UniswapV2Pair",
        symbol: "WDOGE/WETH",
        name: "WDOGE/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x35a532d376ffd9a705d0bb319532837337a398e7",
            symbol: "WDOGE",
            name: "Wrapped DogeCoin"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    ANT_WETH: {
        address: "0x9def9511fec79f83afcbffe4776b1d817dc775ae",
        abi: "UniswapV2Pair",
        symbol: "ANT/WETH",
        name: "ANT/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa117000000f279d81a1d3cc75430faa017fa5a2e",
            symbol: "ANT",
            name: "Aragon Network Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    SHKOOBY_WETH: {
        address: "0xbbbf1426cbe8509ef58451ab7ad67cb74866e3fa",
        abi: "UniswapV2Pair",
        symbol: "SHKOOBY/WETH",
        name: "SHKOOBY/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x29a5c1db7321c5c9eae57f9366ee8eef00ca11fb",
            symbol: "SHKOOBY",
            name: "SHKOOBY INU"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_LUFFY: {
        address: "0x4e84460a8b8bad045ff4eb5be1ecce7a3e3a17c8",
        abi: "UniswapV2Pair",
        symbol: "WETH/LUFFY",
        name: "WETH/LUFFY",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xc1bfccd4c29813ede019d00d2179eea838a67703",
            symbol: "LUFFY",
            name: "Luffy Inu"
        }
    },
    RBC_WETH: {
        address: "0x10db37f4d9b3bc32ae8303b46e6166f7e9652d28",
        abi: "UniswapV2Pair",
        symbol: "RBC/WETH",
        name: "RBC/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3",
            symbol: "RBC",
            name: "Rubic"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_DETS: {
        address: "0xaf21b0ec0197e63a5c6cc30c8e947eb8165c6212",
        abi: "UniswapV2Pair",
        symbol: "WETH/DETS",
        name: "WETH/DETS",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xd379700999f4805ce80aa32db46a94df64561108",
            symbol: "DETS",
            name: "Dextrust"
        }
    },
    SHIB_WETH: {
        address: "0x811beed0119b4afce20d2583eb608c6f7af1954f",
        abi: "UniswapV2Pair",
        symbol: "SHIB/WETH",
        name: "SHIB/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
            symbol: "SHIB",
            name: "SHIBA INU"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    DOGE_WETH: {
        address: "0xc0067d751fb1172dbab1fa003efe214ee8f419b6",
        abi: "UniswapV2Pair",
        symbol: "DOGE/WETH",
        name: "DOGE/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x4206931337dc273a630d328da6441786bfad668f",
            symbol: "DOGE",
            name: "Dogecoin"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    EVN_WETH: {
        address: "0x29f07e631a2f990e1f6117c6285a44e746b1f090",
        abi: "UniswapV2Pair",
        symbol: "EVN/WETH",
        name: "EVN/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x9af15d7b8776fa296019979e70a5be53c714a7ec",
            symbol: "EVN",
            name: "Evn Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    ALBT_WETH: {
        address: "0xe5c5227d8105d8d5f26ff3634eb52e2d7cc15b50",
        abi: "UniswapV2Pair",
        symbol: "ALBT/WETH",
        name: "ALBT/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x00a8b738e453ffd858a7edf03bccfe20412f0eb0",
            symbol: "ALBT",
            name: "AllianceBlock Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    AKITA_WETH: {
        address: "0xda3a20aad0c34fa742bd9813d45bbf67c787ae0b",
        abi: "UniswapV2Pair",
        symbol: "AKITA/WETH",
        name: "AKITA/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x3301ee63fb29f863f2333bd4466acb46cd8323e6",
            symbol: "AKITA",
            name: "Akita Inu"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    RBN_WETH: {
        address: "0xdb44a4a457c87225b5ba45f27b7828a4cc03c112",
        abi: "UniswapV2Pair",
        symbol: "RBN/WETH",
        name: "RBN/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x6123b0049f904d730db3c36a31167d9d4121fa6b",
            symbol: "RBN",
            name: "Ribbon"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    AURORA_WETH: {
        address: "0x629d22e6eeac46a11dbc96be93b90aee9309be4c",
        abi: "UniswapV2Pair",
        symbol: "AURORA/WETH",
        name: "AURORA/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xaaaaaa20d9e0e2461697782ef11675f668207961",
            symbol: "AURORA",
            name: "Aurora"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    KEEP_WETH: {
        address: "0xe6f19dab7d43317344282f803f8e8d240708174a",
        abi: "UniswapV2Pair",
        symbol: "KEEP/WETH",
        name: "KEEP/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x85eee30c52b0b379b046fb0f85f4f3dc3009afec",
            symbol: "KEEP",
            name: "KEEP Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    XCAD_USDT: {
        address: "0x6f118ecebc31a5ffe49b87c47ea80f93a2af0a8a",
        abi: "UniswapV2Pair",
        symbol: "XCAD/USDT",
        name: "XCAD/USDT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x7659ce147d0e714454073a5dd7003544234b6aa0",
            symbol: "XCAD",
            name: "XCAD Token"
        },
        token1: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            symbol: "USDT",
            name: "Tether USD"
        }
    },
    MATIC_WETH: {
        address: "0x819f3450da6f110ba6ea52195b3beafa246062de",
        abi: "UniswapV2Pair",
        symbol: "MATIC/WETH",
        name: "MATIC/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
            symbol: "MATIC",
            name: "Matic Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_ankrETH: {
        address: "0x6147805e1011417b93e5d693424a62a70d09d0e5",
        abi: "UniswapV2Pair",
        symbol: "WETH/ankrETH",
        name: "WETH/ankrETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xe95a203b1a91a908f9b9ce46459d101078c2c3cb",
            symbol: "ankrETH",
            name: "Ankr ETH"
        }
    },
    DEPO_WETH: {
        address: "0xae8b9d75a75a8b7c5cc5deb51fa916ac49147dad",
        abi: "UniswapV2Pair",
        symbol: "DEPO/WETH",
        name: "DEPO/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa5def515cfd373d17830e7c1de1639cb3530a112",
            symbol: "DEPO",
            name: "DePo Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    DOGE_USDT: {
        address: "0xfcd13ea0b906f2f87229650b8d93a51b2e839ebd",
        abi: "UniswapV2Pair",
        symbol: "DOGE/USDT",
        name: "DOGE/USDT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x4206931337dc273a630d328da6441786bfad668f",
            symbol: "DOGE",
            name: "Dogecoin"
        },
        token1: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            symbol: "USDT",
            name: "Tether USD"
        }
    },
    mBABA_UST: {
        address: "0x676ce85f66adb8d7b8323aeefe17087a3b8cb363",
        abi: "UniswapV2Pair",
        symbol: "mBABA/UST",
        name: "mBABA/UST",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x56aa298a19c93c6801fdde870fa63ef75cc0af72",
            symbol: "mBABA",
            name: "Wrapped Mirror BABA Token"
        },
        token1: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        }
    },
    UST_mNFLX: {
        address: "0xc99a74145682c4b4a6e9fa55d559eb49a6884f75",
        abi: "UniswapV2Pair",
        symbol: "UST/mNFLX",
        name: "UST/mNFLX",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        },
        token1: {
            address: "0xc8d674114bac90148d11d3c1d33c61835a0f9dcd",
            symbol: "mNFLX",
            name: "Wrapped Mirror NFLX Token"
        }
    },
    WETH_TVK: {
        address: "0x0f5a2eb364d8b722cba4e1e30e2cf57b6f515b2a",
        abi: "UniswapV2Pair",
        symbol: "WETH/TVK",
        name: "WETH/TVK",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988",
            symbol: "TVK",
            name: "Terra Virtua Kolect"
        }
    },
    XFIT_USDT: {
        address: "0xf8d99cf7046dedcb1dc8cfc309aa96946c9b9db2",
        abi: "UniswapV2Pair",
        symbol: "XFIT/USDT",
        name: "XFIT/USDT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x4aa41bc1649c9c3177ed16caaa11482295fc7441",
            symbol: "XFIT",
            name: "XFIT"
        },
        token1: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            symbol: "USDT",
            name: "Tether USD"
        }
    },
    SPOOL_DAI: {
        address: "0xf3b675df63fb4889180d290a338fc15c0766fd64",
        abi: "UniswapV2Pair",
        symbol: "SPOOL/DAI",
        name: "SPOOL/DAI",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x40803cea2b2a32bda1be61d3604af6a814e70976",
            symbol: "SPOOL",
            name: "Spool DAO Token"
        },
        token1: {
            address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            symbol: "DAI",
            name: "Dai Stablecoin"
        }
    },
    GLM_WETH: {
        address: "0xb5f790a03b7559312d9e738df5056a4b4c8459f4",
        abi: "UniswapV2Pair",
        symbol: "GLM/WETH",
        name: "GLM/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429",
            symbol: "GLM",
            name: "Golem Network Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    MUSE_WETH: {
        address: "0x20d2c17d1928ef4290bf17f922a10eaa2770bf43",
        abi: "UniswapV2Pair",
        symbol: "MUSE/WETH",
        name: "MUSE/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81",
            symbol: "MUSE",
            name: "Muse"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    MINTYS_WETH: {
        address: "0x1ae2bf1c5e67509ef5b2367751a87e65c47be2c4",
        abi: "UniswapV2Pair",
        symbol: "MINTYS/WETH",
        name: "MINTYS/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xbbd900e05b4af2124390d206f70bc4e583b1be85",
            symbol: "MINTYS",
            name: "MintySwap"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_C3: {
        address: "0x984a3eab3cf2fc2b4ca6e4a3768624a8272fe2a3",
        abi: "UniswapV2Pair",
        symbol: "WETH/C3",
        name: "WETH/C3",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xf1a91c7d44768070f711c68f33a7ca25c8d30268",
            symbol: "C3",
            name: "CHARLI3"
        }
    },
    VPAD_USDT: {
        address: "0x9f9373b2b5fe5f6b32f171191946b0be30e0bd30",
        abi: "UniswapV2Pair",
        symbol: "VPAD/USDT",
        name: "VPAD/USDT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x51fe2e572e97bfeb1d719809d743ec2675924edc",
            symbol: "VPAD",
            name: "VLaunch"
        },
        token1: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            symbol: "USDT",
            name: "Tether USD"
        }
    },
    WETH_ROOK: {
        address: "0x70ec2fa6eccf4010eaf572d1c1a7bcbc72dec983",
        abi: "UniswapV2Pair",
        symbol: "WETH/ROOK",
        name: "WETH/ROOK",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xfa5047c9c78b8877af97bdcb85db743fd7313d4a",
            symbol: "ROOK",
            name: "ROOK"
        }
    },
    REFI_WETH: {
        address: "0x60148519ad90ca9bb11a126f466fbfb73d895ce6",
        abi: "UniswapV2Pair",
        symbol: "REFI/WETH",
        name: "REFI/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa808b22ffd2c472ad1278088f16d4010e6a54d5f",
            symbol: "REFI",
            name: "ReFi"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    FANV_WETH: {
        address: "0x6a322a02596793fc4a8123be18b10b9f0f718821",
        abi: "UniswapV2Pair",
        symbol: "FANV/WETH",
        name: "FANV/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x43835ca7646c07b6933d0c1c16ddc41c4cb5600e",
            symbol: "FANV",
            name: "FanVerse"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    mUSO_UST: {
        address: "0x6bd8ca9d141aa95842b41e1431a244c309c9008c",
        abi: "UniswapV2Pair",
        symbol: "mUSO/UST",
        name: "mUSO/UST",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x31c63146a635eb7465e5853020b39713ac356991",
            symbol: "mUSO",
            name: "Wrapped Mirror USO Token"
        },
        token1: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        }
    },
    VIDYA_WETH: {
        address: "0xda3706c9a099077e6bc389d1baf918565212a54d",
        abi: "UniswapV2Pair",
        symbol: "VIDYA/WETH",
        name: "VIDYA/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30",
            symbol: "VIDYA",
            name: "Vidya"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    APOLLO_WETH: {
        address: "0x56606d52e8f4186c80cf94a6230986bacba8b6b5",
        abi: "UniswapV2Pair",
        symbol: "APOLLO/WETH",
        name: "APOLLO/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xadf86e75d8f0f57e0288d0970e7407eaa49b3cab",
            symbol: "APOLLO",
            name: "Apollo Inu"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    RVST_WETH: {
        address: "0x6490828bd87be38279a36f029f3b9af8b4e14b49",
        abi: "UniswapV2Pair",
        symbol: "RVST/WETH",
        name: "RVST/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x120a3879da835a5af037bb2d1456bebd6b54d4ba",
            symbol: "RVST",
            name: "Revest"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    DAO_USDC: {
        address: "0x4cd36d6f32586177e36179a810595a33163a20bf",
        abi: "UniswapV2Pair",
        symbol: "DAO/USDC",
        name: "DAO/USDC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x0f51bb10119727a7e5ea3538074fb341f56b09ad",
            symbol: "DAO",
            name: "DAO Maker"
        },
        token1: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        }
    },
    CARDS_WETH: {
        address: "0x94ae6d2390680ac6e6ee6069be42067d6ad72e2a",
        abi: "UniswapV2Pair",
        symbol: "CARDS/WETH",
        name: "CARDS/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x3d6f0dea3ac3c607b3998e6ce14b6350721752d9",
            symbol: "CARDS",
            name: "CARD.STARTER"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    OIL_USDC: {
        address: "0x0e9c8107682ab88604b4fbf847eeeceacf38e9e6",
        abi: "UniswapV2Pair",
        symbol: "OIL/USDC",
        name: "OIL/USDC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x0275e1001e293c46cfe158b3702aade0b99f88a5",
            symbol: "OIL",
            name: "Oiler"
        },
        token1: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        }
    },
    LBY_WETH: {
        address: "0x28025dd7ab301df09e9d5d245e39777a40f37144",
        abi: "UniswapV2Pair",
        symbol: "LBY/WETH",
        name: "LBY/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xac042d9284df95cc6bd35982f6a61e3e7a6f875b",
            symbol: "LBY",
            name: "Lobby"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    CVP_WETH: {
        address: "0x12d4444f96c644385d8ab355f6ddf801315b6254",
        abi: "UniswapV2Pair",
        symbol: "CVP/WETH",
        name: "CVP/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1",
            symbol: "CVP",
            name: "Concentrated Voting Power"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_renFIL: {
        address: "0x4423be2173401e96065953a3e962ba7b8fdba68a",
        abi: "UniswapV2Pair",
        symbol: "WETH/renFIL",
        name: "WETH/renFIL",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xd5147bc8e386d91cc5dbe72099dac6c9b99276f5",
            symbol: "renFIL",
            name: "renFIL"
        }
    },
    GRO_USDC: {
        address: "0x21c5918ccb42d20a2368bdca8feda0399ebfd2f6",
        abi: "UniswapV2Pair",
        symbol: "GRO/USDC",
        name: "GRO/USDC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x3ec8798b81485a254928b70cda1cf0a2bb0b74d7",
            symbol: "GRO",
            name: "Gro DAO Token"
        },
        token1: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        }
    },
    WETH_KISHIMOTO: {
        address: "0xdf42388059692150d0a9de836e4171c7b9c09cbf",
        abi: "UniswapV2Pair",
        symbol: "WETH/KISHIMOTO",
        name: "WETH/KISHIMOTO",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xf5b1fd29d23e98db2d9ebb8435e1082e3b38fb65",
            symbol: "KISHIMOTO",
            name: "Kishimoto Inu"
        }
    },
    HOE_WETH: {
        address: "0xf52cc785d5f3e7d6ff0ad4e665a929b84f69e7c5",
        abi: "UniswapV2Pair",
        symbol: "HOE/WETH",
        name: "HOE/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa56ed2632e443db5f93e73c89df399a081408cc4",
            symbol: "HOE",
            name: "Gold Hoe One"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    LTX_WETH: {
        address: "0x69884da24f31960f694a8fa1f30aa8e0416fbd04",
        abi: "UniswapV2Pair",
        symbol: "LTX/WETH",
        name: "LTX/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa393473d64d2f9f026b60b6df7859a689715d092",
            symbol: "LTX",
            name: "Lattice Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    UST_mTWTR: {
        address: "0x34856be886a2dba5f7c38c4df7fd86869ab08040",
        abi: "UniswapV2Pair",
        symbol: "UST/mTWTR",
        name: "UST/mTWTR",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        },
        token1: {
            address: "0xedb0414627e6f1e3f082de65cd4f9c693d78cca9",
            symbol: "mTWTR",
            name: "Wrapped Mirror TWTR Token"
        }
    },
    DJ15_WETH: {
        address: "0x6a164da2cdae5f1836c8fe6d683c3df4a0a65e5c",
        abi: "UniswapV2Pair",
        symbol: "DJ15/WETH",
        name: "DJ15/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x5d269fac3b2e0552b0f34cdc253bdb427682a4b9",
            symbol: "DJ15",
            name: "Davincij15 Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    RAIN_WETH: {
        address: "0xc4a8c243d8cf7891d6282bb293e7a0aa4ef1ae51",
        abi: "UniswapV2Pair",
        symbol: "RAIN/WETH",
        name: "RAIN/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x71fc1f555a39e0b698653ab0b475488ec3c34d57",
            symbol: "RAIN",
            name: "Rainmaker Games"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    K21_WETH: {
        address: "0x3bf862093cbb6412b6ee498f4d652bba005aa7f3",
        abi: "UniswapV2Pair",
        symbol: "K21/WETH",
        name: "K21/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af",
            symbol: "K21",
            name: "k21.kanon.art"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    mMSFT_UST: {
        address: "0xeafad3065de347b910bb88f09a5abe580a09d655",
        abi: "UniswapV2Pair",
        symbol: "mMSFT/UST",
        name: "mMSFT/UST",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x41bbedd7286daab5910a1f15d12cbda839852bd7",
            symbol: "mMSFT",
            name: "Wrapped Mirror MSFT Token"
        },
        token1: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        }
    },
    mAMZN_UST: {
        address: "0x0ae8cb1f57e3b1b7f4f5048743710084aa69e796",
        abi: "UniswapV2Pair",
        symbol: "mAMZN/UST",
        name: "mAMZN/UST",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x0cae9e4d663793c2a2a0b211c1cf4bbca2b9caa7",
            symbol: "mAMZN",
            name: "Wrapped Mirror AMZN Token"
        },
        token1: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        }
    },
    SPI_WETH: {
        address: "0xe3ee3d5f7e9c750490d99ab166edc1886de0a85e",
        abi: "UniswapV2Pair",
        symbol: "SPI/WETH",
        name: "SPI/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7",
            symbol: "SPI",
            name: "Shopping.io"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    DERC_USDC: {
        address: "0xc88ac988a655b91b70def427c8778b4d43f2048d",
        abi: "UniswapV2Pair",
        symbol: "DERC/USDC",
        name: "DERC/USDC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x9fa69536d1cda4a04cfb50688294de75b505a9ae",
            symbol: "DERC",
            name: "DeRace Token"
        },
        token1: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        }
    },
    AVG_WETH: {
        address: "0xfa5562729fdc3ed3a52c3aab2e12bd504fd24991",
        abi: "UniswapV2Pair",
        symbol: "AVG/WETH",
        name: "AVG/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa41f142b6eb2b164f8164cae0716892ce02f311f",
            symbol: "AVG",
            name: "Avocado DAO Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    MONGOOSE_WETH: {
        address: "0x450e653a0a125a1dc36d3901d3cce2e2287df0c2",
        abi: "UniswapV2Pair",
        symbol: "MONGOOSE/WETH",
        name: "MONGOOSE/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa1817b6d8d890f3943b61648992730373b71f156",
            symbol: "MONGOOSE",
            name: "Mongoose"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    FEI_WETH: {
        address: "0x94b0a3d511b6ecdb17ebf877278ab030acb0a878",
        abi: "UniswapV2Pair",
        symbol: "FEI/WETH",
        name: "FEI/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
            symbol: "FEI",
            name: "Fei USD"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    MRI_WETH: {
        address: "0xaae64809138f576b0b50f1d898dd99055327c2d3",
        abi: "UniswapV2Pair",
        symbol: "MRI/WETH",
        name: "MRI/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x0913ddae242839f8995c0375493f9a1a3bddc977",
            symbol: "MRI",
            name: "Marshall Rogan Inu"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    UMX_WETH: {
        address: "0x383d02acbb27b0066234cc1c9c459e0c54a41b24",
        abi: "UniswapV2Pair",
        symbol: "UMX/WETH",
        name: "UMX/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x10be9a8dae441d276a5027936c3aaded2d82bc15",
            symbol: "UMX",
            name: "https:unimex.network/"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    SKL_WETH: {
        address: "0xf232d640a5700724748464ba8bd8bed21db609a6",
        abi: "UniswapV2Pair",
        symbol: "SKL/WETH",
        name: "SKL/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7",
            symbol: "SKL",
            name: "SKALE"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    pBTC_WETH: {
        address: "0x8d50d0fd88016ea63229e432803db4069c40db09",
        abi: "UniswapV2Pair",
        symbol: "pBTC/WETH",
        name: "pBTC/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x5228a22e72ccc52d415ecfd199f99d0665e7733b",
            symbol: "pBTC",
            name: "pTokens BTC"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    MPL_USDC: {
        address: "0x7b28470032da06051f2e620531adbaeadb285408",
        abi: "UniswapV2Pair",
        symbol: "MPL/USDC",
        name: "MPL/USDC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x33349b282065b0284d756f0577fb39c158f935e6",
            symbol: "MPL",
            name: "Maple Token"
        },
        token1: {
            address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            symbol: "USDC",
            name: "USDC"
        }
    },
    mIAU_UST: {
        address: "0xd7f97aa0317c08a1f5c2732e7894933f11724868",
        abi: "UniswapV2Pair",
        symbol: "mIAU/UST",
        name: "mIAU/UST",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x1d350417d9787e000cc1b95d70e9536dcd91f373",
            symbol: "mIAU",
            name: "Wrapped Mirror IAU Token"
        },
        token1: {
            address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
            symbol: "UST",
            name: "Wrapped UST Token"
        }
    },
    FILST_USDT: {
        address: "0xa2f6a219a51b4682e34a13a94c160d6c79cdca35",
        abi: "UniswapV2Pair",
        symbol: "FILST/USDT",
        name: "FILST/USDT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x7346ad4c8cd1886ff6d16072bcea5dfc0bc24ca2",
            symbol: "FILST",
            name: "Filecoin Standard Token"
        },
        token1: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            symbol: "USDT",
            name: "Tether USD"
        }
    },
    WBTC_BADGER: {
        address: "0xcd7989894bc033581532d2cd88da5db0a4b12859",
        abi: "UniswapV2Pair",
        symbol: "WBTC/BADGER",
        name: "WBTC/BADGER",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            symbol: "WBTC",
            name: "Wrapped BTC"
        },
        token1: {
            address: "0x3472a5a71965499acd81997a54bba8d852c6e53d",
            symbol: "BADGER",
            name: "Badger"
        }
    },
    BIRD_WETH: {
        address: "0x6d76f7d16ca40dd13e52df3e1615318f763c0241",
        abi: "UniswapV2Pair",
        symbol: "BIRD/WETH",
        name: "BIRD/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x70401dfd142a16dc7031c56e862fc88cb9537ce0",
            symbol: "BIRD",
            name: "Bird.Money"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    BLANK_WETH: {
        address: "0xd8a07e9fe071106bf29536b93e8c9a26527af787",
        abi: "UniswapV2Pair",
        symbol: "BLANK/WETH",
        name: "BLANK/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x41a3dba3d677e573636ba691a70ff2d606c29666",
            symbol: "BLANK",
            name: "GoBlank Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    SDT_WETH: {
        address: "0xc465c0a16228ef6fe1bf29c04fdb04bb797fd537",
        abi: "UniswapV2Pair",
        symbol: "SDT/WETH",
        name: "SDT/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f",
            symbol: "SDT",
            name: "Stake DAO Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    UNISTAKE_WETH: {
        address: "0x78b9524101fb67286338261ddd85e20665e571c1",
        abi: "UniswapV2Pair",
        symbol: "UNISTAKE/WETH",
        name: "UNISTAKE/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e",
            symbol: "UNISTAKE",
            name: "Unistake"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    pBTC35A_USDT: {
        address: "0x5b1e45ca08fa4d65aa7fdcf9e116990fb7fce73b",
        abi: "UniswapV2Pair",
        symbol: "pBTC35A/USDT",
        name: "pBTC35A/USDT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xa8b12cc90abf65191532a12bb5394a714a46d358",
            symbol: "pBTC35A",
            name: "POW BTC-35W/T"
        },
        token1: {
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            symbol: "USDT",
            name: "Tether USD"
        }
    },
    RENA_WETH: {
        address: "0xbc2c5392b0b841832bec8b9c30747badda7b70ca",
        abi: "UniswapV2Pair",
        symbol: "RENA/WETH",
        name: "RENA/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x56de8bc61346321d4f2211e3ac3c0a7f00db9b76",
            symbol: "RENA",
            name: "Rena"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WHITE_WETH: {
        address: "0xa3b79b78678c15eec77389b380988b0229da1876",
        abi: "UniswapV2Pair",
        symbol: "WHITE/WETH",
        name: "WHITE/WETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44",
            symbol: "WHITE",
            name: "Whiteheart Token"
        },
        token1: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        }
    },
    WETH_GAIN: {
        address: "0x4b3ec6f5290f729e4b9b0ccfbb1dfaa118c078a2",
        abi: "UniswapV2Pair",
        symbol: "WETH/GAIN",
        name: "WETH/GAIN",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xfcce65a70794bec59e5be38c85ebe71aedaa74ef",
            symbol: "GAIN",
            name: "GainSwap"
        }
    },
    WETH_RKFL: {
        address: "0xbc9d21652cca70f54351e3fb982c6b5dbe992a22",
        abi: "UniswapV2Pair",
        symbol: "WETH/RKFL",
        name: "WETH/RKFL",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            symbol: "WETH",
            name: "Wrapped Ether"
        },
        token1: {
            address: "0xdbf0fac1499a931ed6e5f6122dbbcd3b80f66c7e",
            symbol: "RKFL",
            name: "RocketFuel"
        }
    },
    agEUR_FEI: {
        address: "0xf89ce5ed65737da8440411544b0499c9fad323b2",
        abi: "UniswapV2Pair",
        symbol: "agEUR/FEI",
        name: "agEUR/FEI",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x1a7e4e63778b4f12a199c062f3efdd288afcbce8",
            symbol: "agEUR",
            name: "agEUR"
        },
        token1: {
            address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
            symbol: "FEI",
            name: "Fei USD"
        }
    },
    UETH_DAPE: {
        address: "0xf778c77ec3696879cb5ac814984655aefe66d716",
        abi: "UniswapV2Pair",
        symbol: "UETH/DAPE",
        name: "UETH/DAPE",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x395c8db957d743a62ac3aaaa4574553bcf2380b3",
            symbol: "UETH",
            name: "ulock.eth Wrapped Ether"
        },
        token1: {
            address: "0xb638ab512dd766ca5e9eb9690fc4d66b663f7a06",
            symbol: "DAPE",
            name: "Degen Ape"
        }
    },
    UETH_ULCK: {
        address: "0xe6c78983b07a07e0523b57e18aa23d3ae2519e05",
        abi: "UniswapV2Pair",
        symbol: "UETH/ULCK",
        name: "UETH/ULCK",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x395c8db957d743a62ac3aaaa4574553bcf2380b3",
            symbol: "UETH",
            name: "ulock.eth Wrapped Ether"
        },
        token1: {
            address: "0x598a754c5d678119e67574ff811da61d83c0e629",
            symbol: "ULCK",
            name: "uLock"
        }
    },
    ETH2POS_DC: {
        address: "0xe2f95dae6c5763c357447fe1ffb3f2a884bdc0b5",
        abi: "UniswapV2Pair",
        symbol: "ETH2POS/DC",
        name: "ETH2POS/DC",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x0698dda3c390ff92722f9eed766d8b1727621df9",
            symbol: "ETH2POS",
            name: "Ethereum2Proof-of-stake"
        },
        token1: {
            address: "0xb4056171aa3ba32da1f527431383619b3802802c",
            symbol: "DC",
            name: "Dcoin"
        }
    },
    DBL_BLUE: {
        address: "0xc86881ef494b049fe3e624ae6fdf542f58ab1931",
        abi: "UniswapV2Pair",
        symbol: "DBL/BLUE",
        name: "DBL/BLUE",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x292e57d8c8a5744e5b013c0f327c162dd1c18d29",
            symbol: "DBL",
            name: "Diamond Blue"
        },
        token1: {
            address: "0xbd9d26e318d329962694b6e09de628f6104a0606",
            symbol: "BLUE",
            name: "Blue Finance"
        }
    },
    FEI_FOX: {
        address: "0xbeddb932490e776301c776526615965fae2440de",
        abi: "UniswapV2Pair",
        symbol: "FEI/FOX",
        name: "FEI/FOX",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
            symbol: "FEI",
            name: "Fei USD"
        },
        token1: {
            address: "0xc770eefad204b5180df6a14ee197d99d808ee52d",
            symbol: "FOX",
            name: "FOX"
        }
    },
    SYN_FEI: {
        address: "0x9e2336aef4157944f201becd90ccb24e298660cb",
        abi: "UniswapV2Pair",
        symbol: "SYN/FEI",
        name: "SYN/FEI",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x0f2d719407fdbeff09d87557abb7232601fd9f29",
            symbol: "SYN",
            name: "Synapse"
        },
        token1: {
            address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
            symbol: "FEI",
            name: "Fei USD"
        }
    },
    FEI_TRIBE: {
        address: "0x9928e4046d7c6513326ccea028cd3e7a91c7590a",
        abi: "UniswapV2Pair",
        symbol: "FEI/TRIBE",
        name: "FEI/TRIBE",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
            symbol: "FEI",
            name: "Fei USD"
        },
        token1: {
            address: "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
            symbol: "TRIBE",
            name: "Tribe"
        }
    },
    M2_wPE: {
        address: "0x9816f26f43c4c02df0daae1a0ba6a4dcd30b8ab7",
        abi: "UniswapV2Pair",
        symbol: "M2/wPE",
        name: "M2/wPE",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x965d79f1a1016b574a62986e13ca8ab04dfdd15c",
            symbol: "M2",
            name: "M2"
        },
        token1: {
            address: "0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b",
            symbol: "wPE",
            name: "OPES Finance"
        }
    },
    HANU_GOJ: {
        address: "0x93512394a82d278b9961e3891a59c6dc1c2e4f98",
        abi: "UniswapV2Pair",
        symbol: "HANU/GOJ",
        name: "HANU/GOJ",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x72e5390edb7727e3d4e3436451dadaff675dbcc0",
            symbol: "HANU",
            name: "Hanu Yokia"
        },
        token1: {
            address: "0xec4a1c7a4e9fdc7cc621b548a931c92bc08a679a",
            symbol: "GOJ",
            name: "Goji"
        }
    },
    ACR_RND: {
        address: "0x7b52460a146b5cf723bae55011aa5e5d503cde6e",
        abi: "UniswapV2Pair",
        symbol: "ACR/RND",
        name: "ACR/RND",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x76306f029f8f99effe509534037ba7030999e3cf",
            symbol: "ACR",
            name: "Acreage"
        },
        token1: {
            address: "0xfb6819f57a9a147a89ff6c0cf461ff26d229eef7",
            symbol: "RND",
            name: "RND"
        }
    },
    PAXG_PAX: {
        address: "0x709f7b10f22eb62b05913b59b92ddd372d4e2152",
        abi: "UniswapV2Pair",
        symbol: "PAXG/PAX",
        name: "PAXG/PAX",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x45804880de22913dafe09f4980848ece6ecbaf78",
            symbol: "PAXG",
            name: "Paxos Gold"
        },
        token1: {
            address: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
            symbol: "PAX",
            name: "Paxos Standard"
        }
    },
    UETH_ROOT: {
        address: "0x603fb61742baed14c6b5922cef1ac0a2320c4cb6",
        abi: "UniswapV2Pair",
        symbol: "UETH/ROOT",
        name: "UETH/ROOT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x395c8db957d743a62ac3aaaa4574553bcf2380b3",
            symbol: "UETH",
            name: "ulock.eth Wrapped Ether"
        },
        token1: {
            address: "0xc5cff6f7697ed4921b5415edc2d4174f44afc4db",
            symbol: "ROOT",
            name: "Rootkit"
        }
    },
    SAND_REVV: {
        address: "0x5d95bb70e1d8b7fabc286bbc163642b3c39097a7",
        abi: "UniswapV2Pair",
        symbol: "SAND/REVV",
        name: "SAND/REVV",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x3845badade8e6dff049820680d1f14bd3903a5d0",
            symbol: "SAND",
            name: "SAND"
        },
        token1: {
            address: "0x557b933a7c2c45672b610f8954a3deb39a51a8ca",
            symbol: "REVV",
            name: "REVV"
        }
    },
    GRO_FEI: {
        address: "0x58664dbfcd772a6f442c1b4e6780446c51d73103",
        abi: "UniswapV2Pair",
        symbol: "GRO/FEI",
        name: "GRO/FEI",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x3ec8798b81485a254928b70cda1cf0a2bb0b74d7",
            symbol: "GRO",
            name: "Gro DAO Token"
        },
        token1: {
            address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
            symbol: "FEI",
            name: "Fei USD"
        }
    },
    HANU_MIA: {
        address: "0x48918f57fa7210ea7b20f23da8420e68df3578fe",
        abi: "UniswapV2Pair",
        symbol: "HANU/MIA",
        name: "HANU/MIA",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x72e5390edb7727e3d4e3436451dadaff675dbcc0",
            symbol: "HANU",
            name: "Hanu Yokia"
        },
        token1: {
            address: "0x8d52061af43c52204c717d0610ea8f52f955ce0b",
            symbol: "MIA",
            name: "Mia Neko"
        }
    },
    KETH_ROOT: {
        address: "0x44ee37ba8c98493f2590811c197ddd474c911d46",
        abi: "UniswapV2Pair",
        symbol: "KETH/ROOT",
        name: "KETH/ROOT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x93747501f46ae40b8a4b8f1a1529696ae24ea04e",
            symbol: "KETH",
            name: "RootKit ETH"
        },
        token1: {
            address: "0xcb5f72d37685c3d5ad0bb5f982443bc8fcdf570e",
            symbol: "ROOT",
            name: "RootKit"
        }
    },
    MT_ACR: {
        address: "0x3c92befe32cdf5564ff2f3092edacb9f9e40d508",
        abi: "UniswapV2Pair",
        symbol: "MT/ACR",
        name: "MT/ACR",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x1f6b579a672590ab6115de803ee4bc81ec4e79f1",
            symbol: "MT",
            name: "MT"
        },
        token1: {
            address: "0x76306f029f8f99effe509534037ba7030999e3cf",
            symbol: "ACR",
            name: "Acreage"
        }
    },
    UMA_FEI: {
        address: "0x0f024314588466416c8fc66013ba4d3ab2e4efe5",
        abi: "UniswapV2Pair",
        symbol: "UMA/FEI",
        name: "UMA/FEI",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x04fa0d235c4abf4bcf4787af4cf447de572ef828",
            symbol: "UMA",
            name: "UMA Voting Token v1"
        },
        token1: {
            address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
            symbol: "FEI",
            name: "Fei USD"
        }
    },
    RK_ROOT: {
        address: "0x0617d5ffb29c03ac35f1863b8a50ce1b52d446f6",
        abi: "UniswapV2Pair",
        symbol: "RK/ROOT",
        name: "RK/ROOT",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x1df2099f6abbf0b05c12a61835137d84f10daa96",
            symbol: "RK:ETH",
            name: "RootKit [Wrapped ETH]"
        },
        token1: {
            address: "0xcb5f72d37685c3d5ad0bb5f982443bc8fcdf570e",
            symbol: "ROOT",
            name: "RootKit"
        }
    },
    ULS_UETH: {
        address: "0x0179d00549b44d3161b9c260815f8a5947a541b3",
        abi: "UniswapV2Pair",
        symbol: "ULS/UETH",
        name: "ULS/UETH",
        enabled: "true",
        platform: "uniswap_v2",
        token0: {
            address: "0x1cd7605aa2caac4403ff421411c097798ddb03ae",
            symbol: "ULS",
            name: "uLockS"
        },
        token1: {
            address: "0x395c8db957d743a62ac3aaaa4574553bcf2380b3",
            symbol: "UETH",
            name: "ulock.eth Wrapped Ether"
        }
    }

}

export default uniswap_v2_tokens
