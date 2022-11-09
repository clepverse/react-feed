import { css } from './stitches.config';

export const wrapper = css({
  maxWidth: '70rem',
  margin: '2rem auto',
  padding: '0 1rem',

  display: 'grid',
  gridTemplateColumns: '256px 1fr',
  gap: '2rem',
  alignItems: 'flex-start',

  '@bp1': {
    gridTemplateColumns: '1fr',
  },
});
