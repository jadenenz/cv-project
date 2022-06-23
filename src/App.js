import React, { Component } from "react"
import './styles/style.css'
import GeneralInfo from './components/GeneralInfo'
import Educational from './components/Educational'
import Practical from './components/Practical'


class App extends Component {
  constructor() {
    super();

    this.state = {
      edit: true,
    };

    this.toggleEdit = this.toggleEdit.bind(this)
  }
s
    toggleEdit() {
      this.setState({
        edit: !this.state.edit
      })
    }
  


  render(){
    return (
      <div>
        <GeneralInfo />
        <Educational />
        <Practical />
      </div>
    )
  }
}


export default App;
