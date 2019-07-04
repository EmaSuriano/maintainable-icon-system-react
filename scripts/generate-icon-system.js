const { readdirSync } = require('fs');
const { isSVG, removeExtension } = require('./utils');
const {
  generateWebIconMap,
  generateReactNativeAsset,
  generateIconComponentFile,
} = require('./generators');

const ICON_SOURCE_FOLDER = 'src/assets/icons';
const ICON_OUTPUT_FOLDER = 'src/components/Icon';
const FONT_FOLDER = 'src/assets/fonts';
const FONT_NAME = 'custom-font-icon';

const icons = readdirSync(ICON_SOURCE_FOLDER)
  .filter(isSVG)
  .map(removeExtension);

try {
  generateIconComponentFile(icons, { dir: ICON_OUTPUT_FOLDER });
  generateWebIconMap(icons, { dir: ICON_SOURCE_FOLDER });
  generateReactNativeAsset(icons, {
    fontName: FONT_NAME,
    dir: ICON_SOURCE_FOLDER,
    fontDir: FONT_FOLDER,
  });
} catch (e) {
  console.error(e);
}
