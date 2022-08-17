import React from 'react';

import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';

import './frustrations.css';

const Frustrations = (props) => {
    return (
        <motion.div
            className="frustrations-frustrations"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeIn', duration: 1 }}
        >
            <h1 className="frustrations-text heading2">{props.heading}</h1>
            <div className="frustrations-stats">
                <div className="frustrations-stat">
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const pcValue = isVisible ? 32 : 0;
                            return (
                                <CircularProgressbar
                                    className="circle-stats"
                                    value={pcValue}
                                    text={`${pcValue}%`}
                                    strokeWidth="5"
                                    styles={buildStyles({
                                        pathColor: '#93165d',
                                        textColor: '#93165d',
                                        pathTransitionDuration: 2,
                                    })}
                                />
                            );
                        }}
                    </VisibilitySensor>

                    <span className="frustrations-text03">{props.text}</span>
                </div>
                <div className="frustrations-stat1">
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const pcValue = isVisible ? 30 : 0;
                            return (
                                <CircularProgressbar
                                    className="circle-stats"
                                    value={pcValue}
                                    text={`${pcValue}%`}
                                    strokeWidth="5"
                                    styles={buildStyles({
                                        pathColor: '#93165d',
                                        textColor: '#93165d',
                                        pathTransitionDuration: 1.6,
                                    })}
                                />
                            );
                        }}
                    </VisibilitySensor>

                    <span className="frustrations-text06">{props.text1}</span>
                </div>
                <div className="frustrations-stat2">
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const pcValue = isVisible ? 30 : 0;
                            return (
                                <CircularProgressbar
                                    className="circle-stats"
                                    value={pcValue}
                                    text={`${pcValue}%`}
                                    strokeWidth="5"
                                    styles={buildStyles({
                                        pathColor: '#93165d',
                                        textColor: '#93165d',
                                        pathTransitionDuration: 1.3,
                                    })}
                                />
                            );
                        }}
                    </VisibilitySensor>
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
