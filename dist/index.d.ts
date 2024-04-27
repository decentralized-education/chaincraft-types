import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
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
    id?: string;
    type?: ActionType;
    kind?: ActionKind;
    toAddress?: string;
    fromAddress?: string;
    tokenAddress?: string;
    fromTokenAddress?: string;
    toTokenAddress?: string;
    value?: string;
    data?: any;
    slippage?: string;
    maxGas?: string;
    steps?: Step[];
}
export declare enum EXECUTOR {
    USER = "user",
    AUTO = "auto"
}
export type Step = {
    order: number;
    id: string;
    status: ExecutionStatus;
    executor: EXECUTOR;
};
export declare enum ExecutionStatus {
    PENDING = "pending",
    SUCCESS = "success",
    FAILED = "failed",
    CANCELLED = "cancelled",
    PROCESSING = "processing",
    WAITING = "waiting"
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
    BORROW_AAVE = "BORROW_AAVE",
    CUSTOM = "CUSTOM"
}
export declare enum InputType {
    ADDRESS = "ADDRESS",
    ERC_20_COIN_ADDRESS = "ERC_20_COIN_ADDRESS",
    NUMBER = "NUMBER",
    STRING = "STRING",
    DATETIME = "DATETIME",
    CHAIN = "CHAIN",
    SELECT = "SELECT",
    SPELL = "SPELL"
}
export declare enum ActionFieldType {
    FROM_ADDRESS = "fromAddress",
    TO_ADDRESS = "toAddress",
    TOKEN_ADDRESS = "tokenAddress",
    FROM_TOKEN_ADDRESS = "fromTokenAddress",
    TO_TOKEN_ADDRESS = "toTokenAddress",
    VALUE = "value",
    SLIPPAGE = "slippage",
    MAXGAS = "maxGas"
}
export interface IActionInput {
    target: ActionFieldType;
    type: InputType;
    placeholder: string;
    description?: string;
    initialValue?: string;
    name?: string;
    required?: boolean;
    decimalsFrom?: ActionFieldType;
    defaultValue?: string;
}
export interface Filter {
    id?: string;
    type?: FilterType;
    value?: string;
    condition?: FilterCondition;
    toAddress?: string;
    fromAddress?: string;
    tokenAddress?: string;
    data?: object;
}
export declare enum InteractionType {
    ESTIMATE = "ESTIMATE"
}
export interface EstimateInteraction {
    type: InteractionType;
    fromChain?: string;
    toChain?: string;
    fromAmount?: string;
    toAmount?: string;
    fromToken?: string;
    toToken?: string;
    approvalNeeded?: boolean;
    gasFee?: string;
    tx?: any;
    message?: string;
}
export type ActionUserInteraction = EstimateInteraction;
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
    ALLOWANCE = "ALLOWANCE",
    CUSTOM = "CUSTOM",
    NEWSAPI = "NEWSAPI",
    SPELL_SUCCESSFUL = "SPELL_SUCCESSFUL",
    SPELL_FAILED = "SPELL_FAILED",
    SPELL_COMPLETED = "SPELL_COMPLETED"
}
export declare enum ENVIRONMENT {
    BROWSER = "BROWSER",
    SERVER = "SERVER",
    IOS = "IOS",
    ANDROID = "ANDROID"
}
export declare enum ChainType {
    ETHEREUM = "ethereum",
    SOLANA = "solana",
    TON = "ton"
}
export interface Web3FunctionContextData {
    gelatoArgs: {
        chainId: number;
        gasPrice: string;
        taskId?: string;
    };
    rpcProviderUrl?: string;
    userArgs: Web3FunctionUserArgs;
    secrets: {
        [key: string]: string | undefined;
    };
    storage: {
        [key: string]: string | undefined;
    };
}
export interface Web3FunctionContext {
    gelatoArgs: {
        chainId: number;
        gasPrice: BigNumber;
        taskId?: string;
    };
    multiChainProvider: Web3FunctionMultiChainProvider;
    userArgs: Web3FunctionUserArgs;
    secrets: {
        get(key: string): Promise<string | undefined>;
    };
    storage: {
        get(key: string): Promise<string | undefined>;
        set(key: string, value: string): Promise<void>;
        delete(key: string): Promise<void>;
    };
}
export declare class Web3FunctionMultiChainProvider {
    private _proxyRpcUrlBase;
    private _rateLimitCallback;
    private _providers;
    private _defaultProvider;
    constructor(proxyRpcUrlBase: string, defaultChainId: number, rateLimitCallBack: () => void);
    default(): StaticJsonRpcProvider;
    chainId(chainId: number): StaticJsonRpcProvider;
    private _getProviderOfChainId;
    private _subscribeProviderEvents;
}
export interface Web3FunctionLocalContext extends Web3FunctionContext {
    multiChainProvider: any;
    environment: string;
}
export interface Web3FunctionUserArgs {
    [key: string]: string | number | boolean | string[] | number[] | boolean[];
}
export interface Web3FunctionContextData {
    gelatoArgs: {
        chainId: number;
        gasPrice: string;
        taskId?: string;
    };
    rpcProviderUrl?: string;
    userArgs: Web3FunctionUserArgs;
    secrets: {
        [key: string]: string | undefined;
    };
    storage: {
        [key: string]: string | undefined;
    };
}
export declare type Web3FunctionResult = Web3FunctionResultV1 | Web3FunctionResultV2;
export declare type Web3FunctionResultV1 = {
    canExec: true;
    callData: string;
} | {
    canExec: false;
    message: string;
};
export declare type Web3FunctionResultV2 = {
    canExec: true;
    callData: Web3FunctionResultCallData[];
} | {
    canExec: false;
    message: string;
};
export declare type Web3FunctionResultCallData = {
    to: string;
    data: string;
    value?: string;
};
