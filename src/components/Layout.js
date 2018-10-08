import React from 'react';
import './Layout.css';


export default (props) => {
    return (
        <div className='inner'>
            {props.children}
        </div>
    )
}