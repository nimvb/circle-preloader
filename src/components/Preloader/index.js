/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import styles from './styles'
class Preloader extends React.Component {
  render() {
    const { classes, visible, opacity } = this.props
    return (
      <div className={classes.preloaderContainer} style={{opacity: visible === false ? '0' : opacity, zIndex: visible === false ? '-9999' : '9999', transition: visible === false ? 'all .5s ease' : ''}}>
        <div>
          <div className={classes.outerBall} />
          <div className={classes.innerBall} />
        </div>
      </div>
    )
  }
}

Preloader.propTypes = {
  visible: PropTypes.bool,
  backgroundColor: PropTypes.string,
  opacity: PropTypes.string,
  shadowColor: PropTypes.string,
  outerColor: PropTypes.string,
  innerColor: PropTypes.string
}

Preloader.defaultProps = {
  visible: true,
  backgroundColor: 'rgb(0, 0, 0)',
  opacity: '1',
  shadowColor: '#2187e7',
  outerColor: 'rgb(0, 183, 229)',
  innerColor: 'rgb(0, 183, 229)'
}

export default injectSheet(styles)(Preloader)
