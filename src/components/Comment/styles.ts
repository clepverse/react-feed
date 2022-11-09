import { css } from '../../stitches.config';

export const comment = css({
  marginTop: '1.5rem',
  display: 'flex',
  gap: '1rem',

  ' > img': {
    width: '3rem',
    height: '3rem',
    borderRadius: '8px',
  },
});

export const commentBox = css({
  flex: '1',

  footer: {
    marginTop: '1rem',

    button: {
      background: 'transparent',
      border: '0',
      color: '$gray400',
      cursor: 'pointer',

      display: 'flex',
      alignItems: 'center',

      borderRadius: '2px',

      transition: 'color 0.1s',

      '&:hover': {
        color: '$green300',
      },

      svg: {
        marginRight: '0.5rem',
      },

      'span::before': {
        content: '\\2022',
        padding: '0 0.25rem',
      },
    },
  },
});

export const commentContent = css({
  background: '$gray700',
  borderRadius: '8px',
  padding: '1rem',

  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    button: {
      background: 'transparent',
      border: '0',
      color: '$gray400',
      cursor: 'pointer',

      lineHeight: '0',
      borderRadius: '2px',

      transition: 'color 0.1s',

      '&:hover': {
        color: '$red500',
      },
    },
  },

  p: {
    marginTop: '1rem',
    color: '$gray300',
  },
});

export const authorAndTime = css({
  strong: {
    display: 'block',
    fontSize: '0.875rem',
    lineHeight: '1.6',
  },

  time: {
    display: 'block',
    fontSize: '0.75rem',
    lineHeight: '1.6',
    color: '$gray400',
  },
});
