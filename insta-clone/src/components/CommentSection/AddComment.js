import React from "react";

const AddComment = ({ onInputChange, onSubmitComment, postId, newComment }) => {
  return (
    <form onSubmit={event => onSubmitComment(event, postId)}>
      <input
        id="newComment"
        placeholder="Add comment"
        type={"text"}
        onChange={event => onInputChange(event)}
        value={newComment}
      />
    </form>
  );
};

export default AddComment;
