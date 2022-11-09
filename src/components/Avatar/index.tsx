import { ImgHTMLAttributes } from 'react';
import { avatar, CSSAvatarVariants } from './styles';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? avatar({ component: 'sidebar' }) : avatar({ component: 'comment' })}
      {...props}
    />
  );
}
