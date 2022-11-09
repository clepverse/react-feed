import { css } from '../../stitches.config';

export const post = css({
  backgroundColor: '$gray800',
  borderRadius: '8px',
  padding: '2.5rem',

  '&:first-child': {
    marginBottom: '2rem',
  },

  ' > header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    time: {
      fontSize: '0.875rem',
      color: '$gray400',
    },
  },
});

export const author = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const authorInfo = css({
  strong: {
    display: 'block',
    color: '$gray100',
    lineHeight: '1.6',
  },

  span: {
    display: 'block',
    fontSize: '0.875rem',
    color: '$gray400',
    lineHeight: '1.6',
  },
});

export const content = css({
  lineHeight: '1.6',
  color: '$gray300',
  marginTop: '1.5rem',

  p: {
    marginTop: '1.5rem',
  },

  a: {
    marginTop: '1rem',
    color: '$green500',
    textDecoration: 'none',

    transition: 'color 0.1s',

    '&:hover': {
      color: '$green300',
    },
  },
});

export const commentForm = css({
  width: '100%',
  marginTop: '1.5rem',
  paddingTop: '1.5rem',
  borderTop: '1px solid $gray600',

  ' > strong': {
    lineHeight: '1.6',
    color: '$gray100',
  },

  textarea: {
    width: '100%',
    background: '$gray900',
    border: '0',
    resize: 'none',
    height: '6rem',
    padding: '1rem',
    borderRadius: '8px',
    color: '$gray100',
    lineHeight: '1.4',
    marginTop: '1rem',
  },

  footer: {
    visibility: 'hidden',
    maxHeight: '0',
  },

  '&:focus-within footer': {
    visibility: 'visible',
    maxHeight: 'none',
  },

  'button[type=submit]': {
    padding: '1rem 1.5rem',
    marginTop: '1rem',
    borderRadius: '8px',
    border: '0',
    background: '$green500',
    color: '$white',
    fontWeight: 'bold',
    cursor: 'pointer',

    transition: 'background-color 0.1s',

    '&:hover': {
      background: '$green300',
    },
  },
});

export const commentList = css({
  marginTop: '2rem',
});
