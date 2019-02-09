import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'bem-cn'

//const cn = require('bem-cn')('table')

class TableHeader extends Component {
  static propTypes = {
    tableColumns: PropTypes.array.isRequired,
    sortTable: PropTypes.func.isRequired,
  }

  // onClick = (index, typeSort) => {
  //   this.props.sortTable({ index: index, typeSort: typeSort })
  // }

  render() {
    console.log('RENDER TableHeader.js')

    return (
      <thead>
        <tr>
          {/*{this.props.tableColumns.map((item, i) => (*/}
          {/*<th key={i}>{item.name}</th>*/}
          {/*))}*/}

          {this.props.tableColumns.map((element, index) => (
            <th
              key={index}
              className={cn('sorting')
                .state({
                  sortASC: element.sort === 'asc',
                  sortDESC: element.sort === 'des',
                })
                .mix('sorting-block text-nowrap')}
              onClick={() =>
                this.props.sortTable({
                  index: index,
                  name: element.name,
                  typeSort: element.sort,
                })
              }
            >
              {element.name}
            </th>
          ))}
        </tr>
      </thead>
    )
  }
}
export default TableHeader
