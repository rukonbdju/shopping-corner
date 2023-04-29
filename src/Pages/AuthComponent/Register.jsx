import React from "react";
import Button from "../Shared/Button/Button";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";

const Register = () => {
    const firebase=useAuth()
    console.log(firebase);
  return (
    <div>
      <div className="w-11/12 mx-auto my-5">
        <div className="text-center p-2 mb-5 ">
          <h1 className="text-3xl lg:text-5xl p-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-violet-700">Create a new Account</h1>
        </div>
        <div className="p-4 lg:p-8 rounded-xl max-w-md mx-auto shadow-2xl bg-green-200">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="input input-bordered rounded-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="input input-bordered rounded-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered rounded-full"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-4">
            <Button type={"submit"} value={"REGISTER"}></Button>
          </div>
          <div className="mt-4">
            <p className="text-sm">Already have an account? <Link className="" to={'/login'}>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
