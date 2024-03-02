export interface Task {
    filters: Filter[][]
    action: Action
    sender?: string
}
export enum ActionKind {
    ONCHAIN = 'ONCHAIN',
    OFFCHAIN = 'OFFCHAIN',
    NOTIFICATION = 'NOTIFICATION',
}
export interface Action {
    id?: string
    type?: ActionType
    kind?: ActionKind
    toAddress?: string
    fromAddress?: string
    tokenAddress?: string // token address
    fromTokenAddress?: string
    toTokenAddress?: string
    value?: string
    data?: any
}
export enum ActionType {
    SEND_NATIVE_ASSET = 'SEND_NATIVE_ASSET',
    SEND_ERC20 = 'SEND_ERC20',
    CALL = 'CALL',
    SWAP_ONEINCH = 'SWAP_ONEINCH',
    SWAP_LIFI = 'SWAP_LIFI',
    SWAP_UNISWAP = 'SWAP_UNISWAP',
    DEPOSIT_AAVE = 'DEPOSIT_AAVE',
    WITHDRAW_AAVE = 'WITHDRAW_AAVE',
    BORROW_AAVE = 'BORROW_AAVE',
    CUSTOM = 'CUSTOM'
}
export enum InputType {
    ADDRESS = 'ADDRESS',
    ERC_20_COIN_ADDRESS = 'ERC_20_COIN_ADDRESS',
    NUMBER = 'NUMBER',
    STRING = 'STRING',
    DATETIME = 'DATETIME',
    CHAIN = "CHAIN",
    SELECT = "SELECT",
    SPELL = "SPELL"
}
export enum ActionFieldType {
    FROM_ADDRESS = 'fromAddress',
    TO_ADDRESS = 'toAddress',
    TOKEN_ADDRESS = 'tokenAddress',
    FROM_TOKEN_ADDRESS = 'fromTokenAddress',
    TO_TOKEN_ADDRESS = 'toTokenAddress',
    VALUE = 'value',
}

export interface IActionInput {
    target: ActionFieldType
    type: InputType
    placeholder: string
    description?: string
    initialValue?: string
    name?: string
    required?: boolean
    decimalsFrom?: ActionFieldType
    defaultValue?: string
}

export interface Filter {
    id?: string
    type?: FilterType
    value?: string
    condition?: FilterCondition
    toAddress?: string
    fromAddress?: string
    tokenAddress?: string
    data?: object
}


export enum FilterCondition {
    GREATER = 'GREATER',
    LESS = 'LESS',
    EQUAL = 'EQUAL',
    GREATEROREQUAL = "GREATEROREQUAL",
    LESSOREQUAL = "LESSOREQUAL",
}
export enum FilterType {
    GASPRICE = 'GASPRICE',
    BLOCKNUMBER = 'BLOCKNUMBER',
    TIMESTAMP = 'TIMESTAMP',
    ALLOWANCE = "ALLOWANCE",
    CUSTOM = "CUSTOM",
    NEWSAPI = "NEWSAPI",
    SPELL_SUCCESSFUL = "SPELL_SUCCESSFUL",
    SPELL_FAILED = "SPELL_FAILED",
    SPELL_COMPLETED = "SPELL_COMPLETED"
}
export enum ENVIRONMENT{
    BROWSER = "BROWSER",
    SERVER = "SERVER",
    IOS = "IOS",
    ANDROID = "ANDROID"
}