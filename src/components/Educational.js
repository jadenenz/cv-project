import React, {Component} from "react"

class Educational extends Component {
    constructor(props){
        super(props)

        this.state = {
            schoolName: '',
            studyTitle: '',
            dateStarted: '',
            completionDate: '',
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
                <form className="educational--form">
                    <label htmlFor="schoolName">School Name</label>
                    <input
                        type="text"
                        id="schoolName"
                        name="schoolName"
                        onChange={this.handleChange}
                        value={this.state.schoolName}

                    />
                    <label htmlFor="studyTitle">Title of Study</label>
                    <input
                        type="text"
                        id="studyTitle"
                        name="studyTitle"
                        onChange={this.handleChange}
                        value={this.state.studytitle}
                    />
                    <label htmlFor="dateSarted">Date Started</label>
                    <input
                        type="text"
                        id="dateStarted"
                        name="dateStarted"
                        onChange={this.handleChange}
                        value={this.state.dateStarted}
                    />
                    <label htmlFor="completionDate">Completion Date</label>
                    <input
                        type="text"
                        id="completionDate"
                        name="completionDate"
                        onChange={this.handleChange}
                        value={this.state.completionDate}
                    />
                </form>
            </div>
        )
    }
}



export default Educational