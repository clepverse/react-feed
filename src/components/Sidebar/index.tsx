import { sidebar, cover, profile } from './styles';

import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

export function SideBar() {
  return (
    <aside className={sidebar()}>
      <img
        className={cover()}
        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={profile()}>
        <Avatar hasBorder={true} src="https://github.com/clepverse.png" />

        <strong>Aldo Barbosa</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
