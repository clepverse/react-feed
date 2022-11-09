import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import { post, author, authorInfo, content, commentForm, commentList } from './styles';

interface PostProps {
  authorPost: string;
  contentPost: string;
}

export function Post({ authorPost, contentPost }: PostProps) {
  return (
    <article className={post()}>
      <header>
        <div className={author()}>
          <Avatar hasBorder={true} src="https://github.com/clepverse.png" />
          <div className={authorInfo()}>
            <strong>Aldo Barbosa</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="06 de novembro de 2022" dateTime="2022-11-06 20:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={content()}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento
          da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto </a>
          <a href="">#dev </a>
          <a href="">#reactjs </a>
        </p>
      </div>

      <form className={commentForm()}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={commentList()}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
