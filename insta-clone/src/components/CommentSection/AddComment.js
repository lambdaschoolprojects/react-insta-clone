import React from "react";

const AddComment = ({ onInputChange, onSubmitComment, postId }) => {
  return (
    <form onSubmit={event => onSubmit(event, postId, onSubmitComment)}>
      <input
        id="newComment"
        placeholder="Add comment"
        type={"text"}
        onChange={event => onInputChange(event)}
      />
    </form>
  );
};

const onSubmit = (event, postId, cb) => {
  console.log("bleep");
  cb(event, postId);
  event.preventDefault();
};

export default AddComment;
