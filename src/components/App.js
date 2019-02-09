import React, { Component } from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import GetDataContainer from '../containers/GetDataContainer'
import PreloaderContainer from '../containers/PreloaderContainer'
import TableContainer from '../containers/table/TableContainer'

class App extends Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
  }

  // Есть подозрения что данный подход отпределения какие компоненты когда должны "вступать в бой" не совсем корректен
  getComponents = () => {
    if (this.props.data.length > 0) {
      return <TableContainer />
    } else {
      return <GetDataContainer />
    }
  }

  render() {
    console.log('RENDER App.js')

    return (
      <div className="App">
        {this.getComponents()}
        <PreloaderContainer />
      </div>
    )
  }
}

export default App
