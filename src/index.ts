import {FormatTypes, Interface} from 'ethers/lib/utils';
import fs from 'fs-extra'
import mainnet from "./networks/mainnet";

const SUPPORTED_NETWORKS: any = {'mainnet': mainnet}

function getAbi(name: string) {
    let abi = JSON.parse(fs.readFileSync(`${process.cwd()}/src/abi/${name}.json`, {
        encoding: 'utf-8'
    }));

    // Converting to Human-Readable ABI
    const iface = new Interface(abi);
    return iface.format(FormatTypes.full)
}

function populateAbiOnConfig(config: Record<string, any>) {
    if (typeof config === 'object') {
        for (const prop in config) {
            if (prop === 'abi') {
                if (!Array.isArray(config[prop])) config[prop] = getAbi(config[prop])
            } else {
                config[prop] = populateAbiOnConfig(config[prop]) || config[prop]
            }
        }
    }
    return config
}

async function generateConfig() {
    // Get the config based on the argument that was passed
    const network = process.argv[2] as string;
    if (!(network in SUPPORTED_NETWORKS)) throw Error(`Unsupported network "${network}`)
    let config = SUPPORTED_NETWORKS[network]

    // Read the old config to get the old version
    const oldConfig = await fs.readJSON(`${process.cwd()}/networks/${network}.json`)
    let oldVersion = oldConfig.VERSION
    if (oldVersion == undefined) oldVersion = 0

    // Populate the config with the abis
    config = populateAbiOnConfig(config)

    // Bump the version
    config.VERSION = oldVersion + 1

    // Timestamp
    config.GENERATED_AT = Date.now()

    await fs.outputJSON(`${process.cwd()}/networks/${network}.json`, config)
}

generateConfig().then(() => console.log('Done generating config'))
