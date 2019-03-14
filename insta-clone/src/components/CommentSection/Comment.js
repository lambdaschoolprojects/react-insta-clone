import React from "react";

import "./CommentSection.scss";

const Comment = ({ comment: { text, username } }) => {
  return (
    <div className={"comment"}>
      <p className={"username"}>
        <strong>{username}</strong>
      </p>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
