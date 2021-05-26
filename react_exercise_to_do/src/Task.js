import React from 'react'
import PropTypes from 'prop-types';

class Task extends React.Component {
  render() {
    return (<li>{this.props.value} [{this.props.status}]</li>)
  }
}

Task.propTypes = {
  value: PropTypes.string,
  status: PropTypes.string
}

export default Task