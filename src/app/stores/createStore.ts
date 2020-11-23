import { History } from 'history';
import { RouterStore } from './RouterStore';

export const STORE_ROUTER: string = 'router';

export function createStores(history: History): object {
  const routerStore: RouterStore = new RouterStore(history);
  return {
    [STORE_ROUTER]: routerStore
  };
}
