const { toPascalCase } = require('./utils');
const { readFileSync, writeFileSync } = require('fs');
const { execSync } = require('child_process');

const generateIconComponentFile = (icons, { dir }) => {
  const indexContent = [
    "import React from 'react';",
    "import Icon from './Icon';",
    '',
    icons
      .map(
        icon =>
          `export const ${toPascalCase(
            icon,
          )} = props => <Icon {...props} name="${icon}" />;`,
      )
      .join('\n'),
  ].join('\n');

  writeFileSync(`${dir}/index.js`, indexContent);
  console.log('Icon component file created! ✅');
};

const generateWebIconMap = (icons, { dir }) => {
  const iconMapContent = [
    icons
      .map(
        icon =>
          `import { ReactComponent as ${toPascalCase(
            icon,
          )} } from './${icon}.svg';`,
      )
      .join('\n'),
    '',
    'export default {',
    icons.map(icon => `"${icon}": ${toPascalCase(icon)}, `).join('\n'),
    '};',
  ].join('\n');

  writeFileSync(`${dir}/icon-map.js`, iconMapContent);
  console.log('Web Icon Map created! ✅');
};

const generateReactNativeAsset = (icons, { dir, fontName, fontDir }) => {
  const generatorOptions = {
    name: fontName,
    css: false,
    html: false,
    types: 'ttf',
    out: fontDir,
    height: 500,
  };

  const optionString = Object.entries(generatorOptions)
    .map(([option, value]) => `--${option} ${value}`)
    .join(' ');

  execSync(`icon-font-generator ./${dir}/*.svg ${optionString}`);

  const glyphMap = JSON.parse(readFileSync(`./${fontDir}/${fontName}.json`));

  const customFontContent = [
    '{',
    icons
      .map(value => `"${value}": ${parseInt(glyphMap[value].substr(1), 16)}`)
      .join(',\n'),
    '}',
  ].join('\n');

  writeFileSync(`./${fontDir}/${fontName}.json`, customFontContent);
  console.log('React Native Asset generated! ✅');
};

module.exports = {
  generateIconComponentFile,
  generateWebIconMap,
  generateReactNativeAsset,
};
