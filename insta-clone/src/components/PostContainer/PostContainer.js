import React from "react";

// Components
import Post from "./Post";

const PostContainer = ({ postData }) => {
  return <>{getPosts(postData)}</>;
};

const getPosts = postData => {
  const posts = postData.map(post => (
    <Post key={post.username + post.timestamp} data={postData} />
  ));

  return posts;
};

export default PostContainer;
