import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { CompoundSupplyTokenFetcher, GetMarketsParams } from '~apps/compound/common/compound.supply.token-fetcher';
import {
  GetDataPropsParams,
  GetPricePerShareParams,
  GetUnderlyingTokensParams,
} from '~position/template/app-token.template.types';

import { AurigamiAuToken, AurigamiComptroller, AurigamiContractFactory } from '../contracts';

@PositionTemplate()
export class AuroraAurigamiSupplyTokenFetcher extends CompoundSupplyTokenFetcher<AurigamiAuToken, AurigamiComptroller> {
  groupLabel = 'Lending';
  comptrollerAddress = '0x817af6cfaf35bdc1a634d6cc94ee9e4c68369aeb';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(AurigamiContractFactory) protected readonly contractFactory: AurigamiContractFactory,
  ) {
    super(appToolkit);
  }

  getCompoundCTokenContract(address: string) {
    return this.contractFactory.aurigamiAuToken({ address, network: this.network });
  }

  getCompoundComptrollerContract(address: string) {
    return this.contractFactory.aurigamiComptroller({ address, network: this.network });
  }

  async getMarkets({ contract }: GetMarketsParams<AurigamiComptroller>) {
    return contract.getAllMarkets();
  }

  async getUnderlyingAddress({ contract }: GetUnderlyingTokensParams<AurigamiAuToken>) {
    return contract.underlying();
  }

  async getExchangeRate({ contract }: GetPricePerShareParams<AurigamiAuToken>) {
    return contract.callStatic.exchangeRateCurrent();
  }

  async getExchangeRateMantissa({ appToken }: GetPricePerShareParams<AurigamiAuToken>) {
    const [underlyingToken] = appToken.tokens;
    return 18 + underlyingToken.decimals - appToken.decimals;
  }

  async getSupplyRate({ contract }: GetDataPropsParams<AurigamiAuToken>) {
    return contract.supplyRatePerTimestamp().catch(() => 0);
  }
}
