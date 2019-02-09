import React, { Component } from 'react'
import TableBodyContainer from '../../containers/table/TableBodyContainer'
import TableHeaderContainer from '../../containers/table/TableHeaderContainer'
import '../../css/table.scss'
class Table extends Component {
  render() {
    console.log('RENDER Table.js')

    return (
      <table>
        <TableHeaderContainer />
        <TableBodyContainer />
      </table>
    )
  }
}
export default Table
