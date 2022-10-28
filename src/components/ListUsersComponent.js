import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


import UserService from "../services/user.service";

const ListUsersComponent = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        getAllUsers();
    }, [])

    const getAllUsers = () => {
        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

   

    return (
     

        <div className = "container">
            <h2 className = "text-center"> List Users </h2>
           
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Id</th>
                <th> User Name</th>
                <th> email</th>
        
                    {/* <th> Actions </th> */}
                </thead>
                <tbody>
                    {
                        users.map(
                            users =>
                            <tr key = {users.id}> 
                                <td> {users.id} </td>
                           
                            <td>{users.username}</td>
                            <td>{users.email}</td>
                   
                               
                            </tr>
                        )
                        }
                </tbody>
            </table>
        </div>
        
        
    );
};


export default ListUsersComponent
