import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../assets/styles/layout/cheatsheet.css'
import Python from '../components/python'

class Main extends Component {
  render() {
    return (
      <div className="container-main">
        <Route path="/python" component={Python} />
      </div>
    )
  }
}

export default Main
