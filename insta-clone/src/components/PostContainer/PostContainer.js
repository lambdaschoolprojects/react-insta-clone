import React from "react";

// Components
import Post from "./Post";

const PostContainer = ({ postData }) => {
  return <div className={"postContainer"}>{getPosts(postData)}</div>;
};

const getPosts = postData => {
  const posts = postData.map(post => (
    <Post key={post.username + post.timestamp} data={post} />
  ));

  return posts;
};

export default PostContainer;
