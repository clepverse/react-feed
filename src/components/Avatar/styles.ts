import { css } from '../../stitches.config';
import type * as Stitches from '@stitches/core';

export const avatar = css({
  borderRadius: '8px',

  variants: {
    component: {
      sidebar: {
        width: 'calc(3rem + 12px)',
        height: 'calc(3rem + 12px)',
        border: '4px solid $gray800',
        outline: '2px solid $green500',
      },
      comment: {
        width: '3rem',
        height: '3rem',
      },
    },
  },
});

export type CSSAvatarVariants = Stitches.VariantProps<typeof avatar>;
