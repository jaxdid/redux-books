import React, { Component } from 'react'
import '../App.css'
import BookList from '../containers/BookList'

class App extends Component {
  render () {
    return (
      <div className="App">
        <BookList />
      </div>
    )
  }
}

export default App
