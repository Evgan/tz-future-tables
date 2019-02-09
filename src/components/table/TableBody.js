import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TableBody extends Component {
  static propTypes = {
    dataBody: PropTypes.array.isRequired,
  }

  render() {
    console.log('RENDER TableBody.js')

    //this.props.dataBody.map((itemRow, index) =>
    //console.log(itemRow)
    // element.map((item, i) => (
    //   <td key={i}>{item}</td>
    // ))
    //)

    return (
      <tbody>
        {this.props.dataBody.map((element, index) => (
          <tr key={index}>
            {element.map((item, i) => (
              <td key={i}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    )
  }
}
export default TableBody
