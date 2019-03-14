import React from "react";

const AddComment = ({ onInputChange, onSubmitComment, postId }) => {
  return (
    <input
      id="newComment"
      placeholder="Add comment"
      type={"text"}
      onChange={event => onInputChange(event)}
      onKeyDown={event => onKeyDown(event, postId, onSubmitComment)}
    />
  );
};

const onKeyDown = (event, postId, cb) => {
  if (event.keyCode === 13) cb(event, postId);
};

export default AddComment;
