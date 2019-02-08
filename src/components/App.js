import React, { Component } from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import GetDataContainer from '../containers/GetDataContainer'

class App extends Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
  }

  getComponents = () => {
    if (this.props.data.length > 0) {
      return <div>Данные есть</div>
    } else {
      return <GetDataContainer />
    }
  }

  render() {
    return <div>{this.getComponents()}</div>
  }
}

export default App
