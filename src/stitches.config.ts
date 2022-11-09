// import type { CSSProperties } from '@stitches/core';
import { createStitches } from '@stitches/core';

export const { css, globalCss } = createStitches({
  theme: {
    colors: {
      white: '#fff',

      gray100: '#e1e1e6',
      gray300: '#c4c4cc',
      gray400: '#8d8d99',
      gray600: '#323238',
      gray700: '#29292e',
      gray800: '#202024',
      gray900: '#121214',

      green300: '#00B37E',
      green500: '#00875f',

      red500: '#F75A68',
    },

    fonts: {
      robotoSansSerif: 'Roboto, sans-serif',
    },
  },

  media: {
    bp1: '(max-width: 768px)',
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$gray900',
    color: '$gray300',
    fontSmooth: 'always',
  },

  'body, input, textarea, button': {
    fontFamily: '$robotoSansSerif',
    fontWeight: '400',
    fontSize: '1rem',
  },

  ':focus': {
    outline: 'transparent',
    boxShadow: '0 0 0 2px green',
  },

  '@bp1': {
    html: {
      fontSize: '87.5%',
    },
  },
});
