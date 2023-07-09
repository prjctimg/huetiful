// Color modules
import amber from './colors/amber.mjs';
import orange from './colors/orange.mjs';
import blue from './colors/blue.mjs';
import cyan from './colors/cyan.mjs';
import emerald from './colors/emerald.mjs';
import fuchsia from './colors/fuchsia.mjs';
import gray from './colors/gray.mjs';
import green from './colors/green.mjs';
import indigo from './colors/indigo.mjs';
import lime from './colors/lime.mjs';
import neutral from './colors/neutral.mjs';
import pink from './colors/pink.mjs';
import purple from './colors/purple.mjs';
import red from './colors/red.mjs';
import rose from './colors/rose.mjs';
import sky from './colors/sky.mjs';
import slate from './colors/slate.mjs';
import stone from './colors/stone.mjs';
import teal from './colors/teal.mjs';
import violet from './colors/violet.mjs';
import yellow from './colors/yellow.mjs';
import zinc from './colors/zinc.mjs';
import colors from './colors/colors.mjs';

// Palettes module
import hueShift from './palettes/hueShift.mjs';
import base from './palettes/base.mjs';
import pastel from './palettes/pastel.mjs';

export { hueShift, base, pastel };

// core-utils
import purify from './core-utils/purify.mjs';
import {
    getChannel,
    getLuminance,
    getTemp,
    setChannel,
    setLuminance,
    setTemp
} from './core-utils/helpers.mjs';
export { getChannel, getLuminance, getTemp, setChannel, setLuminance, setTemp, purify };

// SortBy modules
import sortByHue from './sortBy/sortByHue.mjs';
import sortByLuminance from './sortBy/sortByLuminance.mjs';
import sortByShade from './sortBy/sortByShade.mjs';
import sortByTemp from './sortBy/sortByTemp.mjs';

export { sortByHue, sortByLuminance, sortByShade, sortByTemp };

export {
    colors,
    amber,
    orange,
    blue,
    cyan,
    emerald,
    fuchsia,
    gray,
    green,
    indigo,
    lime,
    neutral,
    pink,
    purple,
    red,
    rose,
    sky,
    slate,
    stone,
    teal,
    violet,
    yellow,
    zinc
};
