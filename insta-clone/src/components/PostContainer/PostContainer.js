import React from "react";

// Components
import Post from "./Post";
import SearchBar from "../SearchBar/SearchBar";

const PostContainer = ({
  postData,
  onInputChange,
  onSubmitComment,
  onLike,
  onSearch,
  searchTerm
}) => {
  return (
    <div className={"postContainer"}>
      <SearchBar
        onSearch={onSearch}
        onInputChange={onInputChange}
        searchTerm={searchTerm}
      />
      {getPosts(postData, onInputChange, onSubmitComment, onLike)}
    </div>
  );
};

const getPosts = (postData, onInputChange, onSubmitComment, onLike) => {
  const posts = postData.map(post => (
    <Post
      onInputChange={onInputChange}
      onSubmitComment={onSubmitComment}
      key={post.id}
      data={post}
      onLike={onLike}
    />
  ));

  return posts;
};

export default PostContainer;
