import React from "react";
import Button from "../Shared/Button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";

const Login = () => {
  const {handleSignInWithPopUp,user}=useAuth();
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  return (
    <div>
      <div className="w-11/12 mx-auto my-5">
        <div className="text-center p-2 mb-5 ">
          <h1 className="text-3xl lg:text-5xl p-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-violet-700">
            Login now!
          </h1>
        </div>
        <div className="p-4 lg:p-8 rounded-xl max-w-md mx-auto shadow-2xl bg-green-200">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered rounded-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered rounded-full"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-4">
            <Button type={"submit"} value={"LOGIN"}></Button>
          </div>
          <div className="mt-4">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link className="" to={"/register"}>
                Register Now
              </Link>
            </p>
          </div> 
          <div className="divider">OR</div>
            <div  onClick={()=>handleSignInWithPopUp('google',from,navigate)} className="max-w-md mx-auto my-2">
              <Button type={"submit"} value={"Continue With Google"}></Button>
            </div>
          <div className="flex flex-col gap-y-5">
            <Button type={"submit"} value={"Continue With Facebook"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
