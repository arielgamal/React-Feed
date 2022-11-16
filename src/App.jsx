import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import { posts } from "./posts";
import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map((e) => {
          return (<Post
            key={e.id}
            author={e.author}
            content={e.content}
            publishedAt={e.publishedAt}
          />
          )
        })}
        </main>
      </div>
    </div>
  )
}
