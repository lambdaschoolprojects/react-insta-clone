import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";

import CommentSection from "../CommentSection/CommentSection";

const PostFooter = ({
  likes,
  comments,
  timestamp,
  onInputChange,
  onSubmitComment,
  onLike,
  postId
}) => {
  return (
    <div className={"postFooter"}>
      <div className={"interactions"}>
        <FiHeart
          onClick={() => onLike(postId)}
          className={"interaction"}
          size={"1.6em"}
        />
        <FaRegComment className={"interaction"} size={"1.6em"} />
      </div>
      <h2>{likes} likes</h2>
      <CommentSection
        onSubmitComment={onSubmitComment}
        postId={postId}
        comments={comments}
        onInputChange={onInputChange}
      />
    </div>
  );
};

export default PostFooter;
