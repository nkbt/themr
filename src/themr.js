const React = require('react');
const PropTypes = require('prop-types');


const getDisplayName = ({displayName, name}) => displayName || name || 'Component';


const extendTheme = ({internal, external}) => Object.keys(internal)
  .reduce((result, key) => ({
    ...result,
    [key]: [internal[key], external[key]].filter(x => x).join(' ')
  }), {});
exports.extendTheme = extendTheme;


const generatePropTypes = theme => Object.keys(theme)
  .reduce((result, key) => ({
    ...result,
    [key]: PropTypes.string
  }), {});
exports.generatePropTypes = generatePropTypes;


exports.themr = (internal = {}, {override = false} = {}) => {
  const propTypes = {
    theme: PropTypes.shape(generatePropTypes(internal))
  };

  const factory = WrappedComponent => {
    const Themed = ({theme: external, ...props}) => React.createElement(WrappedComponent, {
      theme: override
        ? {...internal, ...external}
        : extendTheme({internal, external}),
      ...props
    });

    Themed.propTypes = propTypes;
    Themed.defaultProps = {theme: {}};
    Themed.displayName = `Themed(${getDisplayName(WrappedComponent)})`;

    return Themed;
  };

  factory.generatedPropTypes = propTypes;

  return factory;
};
