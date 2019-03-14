import React from 'react';

// Components
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";

const PostContainer = (props) => {
    return (
        <>
        <PostHeader/>
        <PostImage />
        <PostFooter/>
        </>

    )
}

export default PostContainer;