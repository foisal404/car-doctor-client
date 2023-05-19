import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Private = ({children}) => {
    const {loader}=useContext(AuthContext);
    if(loader){
        return  <progress className="progress w-56"></progress>
    }
    return children;
}
    

export default Private;