import axios from 'axios'
import React, { useEffect, useState, Fragment, useRef } from 'react'

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const usersRef = useRef(null);

  const getData = () => {
    // console.log('getting data');
    axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
      console.table(res.data)
      usersRef.current = res.data;
      setUsers(res.data);
    })
  };

  const userItems = users.map((user) =>
    <Fragment key={user.id}>
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    </Fragment>
  );

  const orderByName = () => {
    console.log('will order by Name');
    let newUsers = [...users];
    newUsers.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    console.log('newUsers');
    console.log(newUsers);
    usersRef.current = newUsers;
    setUsers(newUsers);
  }

  useEffect(() => {
    if (users && users === usersRef.current) {
      return;
    }
    console.log('getting effect use');
    getData();
  });

  return (
    <div className="users-list">
      Users List page!
      <table>
        <thead>
          <tr>
            <th>
              Name
              <button onClick={orderByName}>Order</button>
            </th>
            <th>
              Username
            </th>
            <th>
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {userItems}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
