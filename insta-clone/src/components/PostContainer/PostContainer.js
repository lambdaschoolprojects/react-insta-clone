import React from "react";

// Components
import Post from "./Post";
import SearchBar from "../SearchBar/SearchBar";
import PropTypes from "prop-types";

const PostContainer = ({
  postData,
  onInputChange,
  onSubmitComment,
  onLike,
  onSearch,
  newComment,
  searchTerm
}) => {
  return (
    <div className={"postContainer"}>
      <SearchBar
        onSearch={onSearch}
        onInputChange={onInputChange}
        searchTerm={searchTerm}
      />
      {getPosts(postData, onInputChange, onSubmitComment, onLike, newComment)}
    </div>
  );
};

const getPosts = (
  postData,
  onInputChange,
  onSubmitComment,
  onLike,
  newComment
) => {
  const posts = postData.map(post => (
    <Post
      onInputChange={onInputChange}
      onSubmitComment={onSubmitComment}
      newComment={newComment}
      key={post.id}
      data={post}
      onLike={onLike}
    />
  ));

  return posts;
};

export default PostContainer;

PostContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    ),
    likes: PropTypes.number,
    timestamp: PropTypes.string
  }),
  onLike: PropTypes.func,
  onSubmitComment: PropTypes.func,
  onInputChange: PropTypes.func,
  searchTerm: PropTypes.string,
  newComment: PropTypes.string,
  loginField: PropTypes.string
};
