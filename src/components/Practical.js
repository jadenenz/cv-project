import React, {Component} from "react"

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
        return (
            <div>
                <form className="practical--form">
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
                </form>
            </div>
        )
    }
}



export default Practical