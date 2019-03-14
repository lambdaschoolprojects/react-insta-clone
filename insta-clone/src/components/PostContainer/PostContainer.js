import React from "react";

// Components
import Post from "./Post";

const PostContainer = ({ postData, onInputChange }) => {
  return (
    <div className={"postContainer"}>{getPosts(postData, onInputChange)}</div>
  );
};

const getPosts = (postData, onInputChange) => {
  const posts = postData.map(post => (
    <Post
      onInputChange={onInputChange}
      key={post.username + post.timestamp}
      data={post}
    />
  ));

  return posts;
};

export default PostContainer;
