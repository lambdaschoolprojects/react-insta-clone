import React from "react";

// Components
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";

const Post = ({
  data: { username, thumbnailUrl, imageUrl, comments, likes, timestamp }
}) => {
  return (
    <div className={"post"}>
      <PostHeader username={username} thumbnail={thumbnailUrl} />
      <PostImage image={imageUrl} />
      <PostFooter comments={comments} likes={likes} timestamp={timestamp} />
    </div>
  );
};

export default Post;
