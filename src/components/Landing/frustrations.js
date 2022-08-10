import React from 'react';

import PropTypes from 'prop-types';

import './frustrations.css';

const Frustrations = (props) => {
    return (
        <div className="frustrations-frustrations">
            <h1 className="frustrations-text heading2">{props.heading}</h1>
            <div className="frustrations-stats">
                <div className="frustrations-stat">
                    <h1 className="frustrations-text01">
                        <span className="frustrations-text02">32%</span>
                    </h1>
                    <span className="frustrations-text03">{props.text}</span>
                </div>
                <div className="frustrations-stat1">
                    <h1 className="frustrations-text04">
                        <span className="frustrations-text05">30%</span>
                    </h1>
                    <span className="frustrations-text06">{props.text1}</span>
                </div>
                <div className="frustrations-stat2">
                    <h1 className="frustrations-text07">
                        <span className="frustrations-text08">30%</span>
                    </h1>
                    <span className="frustrations-text09">
                        <span>The number of ads I see</span>
                        <br></br>
                        <span></span>
                    </span>
                </div>
            </div>
        </div>
    );
};

Frustrations.defaultProps = {
    heading: 'Top frustrations with Social Networks',
    text: 'Bullying and discriminatory behavior',
    text1: 'The lack of actual human connection',
};

Frustrations.propTypes = {
    heading: PropTypes.string,
    text: PropTypes.string,
    text1: PropTypes.string,
};

export default Frustrations;
