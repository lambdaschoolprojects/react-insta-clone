import React from "react";

const AddComment = ({ onInputChange, onSubmitComment, postId }) => {
  return (
    <form onSubmit={event => onSubmitComment(event, postId)}>
      <input
        id="newComment"
        placeholder="Add comment"
        type={"text"}
        onChange={event => onInputChange(event)}
      />
    </form>
  );
};

export default AddComment;
