import React, { Component } from 'react';
import moment from 'moment';
import LatestResultsHeader from './LatestResultsHeader';
import WinningNumbers from './WinningNumbers';
import OddsTable from './OddsTable';
import Pod from './Pod';
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
            const { last } = this.state.results;
            const drawDateWrapper = moment(new Date(last.date.year, (last.date.month - 1), last.date.day, last.date.hour, last.date.minute));
            const drawDate = drawDateWrapper.format('D.MM.YYYY');
            return (
                <div className="results">
                    <LatestResultsHeader lastDate={last.date} />
                    <WinningNumbers numbers={last.numbers} 
                                    euroNumbers={last.euroNumbers} />
                    <div className="results-odds">
                        <div className="results-odds-table">
                            <OddsTable odds={last.odds} />
                        </div>
                        <div className="results-odds-pods">
                            <Pod>
                                <h2>The EuroJackpot numbers for {drawDate}</h2>
                                <p>The {last.nr}th draw for the EuroJackpot was held on {drawDate}, as usual at {drawDateWrapper.format('ha')} in Helsinki.</p>
                            </Pod>
                            <Pod>
                                <h2>EuroJackpot numbers for {drawDate}</h2>
                                <p>The balls used for the draw are made of a synthetic polymer, softer than ping-pong balls. The results are broadcast after the draw, with the draw-machines independently checked by the VTT Technical Research Center of Finland.</p>
                                <p>Lottoland published the draw results immediately after the draw on {drawDate}.</p>
                            </Pod>
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