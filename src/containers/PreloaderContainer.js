import React, { Component } from 'react'
import { connect } from 'react-redux'
import Preloader from '../components/Preloader'
import { PRELOADER_SHOW } from '../reducers/preloader'

class PreloaderContainer extends Component {
  render() {
    return (
      <div>{this.props.status === PRELOADER_SHOW ? <Preloader /> : null}</div>
    )
  }
}

const mapStateToProps = store => {
  return {
    status: store.preloader_my.status,
  }
}

export default connect(mapStateToProps)(PreloaderContainer)
