const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { execSync } = require('child_process');

const ICON_SOURCE_FOLDER = 'src/assets';
const ICON_OUTPUT_FOLDER = 'src/components/Icon';
const FONT_NAME = 'custom-font-icon';

// utils
const isSVG = file => /.svg$/.test(file);
const removeExtension = file => file.split('.')[0];
const toPascalCase = string =>
  string
    .match(/[a-z]+/gi)
    .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join('');
const writeFile = console.log;

const icons = readdirSync(ICON_SOURCE_FOLDER)
  .filter(isSVG)
  .map(removeExtension);

const generateWebAsset = icons => {
  const iconMapLines = [
    ...icons.map(
      icon =>
        `import { ReactComponent as ${toPascalCase(
          icon,
        )} } from './${icon}.svg';`,
    ),
    '',
    'export default {',
    ...icons.map(icon => `"${icon}": ${toPascalCase(icon)}, `),
    '};',
  ];

  return iconMapLines.join('\n');
};

const generateIndex = icons => {
  const indexLines = [
    "import React from 'react';",
    "import Icon from './Icon';",
    '',
    ...icons.map(icon => {
      const componentName = toPascalCase(icon);
      return `export const ${componentName} = props => <Icon {...props} name="${icon}" />`;
    }),
  ];

  return indexLines.join('\n');
};

const generateReactNativeAsset = icons => {
  execSync(
    `icon-font-generator ./${ICON_SOURCE_FOLDER}/*.svg -o ./${ICON_SOURCE_FOLDER} -n ${FONT_NAME} -c false --html false --types ttf`,
  );

  const glyphMap = JSON.parse(
    readFileSync(`./${ICON_SOURCE_FOLDER}/${FONT_NAME}.json`),
  );
  const customFontLines = [
    '{',
    ...Object.keys(glyphMap).map(
      value => `"${value}": ${parseInt(glyphMap[value].substr(1), 16)},`,
    ),
    '}',
  ];

  return customFontLines.join('\n');
};

writeFileSync(`${ICON_OUTPUT_FOLDER}/index.js`, generateIndex(icons));
writeFileSync(`${ICON_SOURCE_FOLDER}/icon-map.js`, generateWebAsset(icons));
writeFileSync(
  `./${ICON_SOURCE_FOLDER}/${FONT_NAME}.json`,
  generateReactNativeAsset(generateReactNativeAsset),
);
