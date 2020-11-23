import axios, { AxiosInstance } from 'axios';
import { Container, Service } from 'typedi';
import { Exchange } from 'app/util/constants';

@Service()
export class ManagedAxiosFactory  {

  static coinbaseClient: AxiosInstance;

  public static getInstance(clientType: Exchange): AxiosInstance {
    const managedAxios = Container.get(ManagedAxios);

    switch(clientType) {
      case Exchange.COINBASE:
        if (!this.coinbaseClient) {
          this.coinbaseClient = managedAxios.getInstance('https://api.coinbase.com/v2');
        }
        return this.coinbaseClient;
      default:
        throw new Error('Unsupported axios client type');
    }
  }
}

export class ManagedAxios {

  getInstance(clientBaseUrl: string): AxiosInstance {
    const instance = axios.create();
    instance.defaults.baseURL = clientBaseUrl;
    return instance;
  }
}
