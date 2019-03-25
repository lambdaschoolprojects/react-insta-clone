import React from "react";
import styled from "styled-components";

const PostHeader = ({ thumbnail, username }) => {
  return (
    <StyledHeaderDiv>
      <img src={thumbnail} className={"postImage"} alt={"thumbnail"} />{" "}
      <h2>{username}</h2>{" "}
    </StyledHeaderDiv>
  );
};

// styles
const StyledHeaderDiv = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  align-items: center;
  img {
    height: 30px;
    border-radius: 50%;
    margin: 10px;
  }
`;

export default PostHeader;
