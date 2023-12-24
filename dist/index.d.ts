export interface Task {
    filters: Filter[][];
    action: Action;
    sender?: string;
}
export declare enum ActionKind {
    ONCHAIN = "ONCHAIN",
    OFFCHAIN = "OFFCHAIN",
    NOTIFICATION = "NOTIFICATION"
}
export interface Action {
    type: ActionType;
    kind?: ActionKind;
    toAddress?: string;
    fromAddress?: string;
    tokenAddress?: string;
    fromTokenAddress?: string;
    toTokenAddress?: string;
    value?: string;
    data?: string;
}
export declare enum ActionType {
    SEND_NATIVE_ASSET = "SEND_NATIVE_ASSET",
    SEND_ERC20 = "SEND_ERC20",
    CALL = "CALL",
    SWAP_ONEINCH = "SWAP_ONEINCH",
    SWAP_LIFI = "SWAP_LIFI",
    SWAP_UNISWAP = "SWAP_UNISWAP",
    DEPOSIT_AAVE = "DEPOSIT_AAVE",
    WITHDRAW_AAVE = "WITHDRAW_AAVE",
    BORROW_AAVE = "BORROW_AAVE"
}
export declare enum ActionInputType {
    ADDRESS = "ADDRESS",
    ERC_20_COIN_ADDRESS = "ERC_20_COIN_ADDRESS",
    NUMBER = "NUMBER",
    STRING = "STRING"
}
export declare enum ActionFieldType {
    FROM_ADDRESS = "fromAddress",
    TO_ADDRESS = "toAddress",
    TOKEN_ADDRESS = "tokenAddress",
    FROM_TOKEN_ADDRESS = "fromTokenAddress",
    TO_TOKEN_ADDRESS = "toTokenAddress",
    VALUE = "value"
}
export interface IActionInput {
    target: ActionFieldType;
    type: ActionInputType;
    placeholder: string;
    description?: string;
    initialValue?: string;
    name?: string;
    required?: boolean;
    decimalsFrom?: ActionFieldType;
    defaultValue?: string;
}
export interface IActionSecret {
    name: string;
    placeholder?: string;
    description?: string;
}
export interface Filter {
    type?: FilterType;
    value?: string;
    condition?: FilterCondition;
    toAddress?: string;
    fromAddress?: string;
    tokenAddress?: string;
}
export declare enum FilterCondition {
    GREATER = "GREATER",
    LESS = "LESS",
    EQUAL = "EQUAL",
    GREATEROREQUAL = "GREATEROREQUAL",
    LESSOREQUAL = "LESSOREQUAL"
}
export declare enum FilterType {
    GASPRICE = "GASPRICE",
    BLOCKNUMBER = "BLOCKNUMBER",
    TIMESTAMP = "TIMESTAMP",
    ALLOWANCE = "ALLOWANCE"
}
