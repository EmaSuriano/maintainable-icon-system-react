import React from 'react';
import icons from 'assets/icons';

const EmptyIcon = () => <div />;

const Icon = ({ name = '', size = '5em' }) => {
  const Icon = icons[name] || EmptyIcon;
  return <Icon color="red" style={{ width: size, height: size }} alt="pepe" />;
};

export default Icon;
