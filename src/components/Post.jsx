import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/PVGusmao.png"/>
          <div className={styles.authorInfo}>
            <strong>Paulo Victor</strong>
            <span>Frontend Developer (React Mobile)</span>
          </div>
        </div>

        <time title="14 novembro às 12:50" dateTime="2022-11-14">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera =D</p>
        <p>Acabei upar um arquivo com todos os conteúdos de React native para estudo, chega mais.</p>
        <p><a href="">paulo.dev/pvmg</a></p>
        <p><a href="">#ariel #novoprojeto #soudemais</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Dexei um comentário"
        />
        
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}