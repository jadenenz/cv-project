import React, {Component} from "react"

class GeneralInfo extends Component {
    constructor(){
        super()

        this.state = {
            data: '',
        }
    }

    render() {
        return (
            <div>
                <form className="general--form">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" />
                </form>
                <div className="general--display">
                    
                </div>
            </div>
        )
    }
}



export default GeneralInfo