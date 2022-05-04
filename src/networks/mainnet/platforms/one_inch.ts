import regular_tokens from "../tokens/regular";

const one_inch = {
    one_inch: {
        settings: {
            supported_from_tokens: {
                ...regular_tokens.UNI,
                ...regular_tokens.USDT,
                ...regular_tokens.WETH,
                ...regular_tokens.USDC,
                ...regular_tokens.DAI,
                ...regular_tokens.COMP,
                ...regular_tokens.LINK,
                ...regular_tokens.AAVE,
                ...regular_tokens.UST,
                ...regular_tokens.CRV,
                ...regular_tokens.WBTC,
                ...regular_tokens.NFTX
            },
            supported_protocols: '' +
                'SUSHI,' +
                'AAVE_V2,' +
                'UNISWAP_V2,' +
                'DEFISWAP,' +
                'UNISWAP_V3,' +
                'DEFI_PLAZA,' +
                'UNISWAP_V1,' +
                'CURVE,' +
                'LUASWAP,' +
                'MINISWAP,' +
                'SWERVE,' +
                'DXSWAP,' +
                'ST_ETH,' +
                'BANCOR,' +
                'KYBER_DMM,' +
                'ONE_INCH_LP_1_1,' +
                'LINKSWAP,' +
                'SHIBASWAP,' +
                'BALANCER,' +
                'DODO,' +
                'DODO_V2,' +
                'BALANCER_V2,' +
                'SMOOTHY_FINANCE,' +
                'CURVE_V2,' +
                'SADDLE,' +
                'CURVE_V2_ETH_CVX,' +
                'CURVE_V2_ETH_CRV,' +
                'MOONISWAP,' +
                'CURVE_V2_SPELL_2_ASSET'
        },
        contracts: {
            OffchainOracle: {
                address: '0x07D91f5fb9Bf7798734C3f606dB065549F6893bb',
                abi: "OffchainOracle"
            }
        }
    }
};

export default one_inch
