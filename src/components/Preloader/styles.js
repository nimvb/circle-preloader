
export default {

  preloaderContainer: {
    backgroundColor: props => props.backgroundColor,
    opacity: props => props.opacity,
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  outerBall: {
    backgroundColor: props => props.bg,
    border: props => `5px solid ${props.outerColor}`,
    borderTop: props => '5px solid rgba(0, 0, 0, 0)',
    borderLeft: props => '5px solid rgba(0, 0, 0, 0)',
    boxShadow: props => `0 0 35px ${props.shadowColor}`,
    opacity: props => `0.9`,
    borderRadius: '50px',
    width: '50px',
    height: '50px',
    margin: ['0', 'auto'],
    animation: 'spin .5s infinite linear'
  },

  innerBall: {
    backgroundColor: props => props.bg,
    border: props => `5px solid ${props.innerColor}`,
    borderTop: props => '5px solid rgba(0, 0, 0, 0)',
    borderLeft: props => '5px solid rgba(0, 0, 0, 0)',
    boxShadow: props => `0 0 15px ${props.shadowColor}`,
    opacity: props => `0.9`,
    borderRadius: '50px',
    width: '30px',
    height: '30px',
    margin: ['0', 'auto'],
    position: 'relative',
    top: '-50px',
    animation: 'spinoff .5s infinite linear'
  },

  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },

    '100%': {
      transform: 'rotate(360deg)'
    }

  },

  '@keyframes spinoff': {
    '0%': {
      transform: 'rotate(0deg)'
    },

    '100%': {
      transform: 'rotate(-360deg)'
    }

  }
}
