import React, { Component } from "react";

import dummyData from "./dummy-data";

// Components
import PostContainer from "./components/PostContainer/PostContainer";
import Login from "./components/LoginPage/Login";
import withAuthenticate from "./authentication/withAuthenticate";

const AuthenticatePage = withAuthenticate(PostContainer)(Login);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchTerm: "",
      newComment: "",
      loginField: "",
      authenticated: false
    };
  }

  // Set default data
  componentDidMount() {
    let authenticated = localStorage.getItem("username") != null;
    this.setState({
      data: dummyData,
      authenticated
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
            username: localStorage.getItem("username"),
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
      const data = dummyData.filter(
        post => post.username === this.state.searchTerm.toLowerCase()
      );

      return { data, searchTerm: "" };
    });
  };

  // login
  onLoginClicked = event => {
    localStorage.setItem("username", this.state.loginField);
    this.setState({ loginField: "", authenticated: true });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <AuthenticatePage
          onLoginClicked={this.onLoginClicked}
          authenticated={this.state.authenticated}
          onSearch={this.onSearch}
          searchTerm={this.state.searchTerm}
          loginField={this.state.loginField}
          onSubmitComment={this.onSubmitComment}
          onInputChange={this.onInputChange}
          onLike={this.onLike}
          postData={this.state.data}
          newComment={this.state.newComment}
        />
      </div>
    );
  }
}

export default App;
