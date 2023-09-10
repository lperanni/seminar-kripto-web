export interface NavigationOptions {
    title: string,
    description: string
    link: string
}

export interface BlockchainInfo {
    chain?: string,
    blocks: number,
    header?: number,
    bestblockhash?: string,
    difficulty?: number,
    mediantime?: number,
    verificationprogress?: number,
    initialblockdownload?: boolean,
    chainwork?: string,
    size_on_disk?: number,
    pruned?: boolean,
    softforks?: any
    warnings?: string
}

export interface BlockInfo {
    hash?: string,
    confirmations?: number,
    strippedsize?: number,
    size?: number,
    weight?: number,
    height?: number,
    version?: number,
    versionHex?: number,
    merkleroot?: string,
    tx?: string[],
    time?: number,
    mediantime?: number,
    nonce?: number,
    bits?: string,
    difficulty?: number,
    chainwork?: string,
    nTx?: number,
    previousblockhash?: string,
    nextblockhash?: string
}

export interface Vin {
    coinbase: string,
    sequence: number
}

export interface Vout {
    value: number,
    n: number,
    scriptPubKey: {
        asm: string,
        hex: string,
        type: string
    }
}

export interface TransactionInfo {
    txid?: string,
    hash: string,
    version: 1,
    size: 126,
    vsize: 126,
    weight: 504,
    locktime: 0,
    vin: Vin[],
    vout: Vout[],
    fee: number
}

export interface BitcoinClient {
    getInfo: () => Promise<BlockchainInfo>
    getBlockByHeight: (height: number) => Promise<BlockInfo>
    getBlockByHash: (hash: string) => Promise<BlockInfo>
    getTransactionById: (hash: string) => Promise<TransactionInfo>
}
