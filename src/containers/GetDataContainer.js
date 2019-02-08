import React, { Component } from 'react'
import GetData from '../components/GetData'
import { getData } from '../actions/dataActions'
import { connect } from 'react-redux'

class GetDataContainer extends Component {
  render() {
    const { urlsGetData, getData } = this.props
    return <GetData urlsGetData={urlsGetData} getData={getData} />
  }
}

const mapStateToProps = store => {
  return {
    urlsGetData: store.getData.urlsGetData,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getData: e => dispatch(getData(e)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetDataContainer)
