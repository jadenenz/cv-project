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
    toggleEdit() {
      this.setState(prevState => {
        return {
          edit: !prevState.edit
        }
      })
    }
  


  render(){
    // console.log(`Testing this is the edit: ${this.state.edit}`)
    return (
      <div className="app-main">
        <h1>CV Generator</h1>
        <GeneralInfo edit={this.state.edit} />
        <Educational edit={this.state.edit} />
        <Practical edit={this.state.edit} />
        <button type="submit" onClick={this.toggleEdit}>{this.state.edit === true ? "Submit" : "Edit"}</button>
      </div>
    )
  }
}


export default App;
