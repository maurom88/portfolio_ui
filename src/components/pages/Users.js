import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Users() {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password1, setPassword1] = useState()
    // const [password2, setPassword2] = useState()
    const history = useHistory() // allows use of history.push() for redirect after registration

    // Function to execute when the form is submitted
    function handleSubmit(event) {
        // Prevent default behaviour (page reload)
        event.preventDefault()

        const url = process.env.REACT_APP_API + "/users/signup"

        // Use fetch to post the content of the form to the url above
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, email, password1 })
        })
            .then(response => response.json())
            .then(response => response)
            //.then(history.push('/users/list')) // redirect to users list after registration

            .catch(error => console.log(error))
    }

    function handleFirstNameInput(event) {
        setFirstName(event.target.value)
    }

    function handleLastNameInput(event) {
        setLastName(event.target.value)
    }

    function handleEmailInput(event) {
        setEmail(event.target.value)
    }

    function handlePassword1Input(event) {
        setPassword1(event.target.value)
    }

    // function handlePassword2Input(event) {
    //     setPassword2(event.target.value)
    // }

    return (
        <form id="registrationForm" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input onChange={handleFirstNameInput} type="text" className="form-control" name="firstName" placeholder="John" required />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input onChange={handleLastNameInput} type="text" className="form-control" name="lastName" placeholder="Doe" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input onChange={handleEmailInput} type="email" className="form-control" name="email" placeholder="johndoe@example.ca" required />
            </div>

            <div className="form-group">
                <label htmlFor="password-1">Password</label>
                <input onChange={handlePassword1Input} type="password" className="form-control" name="password-1" placeholder="********" required />
            </div>
            {/* <div className="form-group">
                <label htmlFor="password-2">Repeat password</label>
                <input onChange={handlePassword2Input} type="password" className="form-control" name="password-2" placeholder="********" required />
            </div> */}
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>
    )
}

export default Users