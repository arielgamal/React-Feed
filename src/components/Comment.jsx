import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return(
    <div className={styles.comment}>
      <Avatar />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Paulo Victor</strong>
              <time title="14 novembro às 15:00" dateTime="2022-11-14">Cerva de 1h atrás</time>
            </div>

            <button title="Deletar comentario">
            <Trash syze={20}/>
            </button>
          </header>

          <p>Muito bom Ariel, parabens!!</p>
        </div>

        <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
        </footer>
      </div>
    </div>
  );
}