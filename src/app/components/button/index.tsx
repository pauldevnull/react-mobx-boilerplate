import * as React from 'react';
import classnames from 'classnames';
import withStyles from 'app/util/withStyles';
import { styles } from './styles';

const Button = ({
                  classes,
                  children,
                  onClick,
                  disabled,
                  loading,
                  customLoader,
                  backgroundColor,
                  type,
                  isSubmit,
                  ...props
                }) => (
  <button
    type={isSubmit ? 'submit' : 'button'}
    className={classnames(classes.root, disabled || loading ? classes.disabled : null)}
    onClick={onClick}
    disabled={disabled || loading}
    {...props}
  >
    <div className={classes.childrenContainer}>{children}</div>
  </button>
);

export default withStyles(styles)(Button);
