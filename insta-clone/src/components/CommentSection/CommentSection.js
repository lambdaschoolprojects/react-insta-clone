import React from "react";
import PropTypes from "prop-types";

import Comment from "./Comment";
import AddComment from "./AddComment";

const CommentSection = ({
  postId,
  comments,
  onInputChange,
  onSubmitComment
}) => {
  return (
    <>
      <div className="commentContainer">{getComments(comments)}</div>
      <AddComment
        postId={postId}
        onSubmitComment={onSubmitComment}
        onInputChange={onInputChange}
      />
    </>
  );
};

const getComments = comments => {
  const commentTags = comments.map(comment => (
    <Comment key={comment.text} comment={comment} />
  ));
  //console.log(comments);
  return commentTags;
};

export default CommentSection;

CommentSection.propTypes = {
  postId: PropTypes.number,
  comments: PropTypes.array,
  onInputChange: PropTypes.func,
  onSubmitComment: PropTypes.func
};
