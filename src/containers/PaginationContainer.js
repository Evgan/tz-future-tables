import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePage } from '../actions/tableActions'
import Pagination from '../components/Pagination'

class PaginationContainer extends Component {
  render() {
    const { total, current, visiblePage } = this.props.pager
    return (
      <Pagination
        onChangePage={this.props.changePage}
        totalPages={total}
        currentPage={current}
        visiblePage={visiblePage}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    pager: store.dataBody.pager,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changePage: e => dispatch(changePage(e)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer)
