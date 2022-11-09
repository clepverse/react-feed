import { Header } from './components/Header';
import { SideBar } from './components/Sidebar';
import { Post } from './components/Post/index';

import { wrapper } from './styles';

function App() {
  return (
    <div>
      <Header />

      <div className={wrapper()}>
        <SideBar />
        <main>
          <Post
            authorPost="Clep"
            contentPost="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores voluptatibus quibusdam aliquam incidunt dolorem perspiciatis."
          />

          <Post
            authorPost="Dev"
            contentPost="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores voluptatibus quibusdam aliquam incidunt dolorem perspiciatis."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
