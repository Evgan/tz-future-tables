import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableBody from '../../components/table/TableBody'
import { selectRow } from '../../actions/tableActions'

class TableBodyContainer extends Component {
  render() {
    const { dataBody } = this.props.dataBody
    return <TableBody dataBody={dataBody} selectRow={this.props.selectRow} />
  }
}

const mapStateToProps = store => {
  return {
    dataBody: store.dataBody,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    selectRow: e => dispatch(selectRow(e)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableBodyContainer)
