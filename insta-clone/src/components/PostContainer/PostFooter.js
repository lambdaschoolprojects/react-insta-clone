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

// WIP
const getTime = timestamp => {
  // July 17th 2017, 12:42:40 pm
  const pattern = /(\w+)(?:\s)(\d{2})(?:th\s)(\d{4})(?:,\s)(\d{2}):(\d{2}):(\d{2})(?:\s)(\w+)/gi;

  console.log(timestamp);

  let groups = timestamp.match(pattern).groups;

  console.log(groups);

  //groups.forEach(group => console.log(group));

  // console.log(
  //   groups.month,
  //   groups.day,
  //   groups.year,
  //   groups.hour,
  //   groups.minute,
  //   groups.second,
  //   groups.tod
  // );
};

export default PostFooter;
