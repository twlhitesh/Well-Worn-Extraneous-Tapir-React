import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  mainAction: 'Payment Processing',
  feature2Title: 'Blockchain Solutions',
  slogan: 'Efficient and Secure Transactions',
  feature1Title: 'Payment Processing',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1612795459707-1002f77720d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMzODU3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionDescription:
    'Explore the key features that set us apart in the fintech industry.',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1634097538301-5d5f8b09eb84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMzODU3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'Industry-Specific Solutions Image',
  feature3Title: 'Industry-Specific Solutions',
  secondaryAction: 'Blockchain Solutions',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1712571664162-602064e30014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODMzODU3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Payment Processing Image',
  sectionTitle: 'Our Features',
  feature1Description:
    'Our advanced payment processing solutions ensure seamless transactions for your business, providing a secure and efficient payment experience for your customers.',
  feature2ImageAlt: 'Blockchain Solutions Image',
  feature3Description:
    'Tailored fintech solutions designed for various industries to address specific challenges and optimize processes. Discover how our industry-specific solutions can drive growth and innovation for your business.',
  feature2Description:
    'Implement cutting-edge blockchain technology to enhance security, transparency, and efficiency in your financial operations. Explore our innovative blockchain solutions tailored to your specific needs.',
}

Features1.propTypes = {
  mainAction: PropTypes.string,
  feature2Title: PropTypes.string,
  slogan: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Description: PropTypes.string,
}

export default Features1
