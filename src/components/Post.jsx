import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format } from "date-fns";
import styles from "./Post.module.css";
import { ptBR, ta } from "date-fns/locale";
import { useState } from "react";

export function Post({author, content, publishedAt}) {
  const [comments, setComments] = useState(["Post muito bacana hein?"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

  //Função para adicionar comentarios;
  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  //Função para pegar o texto dentro do input;
  function handleNewCommentChange({target}) {
    setNewCommentText(target.value);
  }

  const {avatarUrl, name, role} = author
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time title="14 novembro às 12:50" dateTime="2022-11-14">{publishedDateFormatted}</time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return <p key={line.content}><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
        />
        
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
      {comments.map((comment) => {
        return <Comment key={comment} content={comment}/>
      })}
      </div>
    </article>
  );
}