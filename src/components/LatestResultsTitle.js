import React from 'react';
import moment from 'moment';

export default (props) => {
    const { year, month, day } = props.lastDate;
    const date = new Date(year, (month - 1), day,);
    const dateWrapper = moment(date);
    return (
        <p>
            <span>Eurojackpot</span> Results for {`${dateWrapper.format('dddd DD MMM YYYY')}`}
        </p>
    );
};