import { useEffect, useState } from "react";

function Manager() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  return (
    <div>
      <h1>Manager Dashboard</h1>

      {users.map(user => (
        <p key={user.id}>
          {user.firstName} - {user.email}
        </p>
      ))}

    </div>
  );
}

export default Manager;