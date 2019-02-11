import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/getData.scss'
class GetData extends Component {
  constructor() {
    super()
  }

  static propTypes = {
    urlsGetData: PropTypes.any.isRequired,
    getData: PropTypes.func.isRequired,
  }

  createButtons = e => {
    const { type, url } = e
    return (
      <button
        key={type}
        onClick={() => this.props.getData({ type: type, url: url })}
      >
        {type}
      </button>
    )
  }

  render() {
    console.log('RENDER GetData.js')
    return (
      <div className="getData">
        {this.props.urlsGetData.map(this.createButtons)}
      </div>
    )
  }
}
export default GetData
