// import type { CSSProperties } from '@stitches/core';
import { createStitches, globalCss } from '@stitches/core';

export const { theme, createTheme, config } = createStitches({});

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
});
