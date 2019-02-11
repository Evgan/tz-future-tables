import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableBody from '../../components/table/TableBody'
import { selectRow } from '../../actions/tableActions'

class TableBodyContainer extends Component {
  render() {
    const { dataBody } = this.props.dataTable
    return <TableBody dataBody={dataBody} selectRow={this.props.selectRow} />
  }
}

const mapStateToProps = store => {
  return {
    dataTable: store.dataTable,
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
