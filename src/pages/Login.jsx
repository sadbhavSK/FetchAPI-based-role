import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { useNavigate} from "react-router-dom"

function Login(){
    const {Login} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = (role) => {
        Login(role)
        navigate("/dashboard")
    }

    return(
        <div>
            <h2> Select role</h2>
            <button onClick={()=> handleLogin("admin")}>Admin</button>
            <button onClick={()=> handleLogin("manager")}>Manager</button>
            <button onClick={()=> handleLogin("user")}>User</button>
        </div>
    )
}
export default Login;