import React, {Component} from "react"
import PropTypes from "prop-types"

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
        const educationalDisplay = (
            <div className="educational--display">
                <h2>Educational Background</h2>
                <p>School Name: {this.state.schoolName}</p>
                <p>Title of Study: {this.state.studyTitle}</p>
                <p>Period of Study: {this.state.dateStarted} - {this.state.completionDate}</p>
            </div>
        )
        return (
            <div>
                {this.props.edit && <form className="educational--form">
                    <h2>Educational Background</h2>
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
                </form>}
                {this.props.edit === false && educationalDisplay}
            </div>
        )
    }
}

Educational.propTypes = { edit: PropTypes.bool }


export default Educational