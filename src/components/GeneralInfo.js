import React, {Component} from "react"

class GeneralInfo extends Component {
    constructor(){
        super()

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
        return (
            <div>
                <form className="general--form">
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
                </form>
                <div className="general--display">

                </div>
            </div>
        )
    }
}



export default GeneralInfo