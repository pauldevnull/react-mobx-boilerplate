import CoinbaseService from 'app/service/coinbase.service';
import { Container } from 'typedi';
import { action, computed, observable } from 'mobx';
import { HomeProps } from 'app/containers/home/types';
import { AppContextProps } from 'app/context/app.context';
import { ExchangeRates } from 'app/model/exchange-rates.model';

export default class HomeViewModel {

  @observable context: AppContextProps;
  @observable props: HomeProps;
  @observable exchangeRates: ExchangeRates;

  constructor(
    private coinbaseService: CoinbaseService = Container.get(CoinbaseService),
  ) {
    this.exchangeRates = {};
  }

  @action
  initialize = async(context: AppContextProps, props: HomeProps) => {
    this.context = context;
    this.props = props;
    this.refreshExchangeRates();
  };

  @action
  refreshExchangeRates = async() => {
    this.exchangeRates = await this.coinbaseService.getExchangeRates();
  };

  @computed
  get displayableExchangeRates(): string[] {
    return Object.keys(this.exchangeRates).map((currency: string) => {
      return `${currency}: ${this.exchangeRates[currency]}`;
    });
  }
}
