import React from 'react';
import { propTypes } from './Icon.props';
import iconMap from 'assets/icon-map';

const EmptyIcon = () => <div />;

const Icon = ({ name = '', size = '5em', color = 'white', ...rest }) => {
  const Icon = iconMap[name] || EmptyIcon;
  return (
    <Icon
      color={color}
      style={{ width: size, height: size, color }}
      {...rest}
    />
  );
};

Icon.propTypes = propTypes;

export default Icon;
