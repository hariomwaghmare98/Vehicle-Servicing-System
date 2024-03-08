import { Routes,Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Footer from "./components/Footer/Footer";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import AdminLogin from "./components/Admin/AdminLogin";
import ServiceCenterLogin from "./components/Service/ServiceCentreLogin";
import ServiceAppointment from "./components/Service/ServiceAppointment";
import ServiceCentre from "./components/Service/ServiceCenter";
import VehicleServiceRow from "./components/Service/VehicleServiceRow";
import ViewAllAppointment from "./components/Service/ViewAllAppointment";
import ViewAllCustomer from "./components/Service/ViewAllCustomer";
import ViewAllServiceCenter from "./components/Service/ViewAllServiceCenter";
import Dashboard from "./components/Admin/Dashboard";

import './App.css';
import { PrivateRouteUser } from "./pages/PrivateRouteUser";
import { PrivateRoute } from "./pages/PrivateRoute";
import { PrivateRouteService } from "./pages/PrivateRouteService";
import ErrorPage from "./components/Error/ErrorPage";


function App() {
  return (
    <div>
     <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/privatecustomer" element={<PrivateRouteUser/>}>
              <Route index element={<ViewAllServiceCenter></ViewAllServiceCenter>}></Route>
            </Route>
            <Route path="/privateadmin" element={<PrivateRoute/>}>
              <Route index element={<Dashboard></Dashboard>}></Route>
            </Route>
            <Route path="/privateservice" element={<PrivateRouteService/>}>
              <Route index element={<ViewAllAppointment></ViewAllAppointment>}></Route>
            </Route>
            <Route path="/Aboutus" element={<Aboutus/>} />
            <Route path="/Contactus" element={<Contactus/>} />
            <Route path="/Registration" element={<Registration/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/AdminLogin" element={<AdminLogin/>} />
            <Route path="/ServiceCenterLogin" element={<ServiceCenterLogin/>} />

            <Route path="/ServiceAppointment" element={<ServiceAppointment/>} />
            <Route path="/ServiceCenter" element={<ServiceCentre/>} />
            <Route path="/VehicleServiceRow" element={<VehicleServiceRow/>} />
            {/* <Route path="/ViewAllAppointment" element={<ViewAllAppointment/>} /> */}
            <Route path="/ViewAllCustomer" element={<ViewAllCustomer/>} />
            <Route path="/ViewAllServiceCenter" element={<ViewAllServiceCenter/>} />
            <Route path="*" element={<ErrorPage/>} />
            {/* <Route path="/Dashboard" element={<Dashboard/>} /> */}
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
