import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
          <p className="hero9-text1 thq-body-large">{props.content1}</p>
          <div className="hero9-actions">
            <button className="thq-button-filled hero9-button">
              <span className="hero9-text2 thq-body-small">
                {props.action1}
              </span>
            </button>
            <button className="thq-button-outline hero9-button1">
              <span className="hero9-text3 thq-body-small">
                {props.action2}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  heading1: 'Empowering Your Financial Future',
  image1Src:
    'https://images.unsplash.com/photo-1641931187702-3e159c41fead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMzODU3NHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: 'Innovative solutions for a seamless financial experience',
  action2: 'Get Started',
  action1: 'Learn More',
  image1Alt: 'Fintehser Hero Image',
}

Hero9.propTypes = {
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero9
