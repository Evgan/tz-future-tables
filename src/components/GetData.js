import React, { Component } from 'react'
import PropTypes from 'prop-types'
class GetData extends Component {
  constructor() {
    super()
    this.urlByType = {}
  }

  static propTypes = {
    urlsGetData: PropTypes.any.isRequired,
    getData: PropTypes.func.isRequired,
  }
  handleClick = e => {
    const type = e.target.getAttribute('itemID')
    this.props.getData({ type: type, url: this.urlByType[type] })
  }

  createButtons = e => {
    const { type, url } = e
    this.urlByType[type] = url
    return (
      <button key={type} onClick={this.handleClick} itemID={type}>
        {type}
      </button>
    )
  }
  render() {
    console.log('RENDER GetData.js')
    return <div>{this.props.urlsGetData.map(this.createButtons)}</div>
  }
}
export default GetData
