import React, { Component } from 'react';
import LatestResults from './LatestResults';
import results from '../results.json';

class EuroJackpotResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: null
        };
    }
    componentDidMount() {
        this.setState({
            results
        })
    }
    render() {
        return (
            <LatestResults results={this.state.results} />
        );
    }

}

export default EuroJackpotResults;