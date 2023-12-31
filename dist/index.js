"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterType = exports.FilterCondition = exports.ActionFieldType = exports.InputType = exports.ActionType = exports.ActionKind = void 0;
var ActionKind;
(function (ActionKind) {
    ActionKind["ONCHAIN"] = "ONCHAIN";
    ActionKind["OFFCHAIN"] = "OFFCHAIN";
    ActionKind["NOTIFICATION"] = "NOTIFICATION";
})(ActionKind || (exports.ActionKind = ActionKind = {}));
var ActionType;
(function (ActionType) {
    ActionType["SEND_NATIVE_ASSET"] = "SEND_NATIVE_ASSET";
    ActionType["SEND_ERC20"] = "SEND_ERC20";
    ActionType["CALL"] = "CALL";
    ActionType["SWAP_ONEINCH"] = "SWAP_ONEINCH";
    ActionType["SWAP_LIFI"] = "SWAP_LIFI";
    ActionType["SWAP_UNISWAP"] = "SWAP_UNISWAP";
    ActionType["DEPOSIT_AAVE"] = "DEPOSIT_AAVE";
    ActionType["WITHDRAW_AAVE"] = "WITHDRAW_AAVE";
    ActionType["BORROW_AAVE"] = "BORROW_AAVE";
    ActionType["CUSTOM"] = "CUSTOM";
})(ActionType || (exports.ActionType = ActionType = {}));
var InputType;
(function (InputType) {
    InputType["ADDRESS"] = "ADDRESS";
    InputType["ERC_20_COIN_ADDRESS"] = "ERC_20_COIN_ADDRESS";
    InputType["NUMBER"] = "NUMBER";
    InputType["STRING"] = "STRING";
    InputType["DATETIME"] = "DATETIME";
})(InputType || (exports.InputType = InputType = {}));
var ActionFieldType;
(function (ActionFieldType) {
    ActionFieldType["FROM_ADDRESS"] = "fromAddress";
    ActionFieldType["TO_ADDRESS"] = "toAddress";
    ActionFieldType["TOKEN_ADDRESS"] = "tokenAddress";
    ActionFieldType["FROM_TOKEN_ADDRESS"] = "fromTokenAddress";
    ActionFieldType["TO_TOKEN_ADDRESS"] = "toTokenAddress";
    ActionFieldType["VALUE"] = "value";
})(ActionFieldType || (exports.ActionFieldType = ActionFieldType = {}));
var FilterCondition;
(function (FilterCondition) {
    FilterCondition["GREATER"] = "GREATER";
    FilterCondition["LESS"] = "LESS";
    FilterCondition["EQUAL"] = "EQUAL";
    FilterCondition["GREATEROREQUAL"] = "GREATEROREQUAL";
    FilterCondition["LESSOREQUAL"] = "LESSOREQUAL";
})(FilterCondition || (exports.FilterCondition = FilterCondition = {}));
var FilterType;
(function (FilterType) {
    FilterType["GASPRICE"] = "GASPRICE";
    FilterType["BLOCKNUMBER"] = "BLOCKNUMBER";
    FilterType["TIMESTAMP"] = "TIMESTAMP";
    FilterType["ALLOWANCE"] = "ALLOWANCE";
    FilterType["CUSTOM"] = "CUSTOM";
})(FilterType || (exports.FilterType = FilterType = {}));
