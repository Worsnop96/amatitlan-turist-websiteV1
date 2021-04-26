import React, { useState } from 'react'
import "./CommentBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase"

function CommentBox() {
  const [commentMessage, setCommentMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");

  const sendComment = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: nameMessage,
      text: commentMessage,
      avatar:
        "https://st4.depositphotos.com/5934840/25097/v/1600/depositphotos_250970072-stock-illustration-tourist-man-avatar.jpg",
    });
    setCommentMessage("");
    setNameMessage("");
  };


  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://st4.depositphotos.com/5934840/25097/v/1600/depositphotos_250970072-stock-illustration-tourist-man-avatar.jpg" />
          <input 
          onChange={(e) => setNameMessage(e.target.value)}
          value={nameMessage} placeholder="Nombre" type="text"/>
          <input
            onChange={(e) => setCommentMessage(e.target.value)}
            value={commentMessage}
            placeholder="Deseas dejar algun comentario?"
            type="text"
          />
        </div>
        <Button
          onClick={sendComment}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Commentar
        </Button>
      </form>
    </div>
  );
}

export default CommentBox
