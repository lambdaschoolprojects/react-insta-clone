import React from "react";

import Comment from "./Comment";
import AddComment from "./AddComment";

const CommentSection = ({ comments, onInputChange }) => {
  return (
    <>
      <div className="commentContainer">{getComments(comments)}</div>
      <AddComment onInputChange={onInputChange} />
    </>
  );
};

const getComments = comments => {
  const commentTags = comments.map(comment => <Comment comment={comment} />);

  return commentTags;
};

export default CommentSection;
