import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as H from 'history';
import { createBrowserHistory } from 'history';
import App from 'app/app';
import { AppProvider } from 'app/context/app.context';
import { createStores } from 'app/stores';

const history: H.History = createBrowserHistory();
const rootStore: object = createStores(history);

ReactDOM.render(
  <AppProvider {...rootStore}>
    <App history={history} />
  </AppProvider>,
  document.getElementById('root'),
);
