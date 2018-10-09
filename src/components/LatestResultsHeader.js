import React from 'react';
import moment from 'moment';
import './LatestResultsHeader.css';

export default (props) => {
    const { year, month, day } = props.lastDate;
    const date = new Date(year, (month - 1), day);
    const dateWrapper = moment(date);
    return (
        <div className="latest-results-header">
            <span className="euro-jackpot-color">Eurojackpot</span> Results for {`${dateWrapper.format('dddd DD MMM YYYY')}`}
        </div>
    );
};