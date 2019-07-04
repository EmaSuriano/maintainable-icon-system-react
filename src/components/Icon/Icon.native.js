import customFontGlyph from '../../assets/fonts/custom-font-icon.json';
import { propTypes } from './Icon.props';
import { createIconSet } from 'react-native-vector-icons';

const Icon = createIconSet(
  customFontGlyph,
  'custom-font-icon',
  'custom-font-icon.ttf',
);

Icon.propTypes = propTypes;

Icon.defaultProps = {
  size: 60,
  color: 'black',
};

export default Icon;
