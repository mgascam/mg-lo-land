import React from 'react';
import './Pod.css';

export default (props) => {
    return (
        <section className="pod">
            {props.children}
        </section>
    );
}