import React from "react";
import styled from "styled-components";

const Comment = ({ comment: { text, username } }) => {
  return (
    <CommentWrapper>
      <p className={"username"}>
        <strong>{username}</strong>
      </p>
      <p>{text}</p>
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  display: flex;
  margin: 5px;
  .username {
    margin-right: 10px;
    font-weight: bold;
  }
`;

export default Comment;
