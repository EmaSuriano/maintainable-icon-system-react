const { readdirSync } = require('fs');

const ICON_SOURCE_FOLDER = 'src/assets';
const ICON_OUTPUT_FOLDER = 'src/components/Icon';

const isSVG = name => /.svg$/.test(name);
const icons = readdirSync(ICON_SOURCE_FOLDER).filter(isSVG);

console.log(icons);
