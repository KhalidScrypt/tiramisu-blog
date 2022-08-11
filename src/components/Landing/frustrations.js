import React from 'react';

import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

import './frustrations.css';

const Frustrations = (props) => {
    const percentage1 = 32;
    const percentage2 = 30;

    return (
        <motion.div
            className="frustrations-frustrations"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ ease: 'easeIn', duration: 1 }}
        >
            <h1 className="frustrations-text heading2">{props.heading}</h1>
            <div className="frustrations-stats">
                <div className="frustrations-stat">
                    <CircularProgressbar
                        value={percentage2}
                        text={`${percentage1}%`}
                        strokeWidth="5"
                        styles={buildStyles({
                            pathColor: '#93165d',
                            textColor: '#93165d',
                        })}
                    />
                    <span className="frustrations-text03">{props.text}</span>
                </div>
                <div className="frustrations-stat1">
                    <CircularProgressbar
                        value={percentage2}
                        text={`${percentage2}%`}
                        strokeWidth="5"
                        styles={buildStyles({
                            pathColor: '#93165d',
                            textColor: '#93165d',
                            pathTransitionDuration: 2,
                        })}
                    />

                    <span className="frustrations-text06">{props.text1}</span>
                </div>
                <div className="frustrations-stat2">
                    <CircularProgressbar
                        value={percentage2}
                        text={`${percentage2}%`}
                        strokeWidth="5"
                        styles={buildStyles({
                            pathColor: '#93165d',
                            textColor: '#93165d',
                        })}
                    />
                    <span className="frustrations-text09">
                        <span>The number of ads I see</span>
                        <br></br>
                        <span></span>
                    </span>
                </div>
            </div>
        </motion.div>
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
