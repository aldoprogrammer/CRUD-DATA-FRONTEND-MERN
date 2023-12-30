import React, { useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([{
        Name: 'aldo ls', Email: 'aldobesma@gmail.com', age: '20'
    }]);
  return (
    <div className='d-flex vh-100 bg-primary
    justify-content-center align-items-center'>
       <div className='w-50 bg-white rounded p-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <tr>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.age}</td>
                                    <td><button>Edit</button><button>Delete</button></td>
                                </tr>
                            ) 
                        })
                    }
                </tbody>
            </table>
        </div> 
    </div>
  )
}

export default Users