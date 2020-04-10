import React, { useState } from 'react'

function ContactList() {

    const [subs, setSubs] = useState([])

    const url = "http://localhost:9000/contact/list"

    fetch(url, {
        method: 'GET'
    })
        .then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }
            return response.json()
        })
        .then(function (data) {
            setSubs(data)
        })
        .catch(err => {
            console.log('caught it!', err)
        })

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Subject</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {subs.map(sub =>
                        <tr key={sub.id}>
                            <td>{sub.Name}</td>
                            <td>{sub.Email}</td>
                            <td>{sub.Phone}</td>
                            <td>{sub.Subject}</td>
                            <td>{sub.Message}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ContactList