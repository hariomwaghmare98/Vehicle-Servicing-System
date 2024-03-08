export const isLoggedInOwner = () => {
    let data = sessionStorage.getItem("adminId");
    if (data != null) return true;
    else return false;
  };
  export const isLoggedInUser = () => {
    let data = sessionStorage.getItem("customerId");
    if (data != null) return true;
    else return false;
  };
  export const isLoggedInHost = () => {
    let data = sessionStorage.getItem("host-id");
    if (data != null) return true;
    else return false;
  };
  export const isLoggedInService = () => {
    let data = sessionStorage.getItem("serviceId");
    if (data != null) return true;
    else return false;
  };