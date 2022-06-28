import React from "react"

function Educational(props) {
    const [data, setData] = React.useState(
        {
            schoolName: '',
            studyTitle: '',
            dateStarted: '',
            completionDate: '',
        }
    )

    const handleChange = (event) => {
        setData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const educationalDisplay = (
                    <div className="educational--display">
                        <h2>Educational Background</h2>
                        <p>School Name: {data.schoolName}</p>
                        <p>Title of Study: {data.studyTitle}</p>
                        <p>Period of Study: {data.dateStarted} - {data.completionDate}</p>
                    </div>
                )
    return (
        <div>
            {props.edit && <form className="educational--form">
                <h2>Educational Background</h2>
                <label htmlFor="schoolName">School Name</label>
                <input
                    type="text"
                    id="schoolName"
                    name="schoolName"
                    onChange={handleChange}
                    value={data.schoolName}

                />
                <label htmlFor="studyTitle">Title of Study</label>
                <input
                    type="text"
                    id="studyTitle"
                    name="studyTitle"
                    onChange={handleChange}
                    value={data.studytitle}
                />
                <label htmlFor="dateSarted">Date Started</label>
                <input
                    type="text"
                    id="dateStarted"
                    name="dateStarted"
                    onChange={handleChange}
                    value={data.dateStarted}
                />
                <label htmlFor="completionDate">Completion Date</label>
                <input
                    type="text"
                    id="completionDate"
                    name="completionDate"
                    onChange={handleChange}
                    value={data.completionDate}
                />
            </form>}
            {props.edit === false && educationalDisplay}
        </div>
    )
}


export default Educational