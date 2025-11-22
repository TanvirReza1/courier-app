import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogIn from "../Auth/SocialLogIn";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    console.log("after register", data, data.photo[0]);
    // the image
    const profileImg = data.photo[0];
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        // convert it into FormData
        const formData = new FormData();
        formData.append("image", profileImg);

        // Upload it to IMGBB
        const image_api_url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGEBB_KEY
        }`;
        axios.post(image_api_url, formData).then((res) => {
          // Get the URL from the response
          const imgURL = res.data.data.url;
          console.log("after image upload", imgURL);

          const userProfile = {
            displayName: data.name,
            photoURL: imgURL,
          };
          // Save it as the user's photoURL in Firebase
          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile updated successfully");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "register successfull",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl text-center">Welcome to Zap Shift</h1>
      <p className="text-center">Please Register</p>
      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="your name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">name is required</p>
          )}
          <label className="label">Image</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="your image"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">image is required</p>
          )}
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
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,}$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              password must be 6 character or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must contain atleast 1 letter and 1 number.
            </p>
          )}

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>
          Already have an account
          <Link
            state={location.state}
            className="text-blue-500 underline"
            to="/logIn"
          >
            LogIn
          </Link>
        </p>
      </form>
      <SocialLogIn></SocialLogIn>
    </div>
  );
};

export default Register;
