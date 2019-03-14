import React from "react";

// Components
import Post from "./Post";

const PostContainer = ({ postData, onInputChange, onSubmitComment }) => {
  return (
    <div className={"postContainer"}>
      {getPosts(postData, onInputChange, onSubmitComment)}
    </div>
  );
};

const getPosts = (postData, onInputChange, onSubmitComment) => {
  const posts = postData.map(post => (
    <Post
      onInputChange={onInputChange}
      onSubmitComment={onSubmitComment}
      key={post.id}
      data={post}
    />
  ));

  return posts;
};

export default PostContainer;
