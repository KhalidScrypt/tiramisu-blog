import React from 'react';

import PropTypes from 'prop-types';

import './why-tiramisu.css';

const WhyTiramisu = (props) => {
    return (
        <div className="why-tiramisu-why-tiramisu">
            <h1 className="why-tiramisu-text heading2">
                <span>Why Tiramisu?</span>
            </h1>
            <div className="why-tiramisu-why section-container">
                <div className="why-tiramisu-presentation1 fadeIn">
                    <div className="why-tiramisu-text-container">
                        <div className="why-tiramisu-reason-1">
                            <h1 className="why-tiramisu-text02">
                                <span className="why-tiramisu-text03">
                                    💗
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <span className="why-tiramisu-text04">
                                    Kindness
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <span className="why-tiramisu-text05">
                                    first
                                </span>
                                <span className="why-tiramisu-text06"></span>
                                <span className="why-tiramisu-text07"></span>
                            </h1>
                            <span className="why-tiramisu-text08">
                                {props.text}
                            </span>
                        </div>
                        <div className="why-tiramisu-reason-2">
                            <h1 className="why-tiramisu-text09">
                                <span className="why-tiramisu-text10">
                                    🙋🏽‍♀️ Real
                                </span>
                                <span className="why-tiramisu-text11">
                                    human interaction
                                </span>
                                <span className="why-tiramisu-text12"></span>
                                <span className="why-tiramisu-text13"></span>
                            </h1>
                            <span className="why-tiramisu-text14">
                                {props.text1}
                            </span>
                        </div>
                        <div className="why-tiramisu-reason-21">
                            <h1 className="why-tiramisu-text15">
                                <span className="why-tiramisu-text16">
                                    🚫 No
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <span className="why-tiramisu-text17">ads</span>
                                <span className="why-tiramisu-text18"></span>
                                <span className="why-tiramisu-text19"></span>
                            </h1>
                            <span className="why-tiramisu-text20">
                                {props.text11}
                            </span>
                        </div>
                    </div>
                    <div className="why-tiramisu-image-container">
                        <img
                            alt={props.Image_alt}
                            src={props.Image_src}
                            loading="lazy"
                            className="why-tiramisu-image floating"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

WhyTiramisu.defaultProps = {
    Image_src: '/playground_assets/videocall3-300w.png',
    Image_alt: 'image',
    text: 'Tiramisu respects your privacy and puts content moderation first.',
    text1: 'Instead of followers, we focus on real connection & support',
    text11: "We don't disturb you with ads - we let responsible brands reward you for your impact",
};

WhyTiramisu.propTypes = {
    Image_src: PropTypes.string,
    Image_alt: PropTypes.string,
    text: PropTypes.string,
    text1: PropTypes.string,
    text11: PropTypes.string,
};

export default WhyTiramisu;
