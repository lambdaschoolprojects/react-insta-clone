import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";

import CommentSection from "../CommentSection/CommentSection";

const PostFooter = ({ likes, comments, timestamp }) => {
  return (
    <div className={"postFooter"}>
      <div className={"interactions"}>
        <FiHeart className={"interaction"} size={"1.6em"} />
        <FaRegComment className={"interaction"} size={"1.6em"} />
      </div>
      <h2>{likes} likes</h2>
      <CommentSection comments={comments} />
    </div>
  );
};

export default PostFooter;
