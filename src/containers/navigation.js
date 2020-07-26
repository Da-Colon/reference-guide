import React, { Component } from 'react'
import '../assets/styles/layout/navigation.css'
import PythonNav from '../components/navigation/pythonNav'
import HtmlNav from '../components/navigation/htmlNav'

class Navigation extends Component {
  constructor(props){
    super(props)
    this.state = {
      showNav: true,
    }
  }
  render = () => (
    <>
    {this.state.showNav && (
      
      <div className="container-nav">
        <PythonNav />
        <HtmlNav />
      </div>
      
      
      
      )}
    </>
    )
  }

export default Navigation;
