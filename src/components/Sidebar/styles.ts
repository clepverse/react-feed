import { css } from '../../stitches.config';

export const sidebar = css({
  background: '$gray800',
  borderRadius: '8px',
  overflow: 'hidden',

  footer: {
    borderTop: '1px solid $gray600',
    marginTop: '1.5rem',
    padding: '1.5rem 2rem 2rem',

    '& a': {
      width: '100%',
      background: 'transparent',
      color: '$green500',
      border: '1px solid $green500',
      borderRadius: '8px',
      height: '50px',
      padding: '0 1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      gap: '0.5rem',

      transition: 'color 0.1s, background-color 0.1s',

      '&:hover': {
        background: '$green500',
        color: '$white',
      },
    },
  },
});

export const cover = css({
  width: '100%',
  height: '72px',
  objectFit: 'cover',
});

export const profile = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: 'calc(0px - 1.5rem - 6px)',

  '& strong': {
    marginTop: '1rem',
    color: '$gray100',
    lineHeight: '1.6',
  },

  '& span': {
    fontSize: '0.857rem',
    color: '$gray400',
    lineHeight: '1.6',
  },
});
