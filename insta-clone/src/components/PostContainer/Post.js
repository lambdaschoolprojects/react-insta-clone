import React from "react";
import PropTypes from "prop-types";

// Components
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";

const Post = ({
  onInputChange,
  onSubmitComment,
  onLike,
  data: { id, username, thumbnailUrl, imageUrl, comments, likes, timestamp }
}) => {
  return (
    <div className={"post"}>
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
      />
    </div>
  );
};

export default Post;

Post.propTypes = {
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
  onInputChange: PropTypes.func
};
