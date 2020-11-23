import { colors } from 'app/util/colors';

export const styles = {
  root: {
    position: 'relative',
    fontFamily: 'Roboto',
    fontSize: '12px',
    height: '35px',
    borderRadius: '3px',
    padding: '0 15px',
    cursor: 'pointer',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px',
    textDecoration: 'none',
    outline: 'none',
    border: `0.5px solid ${colors.grey}`,
    transition: 'opacity 500ms ease 0s, background-color 300ms ease 0s',
    color: ({ type }) => (type === 'cancel' ? colors.black : colors.white),
    background: ({ type }) => {
      if (type === 'cancel') return 'grey';
      if (type === 'warning') return 'red';
      return colors.blackGrey;
    },
    '&:hover': {
      background: ({ type }) => {
        if (type === 'cancel') return 'grey';
        if (type === 'warning') return 'darkRed';
        return colors.black;
      },
    },
    '&:active': {
      boxShadow: 'inset 0 1px 3px 0 rgba(0,0,0,0.5), 0 1px 2px 0 rgba(0,0,0,0.5)',
      background: ({ type }) => {
        if (type === 'cancel') return 'grey';
        if (type === 'warning') return 'darkRed';
        return colors.lightBlackGrey;
      },
    },
  },
  disabled: {
    opacity: 0.5,
    pointerEvents: 'none',
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  childrenContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    visibility: ({ loading }) => (loading ? 'hidden' : 'visible'),
  },
};
