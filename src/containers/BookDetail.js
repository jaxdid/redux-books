import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render () {
    if (!this.props.activeBook) {
      return <div>Select a book to get started!</div>
    }
    
    return (
      <div style={{ display: 'inline-block', width: '66%' }}>
        <h3>Details for:</h3>
        <h1>{this.props.activeBook.title}</h1>
      </div>
    )
  }
}

function mapStateToProps ({ activeBook }) {
  return {
    activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)