import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableBody from '../../components/table/TableBody'

class TableBodyContainer extends Component {
  render() {
    const { dataBody } = this.props.dataBody
    return <TableBody dataBody={dataBody} />
  }
}

const mapStateToProps = store => {
  return {
    dataBody: store.dataBody,
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     getData: e => dispatch(getData(e)),
//   }
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(TableBodyContainer)
