import React, { Component } from "react";

import data from "./dummy-data";

// Components
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
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

  // Search for posts
  onSearch = event => {
    event.preventDefault();
    this.setState(prevState => {
      const data = prevState.data.filter(
        post => post.username === this.state.searchTerm.toLowerCase()
      );

      return { data, searchTerm: "" };
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          onSearch={this.onSearch}
          onInputChange={this.onInputChange}
          searchTerm={this.state.searchTerm}
        />
        <PostContainer
          onSubmitComment={this.onSubmitComment}
          onInputChange={this.onInputChange}
          onLike={this.onLike}
          postData={this.state.data}
        />
      </div>
    );
  }
}

export default App;
