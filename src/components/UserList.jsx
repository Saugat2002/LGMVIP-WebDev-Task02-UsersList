// import React from 'react'
import { useState, useEffect } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(
        data => {
          if (data && data.data) {
            setUsers(data.data);
            console.log(data.data);
          }
        }
      )
      .catch(
        error => console.error('Error fetching data', error)
      )
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5 w-full">
        <h1 className="font-bold text-3xl">User List</h1>
        <ul className="w-full">
          {
            users.map(
              user => (
                <li key={user.id} className="flex items-center justify-between mx-5">
                  <UserCard id={user.id} email={user.email} firstName={user.first_name} lastName={user.last_name} avatar={user.avatar} />
                </li>
              )
            )
          }
        </ul>
      </div>
    </>
  )
}

export default UserList