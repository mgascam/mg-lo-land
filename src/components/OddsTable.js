import React from 'react';
import tiers from './tiers.json';
import './OddsTable.css';

function sortRanks(a, b) {
    // Extract the number of the rank
    // This regular exp mathes i.e. rank10 
    const regex = /rank([0-9]+)/;
    const left = parseInt(regex.exec(a[0])[1]); // first capturing groupt i.e. 10
    const right = parseInt(regex.exec(b[0])[1]);
    if (left < right) {
        return -1;
    }
    if (left > right) {
        return 1;
    }
    return 0;
}

function formatCurrency(currency){
    return currency.toLocaleString('en-US', {currency: 'EUR', style: 'currency'});
}

function createOdd(odd) {
    const { tier, match } = tiers[odd[0]];
    const { prize, winners } = odd[1];
    return (
        <tr key={odd[0]}>
            <td className="odd-column odd-column--small">{tier}</td>
            <td className="odd-column odd-column--big">{match}</td>
            <td className="odd-column odd-column--big">{winners.toLocaleString()}&times;</td>
            <td className="odd-column odd-column--big odd-column--no-wrap">{formatCurrency(prize / 100)}</td>
        </tr>
    )
}

export default ({odds}) => {
    const oddsList = Object.entries(odds)
        .sort(sortRanks)
        .filter(odd => odd[0] !== 'rank0')
        .map(createOdd);

    return (
        <table className="odds-table">
            <thead className="head">
                <tr>
                    <th>Tier</th>
                    <th>Match</th>
                    <th>Winners</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {oddsList}
            </tbody>
        </table>
    );
} 