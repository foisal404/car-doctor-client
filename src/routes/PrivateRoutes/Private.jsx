import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const Private = ({children}) => {
    const {user,loader}=useContext(AuthContext);
    if(loader){
        return  <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
}
    

export default Private;