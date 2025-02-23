/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace IvToken {
  export type AssetDataStruct = {
    maxShares: PromiseOrValue<BigNumberish>;
    amountInAsset: PromiseOrValue<BigNumberish>;
  };

  export type AssetDataStructOutput = [BigNumber, BigNumber] & {
    maxShares: BigNumber;
    amountInAsset: BigNumber;
  };
}

export interface VTokenInterface extends utils.Interface {
  functions: {
    'asset()': FunctionFragment;
    'assetBalanceForShares(uint256)': FunctionFragment;
    'assetBalanceOf(address)': FunctionFragment;
    'assetDataOf(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'burn(address)': FunctionFragment;
    'burnFor(address)': FunctionFragment;
    'currentDepositedPercentageInBP()': FunctionFragment;
    'deposit()': FunctionFragment;
    'deposited()': FunctionFragment;
    'initialize(address,address)': FunctionFragment;
    'lastAssetBalance()': FunctionFragment;
    'lastAssetBalanceOf(address)': FunctionFragment;
    'mint()': FunctionFragment;
    'mintFor(address)': FunctionFragment;
    'mintableShares(uint256)': FunctionFragment;
    'registry()': FunctionFragment;
    'setController(address)': FunctionFragment;
    'shareChange(address,uint256)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'sync()': FunctionFragment;
    'totalAssetSupply()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferAsset(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'vaultController()': FunctionFragment;
    'virtualTotalAssetSupply()': FunctionFragment;
    'withdraw()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'asset'
      | 'assetBalanceForShares'
      | 'assetBalanceOf'
      | 'assetDataOf'
      | 'balanceOf'
      | 'burn'
      | 'burnFor'
      | 'currentDepositedPercentageInBP'
      | 'deposit'
      | 'deposited'
      | 'initialize'
      | 'lastAssetBalance'
      | 'lastAssetBalanceOf'
      | 'mint'
      | 'mintFor'
      | 'mintableShares'
      | 'registry'
      | 'setController'
      | 'shareChange'
      | 'supportsInterface'
      | 'sync'
      | 'totalAssetSupply'
      | 'totalSupply'
      | 'transfer'
      | 'transferAsset'
      | 'transferFrom'
      | 'vaultController'
      | 'virtualTotalAssetSupply'
      | 'withdraw',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'asset', values?: undefined): string;
  encodeFunctionData(functionFragment: 'assetBalanceForShares', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'assetBalanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'assetDataOf',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'burn', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'burnFor', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'currentDepositedPercentageInBP', values?: undefined): string;
  encodeFunctionData(functionFragment: 'deposit', values?: undefined): string;
  encodeFunctionData(functionFragment: 'deposited', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialize', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'lastAssetBalance', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastAssetBalanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'mint', values?: undefined): string;
  encodeFunctionData(functionFragment: 'mintFor', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'mintableShares', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'registry', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setController', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'shareChange',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'supportsInterface', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'sync', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalAssetSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferAsset',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'vaultController', values?: undefined): string;
  encodeFunctionData(functionFragment: 'virtualTotalAssetSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdraw', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'asset', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetBalanceForShares', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetBalanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'assetDataOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnFor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currentDepositedPercentageInBP', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposited', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastAssetBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastAssetBalanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mintFor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mintableShares', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'registry', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setController', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'shareChange', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sync', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalAssetSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferAsset', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vaultController', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'virtualTotalAssetSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  events: {
    'SetVaultController(address)': EventFragment;
    'UpdateDeposit(address,uint256)': EventFragment;
    'VTokenTransfer(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'SetVaultController'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UpdateDeposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'VTokenTransfer'): EventFragment;
}

export interface SetVaultControllerEventObject {
  vaultController: string;
}
export type SetVaultControllerEvent = TypedEvent<[string], SetVaultControllerEventObject>;

export type SetVaultControllerEventFilter = TypedEventFilter<SetVaultControllerEvent>;

export interface UpdateDepositEventObject {
  account: string;
  depositedAmount: BigNumber;
}
export type UpdateDepositEvent = TypedEvent<[string, BigNumber], UpdateDepositEventObject>;

export type UpdateDepositEventFilter = TypedEventFilter<UpdateDepositEvent>;

export interface VTokenTransferEventObject {
  from: string;
  to: string;
  amount: BigNumber;
}
export type VTokenTransferEvent = TypedEvent<[string, string, BigNumber], VTokenTransferEventObject>;

export type VTokenTransferEventFilter = TypedEventFilter<VTokenTransferEvent>;

export interface VToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VTokenInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    asset(overrides?: CallOverrides): Promise<[string]>;

    assetBalanceForShares(_shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;

    assetBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    assetDataOf(
      _account: PromiseOrValue<string>,
      _shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[IvToken.AssetDataStructOutput]>;

    balanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    burnFor(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    currentDepositedPercentageInBP(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    deposited(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _asset: PromiseOrValue<string>,
      _registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    lastAssetBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastAssetBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    mintFor(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    mintableShares(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    setController(
      _vaultController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    shareChange(
      _account: PromiseOrValue<string>,
      _amountInAsset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { newShares: BigNumber; oldShares: BigNumber }>;

    supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;

    sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    totalAssetSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferAsset(
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _shares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    vaultController(overrides?: CallOverrides): Promise<[string]>;

    virtualTotalAssetSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;
  };

  asset(overrides?: CallOverrides): Promise<string>;

  assetBalanceForShares(_shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  assetBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  assetDataOf(
    _account: PromiseOrValue<string>,
    _shares: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<IvToken.AssetDataStructOutput>;

  balanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  burnFor(
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  currentDepositedPercentageInBP(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  deposited(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _asset: PromiseOrValue<string>,
    _registry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  lastAssetBalance(overrides?: CallOverrides): Promise<BigNumber>;

  lastAssetBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  mint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  mintFor(
    _recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  mintableShares(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  registry(overrides?: CallOverrides): Promise<string>;

  setController(
    _vaultController: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  shareChange(
    _account: PromiseOrValue<string>,
    _amountInAsset: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { newShares: BigNumber; oldShares: BigNumber }>;

  supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;

  sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  totalAssetSupply(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    _recipient: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferAsset(
    _recipient: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _shares: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  vaultController(overrides?: CallOverrides): Promise<string>;

  virtualTotalAssetSupply(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  callStatic: {
    asset(overrides?: CallOverrides): Promise<string>;

    assetBalanceForShares(_shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    assetBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    assetDataOf(
      _account: PromiseOrValue<string>,
      _shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<IvToken.AssetDataStructOutput>;

    balanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burn(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burnFor(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    currentDepositedPercentageInBP(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(overrides?: CallOverrides): Promise<void>;

    deposited(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _asset: PromiseOrValue<string>,
      _registry: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    lastAssetBalance(overrides?: CallOverrides): Promise<BigNumber>;

    lastAssetBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    mint(overrides?: CallOverrides): Promise<BigNumber>;

    mintFor(_recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    mintableShares(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<string>;

    setController(_vaultController: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    shareChange(
      _account: PromiseOrValue<string>,
      _amountInAsset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { newShares: BigNumber; oldShares: BigNumber }>;

    supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;

    sync(overrides?: CallOverrides): Promise<void>;

    totalAssetSupply(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    transferAsset(
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    transferFrom(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    vaultController(overrides?: CallOverrides): Promise<string>;

    virtualTotalAssetSupply(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'SetVaultController(address)'(vaultController?: null): SetVaultControllerEventFilter;
    SetVaultController(vaultController?: null): SetVaultControllerEventFilter;

    'UpdateDeposit(address,uint256)'(
      account?: PromiseOrValue<string> | null,
      depositedAmount?: null,
    ): UpdateDepositEventFilter;
    UpdateDeposit(account?: PromiseOrValue<string> | null, depositedAmount?: null): UpdateDepositEventFilter;

    'VTokenTransfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
    ): VTokenTransferEventFilter;
    VTokenTransfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
    ): VTokenTransferEventFilter;
  };

  estimateGas: {
    asset(overrides?: CallOverrides): Promise<BigNumber>;

    assetBalanceForShares(_shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    assetBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    assetDataOf(
      _account: PromiseOrValue<string>,
      _shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    balanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    burnFor(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    currentDepositedPercentageInBP(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    deposited(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _asset: PromiseOrValue<string>,
      _registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    lastAssetBalance(overrides?: CallOverrides): Promise<BigNumber>;

    lastAssetBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    mint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    mintFor(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    mintableShares(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    setController(
      _vaultController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    shareChange(
      _account: PromiseOrValue<string>,
      _amountInAsset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    totalAssetSupply(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferAsset(
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferFrom(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _shares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    vaultController(overrides?: CallOverrides): Promise<BigNumber>;

    virtualTotalAssetSupply(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetBalanceForShares(
      _shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    assetBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetDataOf(
      _account: PromiseOrValue<string>,
      _shares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    balanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    burnFor(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    currentDepositedPercentageInBP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    deposited(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _asset: PromiseOrValue<string>,
      _registry: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    lastAssetBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastAssetBalanceOf(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    mintFor(
      _recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    mintableShares(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setController(
      _vaultController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    shareChange(
      _account: PromiseOrValue<string>,
      _amountInAsset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    sync(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    totalAssetSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferAsset(
      _recipient: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _shares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    vaultController(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    virtualTotalAssetSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;
  };
}
