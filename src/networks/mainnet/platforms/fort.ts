const fort = {
    fort: {
        contracts: {
            core: {
                address: '0x',
                abi: "Core"
            },
            actions: {
                aave: {
                    aave_add_collateral: {
                        address: '0x',
                        abi: "AaveAddCollateral"
                    },
                    aave_repay: {
                        address: '0x',
                        abi: "AaveRepay"
                    },
                    aave_withdraw: {
                        address: '0x',
                        abi: "AaveWithdraw"
                    }
                },
                compound: {
                    compound_add_collateral: {
                        address: '0x',
                        abi: "CompoundAddCollateral"
                    },
                    compound_remove_liquidity: {
                        address: '0x',
                        abi: "CompoundRemoveLiquidity"
                    },
                    compound_repay: {
                        address: '0x',
                        abi: "CompoundRepay"
                    },
                    compound_withdraw: {
                        address: '0x',
                        abi: "CompoundWithdraw"
                    }
                },
                swap: {
                    one_inch_swap: {
                        address: '0x',
                        abi: "OneInchSwap"
                    }
                },
                uniswap: {
                    v2: {
                        uni_supply: {
                            address: '0x',
                            abi: "UniSupply"
                        },
                        uni_withdraw: {
                            address: '0x',
                            abi: "UniWithdraw"
                        }
                    },
                    v3: {
                        uni_supply_v3: {
                            address: '0x',
                            abi: "UniSupplyV3"
                        },
                        uni_withdraw_v3: {
                            address: '0x',
                            abi: "UniWithdrawV3"
                        },
                    }
                }
            },
            conditions: {
                compound_collateral: {
                    address: '0x',
                    abi: "CompoundCollateral"
                },
                fortification_run_count_check: {
                    address: '0x',
                    abi: "FortificationRunCountCheck"
                },
                fortification_status_check: {
                    address: '0x',
                    abi: "FortificationStatusCheck"
                },
                gas_price_check: {
                    address: '0x',
                    abi: "GasPriceCheck"
                },
                one_inch_price_checker: {
                    address: '0x',
                    abi: "OneInchPriceChecker"
                },
                token_balance_check: {
                    address: '0x',
                    abi: "TokenBalanceCheck"
                }
            },
        }
    }
};

export default fort
