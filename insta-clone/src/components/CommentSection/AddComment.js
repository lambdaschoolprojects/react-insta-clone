import React from "react";

const AddComment = ({ onInputChange }) => {
  return (
    <input
      id="newComment"
      placeholder="Add comment"
      type={"text"}
      onChange={event => onInputChange(event)}
    />
  );
};

export default AddComment;
