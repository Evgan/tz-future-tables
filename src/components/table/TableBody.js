import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TableBody extends Component {
  static propTypes = {
    dataBody: PropTypes.array.isRequired,
    selectRow: PropTypes.func.isRequired,
  }

  render() {
    console.log('RENDER TableBody.js')

    return (
      <tbody>
        {this.props.dataBody.map((element, index) => (
          <tr
            key={index}
            className={element.slass}
            onClick={() =>
              this.props.selectRow({ idSelectRow: element.data[0] })
            }
          >
            {element.data.map((item, i) => (
              <td key={i}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    )
  }
}
export default TableBody
