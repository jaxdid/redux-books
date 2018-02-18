import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookList extends Component {
  // constructor (props) {
  //   super(props)

  //   this.state = {
  //     books: []
  //   }
  // }
  
  renderList () {
    return this.props.books.map(({ title }) => {
      return <li key={title} className={'list-group-item'}>{title}</li>
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

export default connect(mapStateToProps)(BookList)