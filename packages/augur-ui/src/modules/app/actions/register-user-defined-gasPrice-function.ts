import { augurSdk } from 'services/augursdk';
import { createBigNumber } from 'utils/create-big-number';
import { GWEI_CONVERSION } from 'modules/common/constants';
import { AppStatus } from '../store/app-status';

export const registerUserDefinedGasPriceFunction = async (
  userDefinedGasPrice: number,
  average: number
) => {
  const Augur = augurSdk.get();
  const gasPrice = createBigNumber(GWEI_CONVERSION).multipliedBy(
    userDefinedGasPrice || 1
  );
  Augur.dependencies.setGasPrice(gasPrice);
  AppStatus.actions.updateGasPriceInfo({
    userDefinedGasPrice: userDefinedGasPrice ? userDefinedGasPrice : average,
  });
};
