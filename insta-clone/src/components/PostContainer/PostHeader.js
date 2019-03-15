import React from "react";
import PropTypes from "prop-types";

// Styles
import "./Post.scss";

const PostHeader = ({ username, thumbnail }) => {
  return (
    <div className={"postHeader"}>
      <img src={thumbnail} className={"postImage"} alt={"thumbnail"} />{" "}
      <h2>{username}</h2>{" "}
    </div>
  );
};

export default PostHeader;

PostHeader.propTypes = {
  username: PropTypes.string,
  thumbnail: PropTypes.string
};
