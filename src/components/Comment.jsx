import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  
  function handleDeleteCommment() {
    onDeleteComment(content);
  }

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

            <button onClick={handleDeleteCommment} title="Deletar comentario">
            <Trash syze={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
        <button onClick={() => setLikeCount((state) => { return state + 1})}>
          <ThumbsUp />
          Aplaudir <span>{likeCount}</span>
        </button>
        </footer>
      </div>
    </div>
  );
}