import React, { Component } from "react";

import data from "./dummy-data";

// Components
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      searchTerm: "",
      newComment: ""
    };
  }

  // Set default data
  componentDidMount() {
    this.setState({
      data
    });
  }

  // Update state when inputs change
  onInputChange = event => {
    let value = event.target.value;
    let id = event.target.id;

    this.setState(prevState => {
      return { [id]: value };
    });
  };

  // Submit a comment, passed up from AddComment.js
  onSubmitComment = (event, postId) => {
    event.preventDefault();
    this.setState(prevState => {
      prevState.data.forEach(post => {
        if (post.id === postId)
          post.comments.push({
            username: "Anonymous",
            text: this.state.newComment
          });
      });
      const data = prevState.data;

      return { data, newComment: "" };
    });
  };

  // Add a like, passed up from PostFooter.js
  onLike = postId => {
    this.setState(prevState => {
      prevState.data.forEach(post => {
        if (post.id === postId) post.likes++;
      });
      const data = prevState.data;

      return { data };
    });
  };

  render() {
    return (
      <div>
        <SearchBar onInputChange={this.onInputChange} />
        <PostContainer
          onSubmitComment={this.onSubmitComment}
          onInputChange={this.onInputChange}
          onLike={this.onLike}
          postData={data}
        />
      </div>
    );
  }
}

export default App;
