import React from "react";

import Comment from "./Comment";
import AddComment from "./AddComment";

const CommentSection = ({ comments }) => {
  return (
    <>
      {getComments(comments)}
      <AddComment />
    </>
  );
};

const getComments = comments => {
  const commentTags = comments.map(comment => <Comment comment={comment} />);

  return commentTags;
};

export default CommentSection;
