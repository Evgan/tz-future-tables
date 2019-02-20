import React, { Component } from 'react'
import GetData from '../components/GetData'
import { getData } from '../actions/dataActions'
import { connect } from 'react-redux'

class GetDataContainer extends Component {
  render() {
    const { urlsGetData, errorLoadData, statusLoadData, getData } = this.props
    return (
      <GetData
        urlsGetData={urlsGetData}
        getData={getData}
        errorLoadData={errorLoadData}
        statusLoadData={statusLoadData}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    urlsGetData: store.getData.urlsGetData,
    errorLoadData: store.getData.errorLoadData,
    statusLoadData: store.preloader_my.status,
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
