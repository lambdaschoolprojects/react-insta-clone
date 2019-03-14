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

  componentDidMount() {
    this.setState({
      data
    });
  }

  onInputChange = event => {
    let value = event.target.value;
    let id = event.target.id;

    this.setState(prevState => {
      return { [id]: value };
    });
  };

  render() {
    return (
      <div>
        <SearchBar onInputChange={this.onInputChange} />
        <PostContainer onInputChange={this.onInputChange} postData={data} />
      </div>
    );
  }
}

export default App;
