import { px, breakpoints } from 'utils/css-utils';

const space = [0, 4, 8, 16, 32, 48, 64, 96, 128];
const spacePx = space.map(px);

const fontSizes = [16, 20, 24, 36, 48, 54];
const fontSizesPx = fontSizes.map(px);
const breakpointsPx = Object.values(breakpoints).map(px);

const theme = {
  fonts: {
    sans:
      "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif",
    mono: 'monospace',
  },
  space,
  spacePx,
  fontSizes,
  fontSizesPx,
  breakpoints: breakpointsPx,
  boxShadow: '0px 16px 64px rgba(26, 25, 43, 0.32);',
  colors: {
    primary: '#41B3A3', 
    orange: '#E8A87C',
    blue: '#E27D60',
    red: '#E85C41',
    purple: '#C38D9E',
    green: '#85DC8B',
    text: '#1A192B',
    textLight: '#808080',
    lightGrey: '#D9D9D9',
  },
  palette: {
    common: {
      white: '#41B3A3',
      black: '#000000'
    },
    primary: {
      main: '#41B3A3' 
    }
  }
};

export default theme;