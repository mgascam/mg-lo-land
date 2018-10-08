import React from 'react';
import './WinningNumbers.css';

export default (props) => {
    const numbers = props.numbers.sort().map((number, i) =>
            <li key={`number-${i}`} className="item">{number}</li>
    );
    const euroNumbers = props.euroNumbers.sort().map((number, i) =>
    <li key={`euro-number-${i}`} className="item item--euro">{number}</li>
    );  
    return (
        <div>
            <ul className="winning-numbers">
                {numbers.concat(euroNumbers)}
            </ul>
        </div>
    )
};