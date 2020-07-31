import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../assets/styles/layout/cheatsheet.css'
import Python from '../components/python'
import Home from '../components/home'
class Main extends Component {
  render() {
    return (
      <div className="container-main">
        <Route path="/" component={Home} exact />
        <Route path="/python" component={Python} exact />
      </div>
    )
  }
}

export default Main
