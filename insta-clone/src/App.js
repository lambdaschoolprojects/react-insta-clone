import React, { Component } from 'react';

import data from './dummy-data';

import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            searchTerm: ''
        };
    }

    componentDidMount() {

        this.setState({
            data
        })
    }

    onInputChange = event => {
        let searchTerm = event.target.value;

        this.setState(prevState => {
            return { searchTerm }
        })
    }

    render() {
        return <div><SearchBar onInputChange={this.onInputChange} /></div>;
    }
}

export default App;