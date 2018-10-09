import React, { Component } from 'react';
import LatestResultsHeader from './LatestResultsHeader';
import WinningNumbers from './WinningNumbers';
import OddsTable from './OddsTable';
import './EuroJackpotResults.css'
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
                <div className="results">
                    <LatestResultsHeader lastDate={this.state.results.last.date} />
                    <WinningNumbers numbers={this.state.results.last.numbers} 
                                    euroNumbers={this.state.results.last.euroNumbers} />
                    <div className="results-odds">
                        <div className="results-odds-table">
                            <OddsTable odds={this.state.results.last.odds} />
                        </div>
                        <div className="results-odds-pods">

                        </div>
                        
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