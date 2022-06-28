import React from "react"

function GeneralInfo(props) {
    const [data, setData] = React.useState(
        {
            fullName: '',
            email: '',
            phone: '',

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


    const generalDisplay = (
        <div className="general--display">
            <h2>General Information</h2>
            <p>Full name: {data.fullName}</p>
            <p>Email: {data.email}</p>
            <p>Phone Number: {data.phone}</p>
        </div>
    )
    
    return (
        <div>
            {props.edit && <form className="general--form">
                <h2>General Information</h2>
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    onChange={handleChange}
                    value={data.fullName}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                />
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={handleChange}
                    value={data.phone}
                />
            </form>}
            {(props.edit === false) && generalDisplay}
        </div>
    )
}




export default GeneralInfo

