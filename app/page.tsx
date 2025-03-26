'use client'
import Image from "next/image";
import styles from "./page.module.css";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import loaderimg from '../../assets/images/loder01.gif'

const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (data: { username: string; password: string }) => {
    window.location.href='/dashboard';
      // setLoading(true);
      // try {
      //     const response = await postRequest('/login', data); // :white_check_mark: Call API function
      //     if (response.status == 'success') {
      //         saveToken(response.admin.user_admin_token); // :white_check_mark: Save Token
      //         toast.success("Login successful!");
      //         setLoading(false);
      //         navigate("/dashboard");
      //     } else {
      //         toast.error(response.message);
      //         setLoading(false);
      //     }

      // } catch (error: any) {
      //     toast.error(error);
      //     setLoading(false);
      // } finally {
      //     setLoading(false);
      // }
  };
  return (
    <div className="auth-page-wrapper pt-5">
    <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
        <div className="bg-overlay"></div>
        <div className="shape">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1440 120"
            >
                <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
            </svg>
        </div>
    </div>
    <div className="auth-page-content">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5">
                    <div className="card mt-4">
                        <div className="card-body p-4">
                            <div className="text-center">
                            <img src="../images/logo.webp" alt="" height="45" className="mb-3" />
                                <h3 className="text-primary">Welcome Back !</h3>
                                <p className="text-muted">Sign in to continue to Uomox.</p>
                            </div>
                            <div className="p-2 mt-4">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input type="text" className={`form-control ${errors.username ? "is-invalid" : ""}`}  id="username" placeholder="Enter your email address" {...register("username")} />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <div className="position-relative auth-pass-inputgroup mb-3">
                                            <input type={showPassword ? "text" : "password"}  className={`form-control pe-5 password-input ${errors.password ? "is-invalid" : ""}`}   placeholder="Enter your password" id="password-input" {...register("password")} />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button className="btn btn-primary btn-lg w-100" type="submit" disabled={loading}>
                                            {loading ? (
                                                <img src="../../assets/images/loder01.gif" alt="Loading..." width="60" height="11" />
                                            ) : (
                                                "Sign In"
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</div>
  );
}
