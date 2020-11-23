import { globalStyles } from 'app/styles';
import { CombinedStyles, HomeStyles } from 'app/containers/home/types';

export const styles: HomeStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 0 30px 0',
  },
  exchangeHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '350px',
    alignItems: 'center',
  },
};

export const combinedStyles: CombinedStyles = { ...globalStyles, ...styles };
