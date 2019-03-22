import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import styled from "styled-components";

import CommentSection from "../CommentSection/CommentSection";

const PostFooter = ({
  likes,
  comments,
  timestamp,
  onInputChange,
  onSubmitComment,
  onLike,
  newComment,
  postId
}) => {
  return (
    <FooterWrapperDiv>
      <InteractionsSection>
        <FiHeart
          onClick={() => onLike(postId)}
          className={"interaction"}
          size={"1.6em"}
        />
        <FaRegComment className={"interaction"} size={"1.6em"} />
      </InteractionsSection>
      <h2>{likes} likes</h2>
      <CommentSection
        onSubmitComment={onSubmitComment}
        postId={postId}
        comments={comments}
        onInputChange={onInputChange}
        newComment={newComment}
      />
    </FooterWrapperDiv>
  );
};

// Styles
const FooterWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 16px;
    margin: 15px 6px;
  }
`;

const InteractionsSection = styled.section`
  .interaction {
    margin: 6px 6px 0 6px;
    cursor: pointer;
  }
`;

export default PostFooter;
