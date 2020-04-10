import React, { useState } from 'react'

function UsersList() {
    const [users, setUsers] = useState([])

    const url = "http://localhost:9000/users/list"

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
            setUsers(data)
        })
        .catch(err => {
            console.log('caught it!', err)
        })

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <tr key={user.UserID}>
                            <td>{user.FirstName}</td>
                            <td>{user.LastName}</td>
                            <td>{user.Email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList