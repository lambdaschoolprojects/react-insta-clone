import React from "react";
import PropTypes from "prop-types";

const PostImage = ({ image }) => {
  return <img src={image} alt={"thumbail for post"} />;
};

export default PostImage;

PostImage.propTypes = {
  image: PropTypes.string
};
