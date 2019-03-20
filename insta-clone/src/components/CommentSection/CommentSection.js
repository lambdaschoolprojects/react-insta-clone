import React from "react";

import Comment from "./Comment";
import AddComment from "./AddComment";

const CommentSection = ({
  postId,
  comments,
  onInputChange,
  onSubmitComment,
  newComment
}) => {
  return (
    <>
      <div className="commentContainer">{getComments(comments)}</div>
      <AddComment
        postId={postId}
        onSubmitComment={onSubmitComment}
        onInputChange={onInputChange}
        newComment={newComment}
      />
    </>
  );
};

const getComments = comments => {
  const commentTags = comments.map(comment => (
    <Comment key={comment.text} comment={comment} />
  ));

  return commentTags;
};

export default CommentSection;
