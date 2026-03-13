import { useEffect, useState } from "react";

function Admin() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {users.map(user => (
        <div key={user.id}>
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Admin;