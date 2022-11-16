import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({content}) {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/arielgamal.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ariel Wild Gamal</strong>
              <time title="14 novembro às 15:00" dateTime="2022-11-14">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentario">
            <Trash syze={24}/>
            </button>
          </header>

          <p>{content}</p>
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