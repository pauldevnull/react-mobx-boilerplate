import { Service } from 'typedi';
import { AxiosInstance } from 'axios';
import { ManagedAxiosFactory } from 'app/util/axios';
import { Exchange } from 'app/util/constants';
import { ExchangeRates } from 'app/model/exchange-rates.model';

@Service()
export default class CoinbaseService {

  private readonly coinbaseClient: AxiosInstance;

  constructor() {
    this.coinbaseClient = ManagedAxiosFactory.getInstance(Exchange.COINBASE);
  }

  async getExchangeRates(): Promise<ExchangeRates> {
    const response = await this.coinbaseClient.get(`/exchange-rates`);
    return response?.data?.data?.rates || {};
  }
}
