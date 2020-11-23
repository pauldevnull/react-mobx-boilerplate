import * as React from 'react';
import { createContext } from 'react';
import HomeViewModel from 'app/containers/home/home.viewmodel';

export interface AppContextProps {
  state?: any;
  isLoading?: boolean;
  homeViewModel: HomeViewModel,
}

export const AppContext = createContext({} as AppContextProps);

export class AppProvider extends React.Component {
  state = {
    homeViewModel: null,
  };

  componentWillMount() {
    this.setState({
      homeViewModel: new HomeViewModel(),
    });
  }

  render() {
    const { homeViewModel } = this.state;
    const { children } = this.props;

    const contextValues = {
      homeViewModel,
    };

    return (
      <AppContext.Provider value={contextValues}>
        {children}
      </AppContext.Provider>
    );
  }
}
