import React, { Component } from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import GetDataContainer from '../containers/GetDataContainer'
import PreloaderContainer from '../containers/PreloaderContainer'
import TableContainer from '../containers/table/TableContainer'
import InfoSelectRowContainer from '../containers/table/InfoSelectRowContainer'
import PaginationContainer from '../containers/PaginationContainer'

class App extends Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
    fullDataSelectRow: PropTypes.object.isRequired,
    pager: PropTypes.object.isRequired,
  }

  // Есть подозрения что данный подход отпределения какие компоненты когда должны "вступать в бой" не совсем корректен
  getComponents = () => {
    if (this.props.data.length > 0) {
      return (
        <div>
          <TableContainer />
          {this.props.fullDataSelectRow.id ? <InfoSelectRowContainer /> : null}
          {this.props.pager.total > 1 ? <PaginationContainer /> : null}
        </div>
      )
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
