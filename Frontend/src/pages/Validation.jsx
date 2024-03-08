

export default function Validation(formData){

    const error={}
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const nameCheck = /^[a-zA-Z]+$/;
    const stateCheck = /^[a-zA-Z]+$/;
    const cityCheck = /^[a-zA-Z]+$/;

    if(formData.email === "")
    {
        error.email = "Email is required";
    }
    else if(!emailCheck.test(formData.email))
    {
        error.email="Email format not match";
    }

    if(formData.password === "")
    {
        error.password="Password is required";
    }
    else if(!passwordCheck.test(formData.password))
    {
        error.password = "password contain minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character";
    }

    if(formData.name === "")
    {
        error.name = "Name is required";
    }
    else if(!nameCheck.test(formData.name))
    {
        error.name="Name contain only alphabates";
    }

    if(formData.state === "")
    {
        error.state = "State is required";
    }
    else if(!stateCheck.test(formData.state))
    {
        error.state="State format not match";
    }

    if(formData.city === "")
    {
        error.city = "City is required";
    }
    else if(!cityCheck.test(formData.city))
    {
        error.city="City format not match";
    }

    return error;

}