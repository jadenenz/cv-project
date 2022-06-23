import React, {Component} from "react"
import PropTypes from 'prop-types';

class GeneralInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            fullName: '',
            email: '',
            phone: '',
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
        const generalDisplay = (
            <div className="general--display">
                <p>Full name: {this.state.fullName}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone Number: {this.state.phone}</p>
            </div>
        )

        return (
            <div>
                {this.props.edit && <form className="general--form">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        onChange={this.handleChange}
                        value={this.state.fullName}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={this.handleChange}
                        value={this.state.phone}
                    />
                </form>}
                {(this.props.edit === false) && generalDisplay}
            </div>
        )
    }
}

GeneralInfo.propTypes = { edit: PropTypes.bool }


export default GeneralInfo