import { avatar, CSSAvatarVariants } from './styles';

interface AvatarProps {
  hasBorder: boolean;
  src: string;
}

export function Avatar({ hasBorder = true, src }: AvatarProps) {
  return (
    <img
      className={hasBorder ? avatar({ component: 'sidebar' }) : avatar({ component: 'comment' })}
      src={src}
      alt=""
    />
  );
}
