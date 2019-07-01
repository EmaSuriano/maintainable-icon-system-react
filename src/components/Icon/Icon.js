import React from 'react';
import { propTypes as IconPropTypes } from './Icon.props';
import iconMap from 'assets/icon-map';

const EmptyIcon = () => <div />;

const Icon = ({ name = '', size = '5em', color = 'black', ...rest }) => {
  const Icon = iconMap[name] || EmptyIcon;
  return <Icon color={color} style={{ width: size, height: size }} {...rest} />;
};

Icon.propTypes = IconPropTypes;

export default Icon;
