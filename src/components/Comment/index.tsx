import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import { comment, commentBox, commentContent, authorAndTime } from './styles';

export function Comment() {
  return (
    <div className={comment()}>
      <Avatar hasBorder={false} src="https://github.com/ananias18.png" />
      <div className={commentBox()}>
        <div className={commentContent()}>
          <header>
            <div className={authorAndTime()}>
              <strong>Aldo Barbosa</strong>
              <time title="06 de novembro de 2022" dateTime="2022-11-06 20:00:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Curtir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
