import 'app/app.css';
import * as React from 'react';
import * as H from 'history';
import Overview from 'app/containers/home/home.view';
import { Redirect, Route, Router, Switch } from 'react-router';
import { AppContext, AppContextProps } from './context/app.context';
import { observer } from 'mobx-react';

export interface AppProps {
  history?: H.History;
}

@observer
class App extends React.Component<AppProps> {

  context: AppContextProps;

  render() {
    return (
      <div className="container">
        <header>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </header>
        <Router history={this.props.history}>
          <Switch>
            <Route exact path="/" component={Overview} />
            <Route exact path="/home"><Redirect to="/" /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

App.contextType = AppContext;

export default App;
