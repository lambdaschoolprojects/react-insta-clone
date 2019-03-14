import React from "react";

import Comment from "./Comment";
import AddComment from "./AddComment";

const CommentSection = props => {
  return (
    <>
      <Comment />
      <AddComment />
    </>
  );
};

export default CommentSection;
