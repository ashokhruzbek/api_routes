import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import { Outlet } from "react-router-dom";
function Users() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setUsers(res.data);
      }).catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <div className="user-container">
      {users?.map((user) => {
        {
          return (
            <UserCard
              id={user.id}
              ism={user.name}
              mail={user.email}
              city={user.address.city}
            />)
          }
        })}
    </div>
  );
}
export default Users;
