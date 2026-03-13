import Login from "./pages/Login"
import Admin from "./pages/Admin"
import User from "./pages/User"
import Manager from "./pages/Manager"
import { BrowserRouter, Routes, Route } from "react-router-dom"


import ProtectedRoute from "./components/ProtectedRoute"

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Login />}/>
            <Route
                path="/admin"
                element={
                    <ProtectedRoute allowRole= "admin">
                        <Admin />
                    </ProtectedRoute>
                }
                />

                <Route
                path="/manager"
                element={
                    <ProtectedRoute allowRole= "manager">
                        <Manager />
                    </ProtectedRoute>
                }
                />

                <Route
                path="/user"
                element={
                    <ProtectedRoute allowesRole= "user">
                        <User />
                    </ProtectedRoute>
                }
                />
            
        </Routes>
        </BrowserRouter>
    )
}
export default App();