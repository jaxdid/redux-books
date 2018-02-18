import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectBook } from '../actions/index'


class BookList extends Component {
  renderList () {
    return this.props.books.map(book => {
      const { title } = book

      return (
        <li
          key={title}
          onClick={() => this.props.selectBook(book)}
          className={'list-group-item'}
        >
          {title}
        </li>)
    })
  }
  
  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// Takes in entirety of application state and returns what becomes props in BookList container
// Returns an object
// If application state changes, BookList container rerenders
function mapStateToProps ({ books }) {
  return {
    books
  }
}

// Anything returned from here ends up as props in BookList container
function mapDispatchToProps (dispatch) {
  // Whenever selectBook is called, the result should be passed to all our reducers
  return bindActionCreators({ selectBook }, dispatch)
}

// Promote BookList from component to container - it needs to know about
// this new dispatch method: selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)