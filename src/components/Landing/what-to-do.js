import React from 'react';

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import './what-to-do.css';

import Activity from '../../assets/playground_assets/activities-1100w.png';
import Request from '../../assets/playground_assets/16-request-6-e1653414754516-1100w.png';
import Volunteer from '../../assets/playground_assets/pastedimage-03w-1100w.png';

const WhatToDo = (props) => {
    return (
        <div className="what-to-do-what-do-do section-container">
            <motion.div
                className="what-to-do-presentation1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeIn', duration: 1 }}
            >
                <div className="what-to-do-text-container">
                    <div className="what-to-do-container">
                        <div className="what-to-do-container1">
                            <h1 className="what-to-do-text heading2">
                                <span>👋🏽 Offer and ask for help</span>
                            </h1>
                        </div>
                    </div>
                    <span className="what-to-do-text02">
                        <span>
                            Find help, swap skills and support your peers online
                            or locally. Experience the joy of helping someone
                            out, no strings attached.
                        </span>
                    </span>
                </div>
                <div className="what-to-do-image-container">
                    <img
                        alt={props.Image_alt}
                        src={Request}
                        loading="lazy"
                        className="what-to-do-image floating"
                    />
                </div>
            </motion.div>
            <motion.div
                className="what-to-do-presentation1mobile"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeIn', duration: 1 }}
            >
                <div className="what-to-do-text-container1">
                    <div className="what-to-do-container2">
                        <div className="what-to-do-container3">
                            <h1 className="what-to-do-text04 heading2">
                                <span>💯 Make an impact with your club</span>
                            </h1>
                        </div>
                    </div>
                    <span className="what-to-do-text06">
                        <span>
                            Create or join clubs to discuss, exchange and
                            organize activities with others that care. Tiramisu
                            clubs are easy to use and totally free!
                        </span>
                    </span>
                </div>
                <div className="what-to-do-image-container1">
                    <img
                        alt={props.Image_alt1}
                        src={Activity}
                        loading="lazy"
                        className="what-to-do-image1 floating"
                    />
                </div>
            </motion.div>
            <motion.div
                className="what-to-do-presentation2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeIn', duration: 1 }}
            >
                <div className="what-to-do-image-container2">
                    <img
                        alt={props.Image_alt2}
                        src={Activity}
                        loading="lazy"
                        className="what-to-do-image2 floating"
                    />
                </div>
                <div className="what-to-do-text-container2">
                    <div className="what-to-do-container4">
                        <div className="what-to-do-container5">
                            <h1 className="what-to-do-text08 heading2">
                                <span>💯 Make an impact with your club</span>
                            </h1>
                        </div>
                    </div>
                    <span className="what-to-do-text10">
                        <span>
                            Create or join clubs to discuss, exchange and
                            organize activities with others that care. Tiramisu
                            clubs are easy to use and totally free!
                        </span>
                    </span>
                </div>
            </motion.div>
            <motion.div
                className="what-to-do-presentation3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeIn', duration: 1 }}
            >
                <div className="what-to-do-text-container3">
                    <div className="what-to-do-container6">
                        <div className="what-to-do-container7">
                            <h1 className="what-to-do-text12 heading2">
                                <span>
                                    🙌🏽 Volunteer with verified organizations
                                </span>
                            </h1>
                        </div>
                    </div>
                    <span className="what-to-do-text14">
                        <span>
                            Help out great verified nonprofits and youth
                            organizations with your skills and time – and make a
                            positive impact around you.
                        </span>
                    </span>
                </div>
                <div className="what-to-do-image-container3">
                    <img
                        alt={props.Image_alt3}
                        src={Volunteer}
                        loading="lazy"
                        className="what-to-do-image3 floating"
                    />
                </div>
            </motion.div>
        </div>
    );
};

WhatToDo.defaultProps = {
    Image_src1:
        '../../assets/playground_assets/activities2%20%5B1%5D-1100w.png',
    Image_alt2: 'image',
    Image_alt3: 'image',
    Image_src2:
        '../../assets/playground_assets/activities2%20%5B1%5D-1100w.png',
    Image_alt: 'image',
    Image_src3: '../../assets/playground_assets/pastedimage-03w-1100w.png',
    Image_alt1: 'image',
    Image_src:
        '../../assets/playground_assets/16-request-6-e1653414754516-1100w.png',
};

WhatToDo.propTypes = {
    Image_src1: PropTypes.string,
    Image_alt2: PropTypes.string,
    Image_alt3: PropTypes.string,
    Image_src2: PropTypes.string,
    Image_alt: PropTypes.string,
    Image_src3: PropTypes.string,
    Image_alt1: PropTypes.string,
    Image_src: PropTypes.string,
};

export default WhatToDo;
