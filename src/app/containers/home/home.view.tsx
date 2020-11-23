import * as React from 'react';
import Button from 'app/components/button';
import withStyles from 'app/util/withStyles';
import HomeViewModel from 'app/containers/home/home.viewmodel';
import { combinedStyles } from 'app/containers/home/styles';
import { AppContext, AppContextProps } from 'app/context/app.context';
import { HomeClassNames, HomeProps } from 'app/containers/home/types';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

@observer
class Home extends React.Component<HomeProps & HomeClassNames> {

  context: AppContextProps;
  homeViewModel: HomeViewModel;

  componentWillMount() {
    this.homeViewModel = this.context.homeViewModel;
  }

  componentDidMount() {
    this.homeViewModel.initialize(this.context, this.props);
  }

  render() {
    const { classes } = this.props;
    const { refreshExchangeRates, displayableExchangeRates } = this.homeViewModel;

    return (
      <div className={classes.root}>
        <h1>Home</h1>

        <h2 className={classes.exchangeHeader}>
          <img src="app/assets/images/coinbase-logo.png" width="50px" height="50px" />
          <span>Exchange rates</span>
          <Button onClick={refreshExchangeRates}>Refresh</Button>
        </h2>

        <div className={classes.container}>
          {displayableExchangeRates.map((rate: string, index: number) => {
            return <div key={`rate${index}`}>{rate}</div>;
          })}
        </div>
      </div>
    );
  }
}

Home.contextType = AppContext;

export default withRouter(withStyles(combinedStyles)(Home)) as React.ComponentClass<any>;
