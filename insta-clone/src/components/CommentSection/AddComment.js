import React from "react";
import styled from "styled-components";

const AddComment = ({ onInputChange, onSubmitComment, postId, newComment }) => {
  return (
    <form onSubmit={event => onSubmitComment(event, postId)}>
      <NewCommentInput
        id="newComment"
        placeholder="Add comment"
        type={"text"}
        onChange={event => onInputChange(event)}
        value={newComment}
      />
    </form>
  );
};

const NewCommentInput = styled.input`
  height: 30px;
  margin: 10px 10px;
  width: 95%;
  padding-left: 5px;
`;

export default AddComment;
