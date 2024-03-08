import { Navigate, Outlet } from "react-router-dom";
import { isLoggedInService } from "./Authentication";

export function PrivateRouteService(){

  if(isLoggedInService()){
    return <Outlet></Outlet>
  }else{
    return <Navigate to="/"></Navigate>
  }
}