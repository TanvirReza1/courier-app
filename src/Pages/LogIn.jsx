import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogIn from "../Auth/SocialLogIn";
import Swal from "sweetalert2";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logInUser } = useAuth();

  const handleLogIn = (data) => {
    console.log(data);
    logInUser(data.email, data.password)
      .then((result) => {
        console.log("THEN block running");

        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LogIn successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl text-center">Welcome Back</h1>
      <p className="text-center">Please LogIn</p>
      <form onSubmit={handleSubmit(handleLogIn)} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">email is required</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">password must be 6 character</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>
          New to Zap Shift{" "}
          <Link
            state={location.state}
            className="text-blue-500 underline"
            to="/register"
          >
            Register
          </Link>{" "}
        </p>
      </form>
      <SocialLogIn></SocialLogIn>
    </div>
  );
};

export default LogIn;
