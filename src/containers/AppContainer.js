import React, { Component } from 'react'
import { connect } from 'react-redux'
import App from '../components/App'

class AppContainer extends Component {
  render() {
    const { data, pager, fullDataSelectRow } = this.props
    return (
      <App data={data} pager={pager} fullDataSelectRow={fullDataSelectRow} />
    )
  }
}

const mapStateToProps = store => {
  return {
    data: store.dataTable.data,
    fullDataSelectRow: store.dataTable.fullDataSelectRow,
    pager: store.dataTable.pager,
  }
}

export default connect(mapStateToProps)(AppContainer)
