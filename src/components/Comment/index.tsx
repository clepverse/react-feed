import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import { comment, commentBox, commentContent, authorAndTime } from './styles';

interface CommentProps {
  content: any;
  onDeleteComment: (arg: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={comment()}>
      <Avatar hasBorder={false} src="https://github.com/clepverse.png" />
      <div className={commentBox()}>
        <div className={commentContent()}>
          <header>
            <div className={authorAndTime()}>
              <strong>Aldo Barbosa</strong>
              <time title="06 de novembro de 2022" dateTime="2022-11-06 20:00:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
