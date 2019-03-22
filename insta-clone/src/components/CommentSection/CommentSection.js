import React from "react";
import styled from "styled-components";

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
      <CommentsWrapperDiv>{getComments(comments)}</CommentsWrapperDiv>
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

const CommentsWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CommentSection;
