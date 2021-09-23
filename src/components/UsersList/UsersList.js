import axios from 'axios'
import React, { useEffect, useState, Fragment } from 'react'

const UsersList = () => {
  const [users, setUsers] = useState([]);

  const getData = () => {
    console.log('getting data');
    axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
      console.table(res.data)
      setUsers(res.data);
    })
  };

  const userItems = users.map((user) =>
    <Fragment>
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    </Fragment>
  );

  // getData();
  useEffect(() => {
    console.log('getting effect use');
    getData();
  });

  return (
    <div className="users-list">
      Users List page!
      <table>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
        {userItems}
      </table>
    </div>
  );
}

export default UsersList;
