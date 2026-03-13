import { useEffect, useState } from "react";

function Admin(){
    const [users, setUsers] = useState();
    useEffect(() =>{
        fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(data => setUsers(data.users))
    }, [])

    return(
        <div> 
            <h1>Admin DashBoard</h1>
            {users.map(user =>{
                <p key = {user.id}>{user.firstName}</p>
            })}
        </div>
    )
}
export default Admin;