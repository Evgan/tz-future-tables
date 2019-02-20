import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/getData.scss'
import { PRELOADER_SHOW } from '../reducers/preloader'
class GetData extends Component {
  static propTypes = {
    urlsGetData: PropTypes.any.isRequired,
    getData: PropTypes.func.isRequired,
    statusLoadData: PropTypes.string.isRequired,
    errorLoadData: PropTypes.string.isRequired,
  }

  createButtons = e => {
    const { type, url } = e
    return (
      <button
        disabled={this.props.statusLoadData === PRELOADER_SHOW ? true : false}
        key={type}
        onClick={() => this.props.getData({ type: type, url: url })}
      >
        {type}
      </button>
    )
  }

  render() {
    return (
      <div className="getData">
        {this.props.urlsGetData.map(this.createButtons)}
        <br />
        {this.props.errorLoadData !== '' ? this.props.errorLoadData : null}
      </div>
    )
  }
}
export default GetData
