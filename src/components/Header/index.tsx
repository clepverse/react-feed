import { header } from './styles';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <header className={header()}>
      <img src={logo} alt="Logotipo" />
    </header>
  );
}
