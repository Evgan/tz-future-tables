import React, { Component } from 'react'
import { connect } from 'react-redux'
import InfoSelectRow from '../../components/table/InfoSelectRow'

class InfoSelectRowContainer extends Component {
  render() {
    const { fullDataSelectRow } = this.props
    return <InfoSelectRow fullDataSelectRow={fullDataSelectRow} />
  }
}

const mapStateToProps = store => {
  return {
    fullDataSelectRow: store.dataBody.fullDataSelectRow,
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     selectRow: e => dispatch(selectRow(e)),
//   }
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(InfoSelectRowContainer)
