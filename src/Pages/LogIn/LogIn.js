import React, { useContext } from "react";
import loginimage from "../../assets/images/login/login.svg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { login, googlelogin } = useContext(AuthContext);
  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((err) => console.error(err));
  };

  return (
    <div className="hero my-10">
      <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-4/5" src={loginimage} alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handlelogin} className="card-body">
            <div>
              <p className="text-center font-bold text-2xl text-orange-600">
                LOG IN
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <p href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-orange-600 text-white">
                Login
              </button>
            </div>
            <div>
              <p className="text-center text-sm my-5 font-semibold">
                Or Sign in With
              </p>
              <div className="flex justify-center">
                <Link>
                  <div className="p-2 bg-slate-100 rounded-full mx-1">
                    <FaFacebookF className="text-blue-900"></FaFacebookF>
                  </div>
                </Link>
                <Link>
                  <div className="p-2 bg-slate-100 rounded-full mx-1">
                    <FaLinkedinIn className="text-blue-700"></FaLinkedinIn>
                  </div>
                </Link>
                <Link>
                  <div
                    onClick={googlelogin}
                    className="p-2 bg-slate-100 rounded-full mx-1"
                  >
                    <FcGoogle></FcGoogle>
                  </div>
                </Link>
              </div>
              <p className="text-xs my-5 text-center">
                Don't Have an Account?{" "}
                <Link to="/signup">
                  <span className="text-orange-600 font-bold">Sign Up</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
