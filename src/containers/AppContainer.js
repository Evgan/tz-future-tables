import React, { Component } from 'react'
import { connect } from 'react-redux'
import App from '../components/App'

class AppContainer extends Component {
  render() {
    const { data, fullDataSelectRow } = this.props
    return <App data={data} fullDataSelectRow={fullDataSelectRow} />
  }
}

const mapStateToProps = store => {
  return {
    data: store.dataBody.data,
    fullDataSelectRow: store.dataBody.fullDataSelectRow,
  }
}

export default connect(mapStateToProps)(AppContainer)
