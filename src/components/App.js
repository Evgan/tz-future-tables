import React, { Component } from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import GetDataContainer from '../containers/GetDataContainer'
import PreloaderContainer from '../containers/PreloaderContainer'

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
    return (
      <div className="App">
        {' '}
        {this.getComponents()} <PreloaderContainer />
      </div>
    )
  }
}

export default App
