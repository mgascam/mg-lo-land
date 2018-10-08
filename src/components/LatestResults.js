import React from 'react';
import moment from 'moment';

export default ({results}) => {
    if(!results) {
        return <p>No results yet!</p>
    } else {
        const { day, month, year} = results.last.date;
        const date = new Date(year, (month - 1), day,);
        const dateWrapper = moment(date);
        return (
            <p>
                <span>Eurojackpot</span> Results for {`${dateWrapper.format('dddd DD MMM YYYY')}`}
            </p>
        );
    }
};