import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableHeader from '../../components/table/TableHeader'
import { sortTable } from '../../actions/tableActions'

class TableHeaderContainer extends Component {
  render() {
    const { tableColumns } = this.props.dataHeader
    return (
      <TableHeader
        tableColumns={tableColumns}
        sortTable={this.props.sortTable}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    dataHeader: store.dataTable,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    sortTable: e => dispatch(sortTable(e)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableHeaderContainer)
