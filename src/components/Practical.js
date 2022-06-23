import React, {Component} from "react"
import PropTypes from "prop-types"

class Practical extends Component {
    constructor(props){
        super(props)

        this.state = {
            companyName: '',
            positionTitle: '',
            mainTasks: '',
            dateStarted: '',
            dateEnded: '',
        }
    }

    handleChange = (event) => {
        this.setState(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        const practicalDisplay = (
            <div className="practicalDisplay">
                <h1>Practical Experience</h1>
                <p>Company Name: {this.state.companyName}</p>
                <p>Position Title: {this.state.positionTitle}</p>
                <p>Main tasks of job: {this.state.mainTasks}</p>
                <p>Period of employment: {this.state.dateStarted} - {this.state.dateEnded}</p>
            </div>
        )
        return (
            <div>
                {this.props.edit && <form className="practical--form">
                    <label htmlFor="companyName">Company Name</label>
                    <input 
                        type="text"
                        id="companyName"
                        name="companyName"
                        onChange={this.handleChange}
                        value={this.state.companyName}
                    />
                    <label htmlFor="positionTitle">Position Title</label>
                    <input
                        type="text"
                        id="positionTitle"
                        name="positionTitle"
                        onChange={this.handleChange}
                        value={this.state.positionTitle}
                        />
                    <label htmlFor="mainTasks">Main tasks of job</label>
                    <textarea
                        id="mainTasks"
                        name="mainTasks"
                        onChange={this.handleChange}
                        value={this.state.mainTasks}
                    />
                    <label htmlFor="dateStarted">Date started</label>
                    <input
                        type="text"
                        id="dateStarted"
                        name="dateStarted"
                        onChange={this.handleChange}
                        value={this.state.dateStarted}
                    />
                    <label htmlFor="dateEnded">Date ended</label>
                    <input
                        type="text"
                        id="dateEnded"
                        name="dateEnded"
                        onChange={this.handleChange}
                        value={this.state.dateEnded}
                    />
                </form>}
                {this.props.edit === false && practicalDisplay}
            </div>
        )
    }
}

Practical.propTypes = { edit: PropTypes.bool }

export default Practical