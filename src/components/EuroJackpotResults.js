import React, { Component } from 'react';
import LatestResults from './LatestResults';

class EuroJackpotResults extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            results: null
        };
    }
    render() {
        return (
            <LatestResults results={this.state.result} />
        );
    }

}

export default EuroJackpotResults;