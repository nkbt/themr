import React from 'react';


const getDisplayName = ({displayName, name}) => displayName || name || 'Component';


export const extendTheme = ({internal, external}) =>
  Object.keys(internal)
    .reduce((result, key) => ({
      ...result,
      [key]: [internal[key], external[key]].filter(x => x).join(' ')
    }), {});


export const generatePropTypes = theme =>
  Object.keys(theme)
    .reduce((result, key) => ({
      ...result,
      [key]: React.PropTypes.string
    }), {});


export const themr = (internal, options = {}) => {
  const propTypes = React.PropTypes.shape(generatePropTypes(internal));
  const factory = WrappedComponent => {
    const {override = false} = options;
    const Themed = ({theme: external, ...props}) =>
      React.createElement(WrappedComponent, {
        ...props,
        theme: override ? {...internal, ...external} : extendTheme({internal, external})
      });

    Themed.propTypes = propTypes;
    Themed.displayName = `Themed(${getDisplayName(WrappedComponent)})`;

    return Themed;
  };

  factory.propTypes = propTypes;

  return factory;
};
