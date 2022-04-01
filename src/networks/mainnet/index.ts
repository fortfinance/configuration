import compound_tokens from "./tokens/compound";
import yearn_tokens from "./tokens/yearn";
import regular_tokens from "./tokens/regular";
import uniswap_v2_tokens from "./tokens/uniswap_v2";
import one_inch from "./platforms/one_inch";
import fort from "./platforms/fort";
import compound from "./platforms/compound";
import aave_tokens from "./tokens/aave";

const mainnet = {
    platforms: {
        ...fort,
        ...compound,
        ...one_inch
    },
    tokens: {
        ...regular_tokens,
        ...compound_tokens,
        ...uniswap_v2_tokens,
        ...yearn_tokens,
        ...aave_tokens
    },
}

export default mainnet
