import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { GroupType, AppAction, AppTag } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const ENZYME_FINANCE_DEFINITION = appDefinition({
  id: 'enzyme-finance',
  name: 'Enzyme Finance',
  description: 'Enzyme empowers you to build and scale vaults based on the investment strategies of your choice.',
  url: 'https://enzyme.finance/',
  tags: [AppTag.ASSET_MANAGEMENT],

  links: {
    github: 'https://github.com/enzymefinance',
    twitter: 'https://twitter.com/enzymefinance',
    discord: 'https://discord.enzyme.finance/',
    telegram: 'https://telegram.enzyme.finance/',
    medium: 'https://medium.com/enzymefinance',
  },

  groups: {
    vault: {
      id: 'vault',
      type: GroupType.TOKEN,
      label: 'Vaults',
    },
  },

  supportedNetworks: {
    [Network.ETHEREUM_MAINNET]: [AppAction.VIEW],
  },
  primaryColor: '#8167e0',
});

@Register.AppDefinition(ENZYME_FINANCE_DEFINITION.id)
export class EnzymeFinanceAppDefinition extends AppDefinition {
  constructor() {
    super(ENZYME_FINANCE_DEFINITION);
  }
}
