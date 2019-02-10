import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/pagination.scss'

// Used to cancel events.
// var preventDefault = e => e.preventDefault()

export default class Pagination extends Component {
  static propTypes = {
    onChangePage: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    visiblePage: PropTypes.number.isRequired,
  }

  render() {
    console.log('RENDER Pagination.js')
    const { totalPages, currentPage, visiblePage, onChangePage } = this.props
    const buttons = []

    const diff = Math.floor(visiblePage / 2)
    var start = Math.max(currentPage - diff, 1)
    const end = Math.min(start + visiblePage - 1, totalPages)
    if (totalPages >= visiblePage && end >= totalPages) {
      start = totalPages - visiblePage + 1
    }
    for (let i = start; i <= end; i++) {
      const pi = 'p_' + i
      buttons.push(
        <button
          key={pi}
          className={i === currentPage ? 'active' : ''}
          onClick={() => onChangePage({ nextPage: i })}
        >
          {i}
        </button>
      )
    }

    if (totalPages > visiblePage) {
      if (currentPage > 1) {
        buttons.unshift(
          <button
            key="p_laquo"
            onClick={() => onChangePage({ nextPage: currentPage - 1 })}
          >
            &laquo;
          </button>
        )
      }
      if (currentPage < totalPages) {
        buttons.push(
          <button
            key="p_raquo"
            onClick={() => onChangePage({ nextPage: currentPage + 1 })}
          >
            &raquo;
          </button>
        )
      }
    }

    return <div className="pagination">{buttons}</div>
  }
}
