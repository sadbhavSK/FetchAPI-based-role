import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate(`/${role}`);
  };

  return (
    <div>
      <h2>Select Role</h2>

      <button onClick={() => handleLogin("admin")}>Admin</button>
      <button onClick={() => handleLogin("manager")}>Manager</button>
      <button onClick={() => handleLogin("user")}>User</button>

    </div>
  );
}

export default Login;