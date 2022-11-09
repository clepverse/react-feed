import { Header } from './components/Header';
import { SideBar } from './components/Sidebar';
import { Post } from './components/Post/index';

import { wrapper } from './styles';

type postsType = {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: 'paragraph' | 'link';
    content: string;
  }[];
  publishedAt: Date;
}[];

const posts: postsType = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/clepverse.png',
      name: 'Aldo Barbosa',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Alô 👋' },

      {
        type: 'paragraph',
        content: 'Projeto feed 🚀',
      },
      { type: 'link', content: 'github/clepverse' },
    ],
    publishedAt: new Date('2022-11-09 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ananias18.png',
      name: 'Firminha',
      role: 'Backend Developer',
    },
    content: [
      { type: 'paragraph', content: ' Eu programo com o C#👋' },

      {
        type: 'paragraph',
        content: 'O estado tem que censurar mesmo pra não criar baderna 🚀',
      },
      { type: 'link', content: 'balta.io' },
    ],
    publishedAt: new Date('2022-11-08 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/JeanLeao.png',
      name: 'JeanLeao',
      role: 'Fullstack front end',
    },
    content: [
      { type: 'paragraph', content: 'Viva a Steam verde!' },

      {
        type: 'paragraph',
        content: 'Vendo conta netflix 2 reais.',
      },
      { type: 'link', content: 'jeanperigo.com' },
    ],
    publishedAt: new Date('2022-11-08 20:00:00'),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={wrapper()}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
