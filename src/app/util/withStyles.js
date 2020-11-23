import merge from 'lodash/merge';
import injectSheet from 'react-jss';
import jss from 'jss';
import jssExtend from 'jss-extend';
import jssNested from 'jss-nested';

jss.use(jssExtend);
jss.use(jssNested);

const withStyles = (styles) => (Component) => {
  const borderBox = {
    root: {
      boxSizing: 'border-box',
        '& *': {
          boxSizing: 'inherit',
        },
      },
    };

  const mergedStyles = merge(borderBox, Component.appliedStyles, styles);
  const StyledComponent = injectSheet(mergedStyles)(Component);

  return {
    ...StyledComponent,
    appliedStyles: mergedStyles,
    InnerComponent: Component,
    displayName: `withStyles(${Component.name})`,
  };
};

export default withStyles;
