import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [role, setRole] = useState(null);

  const login = (userRole) => {
    setRole(userRole);
  };

  return (
    <AuthContext.Provider value={{ role, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;