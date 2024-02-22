import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

//import { emailPattern } from "../utils";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    
    setErrorMessage(""); // Reset error message when email changes
  };
  const FormValidation = () => {
    const errors = {};
    if (!emailPattern(email) ) {
      errors.email = "Invalid Email Address";
    }
    
    return errors;
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length>=8)
    {
    setErrorMessage(""); // Reset error message when password changes
    }
    else if(e.target.value<8 && e.target.value>0)
    {
      setErrorMessage("Password Should Be 8 Digit Long");
    }
    else if(e.target.value <= 0 || !password)
    {
      setErrorMessage("Password Can Not Be Empty");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = FormValidation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log(email,password)
   if ( (email =="Admin@gmail.com" || email == "admin@gmail.com") && password=="12345678" && Object.keys(validationErrors).length == 0) {
      // Clear any previous errors
      setErrors({});
      // Navigate to home page or perform login logic
      window.location.href = "/admin/dashboard"; // Replace '/home' with your home page route
    } else {
      setErrorMessage("Invalid Email Or Password. Please Try Again.");
    }
  };
   
  const emailPattern = (email) => {
    const trimmedEmail = email.trim(); // Remove leading and trailing spaces
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@0-9]{2,}$/;
    return trimmedEmail.match(emailPattern);
  };
  
  

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col mt-10 min-w-0 pt-2 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div classname= "w-full ">
                <h3 className="text-center text-2xl font-bold">Sign In</h3>
              </div>
              {/* <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/github.svg").default}
                    />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/google.svg").default}
                    />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div> */}
              <div className="flex-auto px-6 lg:px-10 py-10 pt-0">
                {/* <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div> */}
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    {/* <input
                      type="email"
                      
                      placeholder="Email"
                    /> */}
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      maxLength={70}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    {/* <input
                      type="password"
                      
                      placeholder="Password"
                    /> */}
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      maxLength={12}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                  </div>
                  <div>
                    {/* <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label> */}
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Sign In
                    </button>
                    
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              {/* <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
