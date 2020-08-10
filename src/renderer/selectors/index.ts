import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '@renderer/types/store';
import {formatAddressFromNode} from '@renderer/utils/address';

export const getActiveBank = (state: RootState) => state.app.activeBank;
export const getActivePrimaryValidator = (state: RootState) => state.app.activePrimaryValidator;

export const getBankAccounts = (state: RootState) => state.banks.accounts;
export const getBankBanks = (state: RootState) => state.banks.banks;
export const getBankBankTransactions = (state: RootState) => state.banks.bankTransactions;
export const getBankBlocks = (state: RootState) => state.banks.blocks;
export const getBankConfigs = (state: RootState) => state.banks.configs;
export const getBankConfirmationBlocks = (state: RootState) => state.banks.confirmationBlocks;
export const getBankInvalidBlocks = (state: RootState) => state.banks.invalidBlocks;
export const getBankValidatorConfirmationServices = (state: RootState) => state.banks.validatorConfirmationServices;

export const getValidatorAccounts = (state: RootState) => state.validators.accounts;
export const getValidatorBanks = (state: RootState) => state.validators.banks;
export const getValidatorBankTransactions = (state: RootState) => state.validators.bankTransactions;
export const getValidatorBlocks = (state: RootState) => state.validators.blocks;
export const getValidatorConfigs = (state: RootState) => state.validators.configs;
export const getValidatorConfirmationBlocks = (state: RootState) => state.validators.confirmationBlocks;
export const getValidatorInvalidBlocks = (state: RootState) => state.validators.invalidBlocks;
export const getValidatorValidatorConfirmationServices = (state: RootState) =>
  state.validators.validatorConfirmationServices;

export const getActiveBankConfig = createSelector([getActiveBank, getBankConfigs], (activeBank, bankConfigs) => {
  if (!activeBank) return null;
  const address = formatAddressFromNode(activeBank);
  return bankConfigs[address]?.data || null;
});

export const getActivePrimaryValidatorConfig = createSelector(
  [getActivePrimaryValidator, getValidatorConfigs],
  (activePrimaryValidator, validatorConfigs) => {
    if (!activePrimaryValidator) return null;
    const address = formatAddressFromNode(activePrimaryValidator);
    return validatorConfigs[address]?.data || null;
  },
);
