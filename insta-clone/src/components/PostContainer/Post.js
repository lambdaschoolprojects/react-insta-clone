import React from "react";
import styled from "styled-components";

// Components
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";

const Post = ({
  onInputChange,
  onSubmitComment,
  onLike,
  newComment,
  data: { id, username, thumbnailUrl, imageUrl, comments, likes, timestamp }
}) => {
  return (
    <PostWrapperDiv>
      <PostHeader username={username} thumbnail={thumbnailUrl} />
      <PostImage image={imageUrl} />
      <PostFooter
        postId={id}
        onInputChange={onInputChange}
        onSubmitComment={onSubmitComment}
        comments={comments}
        likes={likes}
        timestamp={timestamp}
        onLike={onLike}
        newComment={newComment}
      />
    </PostWrapperDiv>
  );
};

const PostWrapperDiv = styled.div`
  border: 2px outset #f8f8f8;
  width: fit-content;
  padding: 5px 5px;
  margin: 15px 25px;
`;

export default Post;
