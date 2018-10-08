import React, { Component } from 'react';
import LatestResultsTitle from './LatestResultsTitle';
import WinningNumbers from './WinningNumbers';
import OddsTable from './OddsTable';
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
        if (this.state.results) {
            return (
                <div>
                    <LatestResultsTitle lastDate={this.state.results.last.date} />
                    <WinningNumbers numbers={this.state.results.last.numbers} 
                                    euroNumbers={this.state.results.last.euroNumbers} />
                    <div>
                        <OddsTable odds={this.state.results.last.odds} />
                    </div>
                </div>
            );
        } else {
            return (
                <p>No results yet!</p>
            )
        }
        
    }

}

export default EuroJackpotResults;