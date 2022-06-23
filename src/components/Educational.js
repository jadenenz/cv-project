import React, {Component} from "react"

class Educational extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: '',
        }
    }

    render() {
        return (
            <div>
                <form className="educational--form">
                    <label htmlFor="schoolName">School Name</label>
                    <input type="text" id="schoolName" />
                    <label htmlFor="studyTitle">Title of Study</label>
                    <input type="text" id="studyTitle" />
                </form>
            </div>
        )
    }
}



export default Educational