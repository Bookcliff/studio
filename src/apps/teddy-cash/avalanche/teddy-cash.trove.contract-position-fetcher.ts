import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { ZERO_ADDRESS } from '~app-toolkit/constants/address';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { getLabelFromToken } from '~app-toolkit/helpers/presentation/image.present';
import { MetaType } from '~position/position.interface';
import { ContractPositionTemplatePositionFetcher } from '~position/template/contract-position.template.position-fetcher';
import {
  DefaultContractPositionDefinition,
  GetDisplayPropsParams,
  GetTokenBalancesParams,
} from '~position/template/contract-position.template.types';

import { TeddyCashContractFactory, TeddyCashTroveManager } from '../contracts';

@PositionTemplate()
export class AvalancheTeddyCashTroveContractPositionFetcher extends ContractPositionTemplatePositionFetcher<TeddyCashTroveManager> {
  groupLabel = 'Farms';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(TeddyCashContractFactory) protected readonly contractFactory: TeddyCashContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string): TeddyCashTroveManager {
    return this.contractFactory.teddyCashTroveManager({ address, network: this.network });
  }

  async getDefinitions(): Promise<DefaultContractPositionDefinition[]> {
    return [{ address: '0xd22b04395705144fd12affd854248427a2776194' }];
  }

  async getTokenDefinitions() {
    return [
      {
        metaType: MetaType.SUPPLIED,
        address: ZERO_ADDRESS, // AVAX
        network: this.network,
      },
      {
        metaType: MetaType.BORROWED,
        address: '0x4fbf0429599460d327bd5f55625e30e4fc066095', // TSD
        network: this.network,
      },
    ];
  }

  async getLabel({ contractPosition }: GetDisplayPropsParams<TeddyCashTroveManager>): Promise<string> {
    return `${getLabelFromToken(contractPosition.tokens[0])} Trove`;
  }

  getTokenBalancesPerPosition({ address, contract }: GetTokenBalancesParams<TeddyCashTroveManager>) {
    return Promise.all([contract.getTroveColl(address), contract.getTroveDebt(address)]);
  }
}
