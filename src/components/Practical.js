import React from "react"

function Practical(props){

    const [data, setData] = React.useState(
        {
            companyName: '',
            positionTitle: '',
            mainTasks: '',
            dateStarted: '',
            dateEnded: '',
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

    const practicalDisplay = (
                    <div className="practicalDisplay">
                        <h2>Practical Experience</h2>
                        <p>Company Name: {data.companyName}</p>
                        <p>Position Title: {data.positionTitle}</p>
                        <p>Main tasks of job: {data.mainTasks}</p>
                        <p>Period of employment: {data.dateStarted} - {data.dateEnded}</p>
                    </div>
                )
    return (
        <div>
            {props.edit && <form className="practical--form">
                <h2>Practical Experience</h2>
                <label htmlFor="companyName">Company Name</label>
                <input 
                    type="text"
                    id="companyName"
                    name="companyName"
                    onChange={handleChange}
                    value={data.companyName}
                />
                <label htmlFor="positionTitle">Position Title</label>
                <input
                    type="text"
                    id="positionTitle"
                    name="positionTitle"
                    onChange={handleChange}
                    value={data.positionTitle}
                    />
                <label htmlFor="mainTasks">Main tasks of job</label>
                <textarea
                    id="mainTasks"
                    name="mainTasks"
                    onChange={handleChange}
                    value={data.mainTasks}
                />
                <label htmlFor="dateStarted">Date started</label>
                <input
                    type="text"
                    id="dateStarted"
                    name="dateStarted"
                    onChange={handleChange}
                    value={data.dateStarted}
                />
                <label htmlFor="dateEnded">Date ended</label>
                <input
                    type="text"
                    id="dateEnded"
                    name="dateEnded"
                    onChange={handleChange}
                    value={data.dateEnded}
                />
            </form>}
            {props.edit === false && practicalDisplay}
        </div>
    )
}

export default Practical