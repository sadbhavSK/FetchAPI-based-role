import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import {Navigate} from "react-router-dom"
function ProtectedRoute({children, allowRole}){
    const {role} = useContext(AuthContext)

    if(!role){
        return <Navigate to = "/" />
    }
    if(role !== allowRole){
        return<Navigate to = "/"/>
    }
    return children
}
export default ProtectedRoute;