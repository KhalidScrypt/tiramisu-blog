import React from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-hero section-container fadeIn">
      <div className="hero-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="lazy"
          className="hero-image floating"
        />
        <div className="hero-heading-container">
          <div className="hero-container1">
            <div className="hero-container2">
              <h1 className="hero-text heading1">
                <span>
                  Meet people who
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="hero-text2">care</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>as much as you do</span>
              </h1>
            </div>
          </div>
          <span className="hero-text6">
            <span>
              Tiramisu is a social network built around kindness and wellbeing,
              where you can meet new friends, organize activities with your
              clubs and communities, and volunteer with verified nonprofits.
            </span>
          </span>
          <div className="hero-container3">
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className="hero-image1"
            />
            <img
              alt={props.image_alt4}
              src={props.image_src4}
              className="hero-image2"
            />
          </div>
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            loading="lazy"
            className="hero-image3 floating"
          />
        </div>
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          loading="lazy"
          className="hero-image4 floating"
        />
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image_src4: '/playground_assets/android-200h.png',
  image_src1: '/playground_assets/hero11-400w.png',
  image_src3: '/playground_assets/appstore-200h.png',
  image_alt4: 'image',
  image_alt3: 'image',
  image_alt1: 'image',
  image_src: '/playground_assets/hero21-400w.png',
  image_src2: '/playground_assets/hero3-700w.png',
  image_alt: 'image',
  image_alt2: 'image',
}

Hero.propTypes = {
  image_src4: PropTypes.string,
  image_src1: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt4: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt2: PropTypes.string,
}

export default Hero
