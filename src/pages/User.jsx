import { useEffect, useState } from "react";

function User() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>

      {user && (
        <p>
          {user.firstName} - {user.email}
        </p>
      )}

    </div>
  );
}

export default User;