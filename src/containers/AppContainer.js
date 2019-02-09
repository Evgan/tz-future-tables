import React, { Component } from 'react'
import { connect } from 'react-redux'
import App from '../components/App'

class AppContainer extends Component {
  render() {
    const { data } = this.props
    return <App data={data} />
  }
}

const mapStateToProps = store => {
  return {
    data: store.dataBody.data,
  }
}

export default connect(mapStateToProps)(AppContainer)
