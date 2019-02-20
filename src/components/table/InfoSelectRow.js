import React, { Component } from 'react'
import PropTypes from 'prop-types'
class InfoSelectRow extends Component {
  static propTypes = {
    fullDataSelectRow: PropTypes.object.isRequired,
  }

  render() {
    const {
      firstName,
      lastName,
      description,
      address,
    } = this.props.fullDataSelectRow
    return (
      <div className="info-row">
        <div>
          Выбран пользователь <b>{firstName + ' ' + lastName}</b>
          <br />
          Описание:
          <br />
          <textarea readOnly={true} rows="4" cols="110" value={description} />
          <br />
          Адрес проживания: <b>{address.streetAddress}</b>
          <br />
          Город: <b>{address.city}</b>
          <br />
          Провинция/штат: <b>{address.state}</b>
          <br />
          Индекс: <b>{address.zip}</b>
        </div>
      </div>
    )
  }
}
export default InfoSelectRow
