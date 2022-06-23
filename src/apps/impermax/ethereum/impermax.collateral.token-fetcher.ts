import { Inject } from '@nestjs/common';

import { Register } from '~app-toolkit/decorators';
import { UNISWAP_V2_DEFINITION } from '~apps/uniswap-v2/uniswap-v2.definition';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { ImpermaxCollateralTokenHelper } from '../helpers/impermax.collateral.token-fetcher-helper';
import { IMPERMAX_DEFINITION } from '../impermax.definition';

const appId = IMPERMAX_DEFINITION.id;
const groupId = IMPERMAX_DEFINITION.groups.collateral.id;
const network = Network.ETHEREUM_MAINNET;

const address = '0x8c3736e2fe63cc2cd89ee228d9dbcab6ce5b767b';

@Register.TokenPositionFetcher({ appId, groupId, network, options: { includeInTvl: true } })
export class EthereumImpermaxCollateralTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(ImpermaxCollateralTokenHelper)
    private readonly impermaxCollateralTokenHelper: ImpermaxCollateralTokenHelper,
  ) {}

  async getPositions() {
    return this.impermaxCollateralTokenHelper.getPositions({
      address,
      network,
      dependencies: [
        {
          appId: UNISWAP_V2_DEFINITION.id,
          groupIds: [UNISWAP_V2_DEFINITION.groups.pool.id],
          network,
        },
      ],
    });
  }
}
