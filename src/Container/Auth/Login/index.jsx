import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputType from "../../Components/shared/InputType";
import { ImageProvider } from "../../Services/ImageProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";
import "./index.css";
import { useGlobalContext } from "../../context";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [showEyeIcon, setShowEyeIcon] = useState(false);
  const navigate = useNavigate();
  const { user, AuthDataHandler, getFormDataFromLocalStorage } =
    useGlobalContext();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Check if the field value is empty, then show the error
    if (value.trim() === "") {
      setErrors({
        ...errors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      });
    } else {
      // Clear the error if the field is not empty
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    // Basic validation - check for empty fields
    if (email.trim() === "") {
      newErrors = { ...newErrors, email: "Email is required" };
    }
    if (password.trim() === "") {
      newErrors = { ...newErrors, password: "Password is required" };
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const formDataFromLocalStorage = getFormDataFromLocalStorage();
      const authData = formDataFromLocalStorage.find(
        (curElm) => curElm.email === email
      );
      if (
        authData &&
        authData.name === "super admin" &&
        authData.password === password
      ) {
        AuthDataHandler(authData);
        toast.success("Login Successfull");
        navigate("/dashboard");
      } else if (
        authData &&
        authData.status === "active" &&
        authData.password === password
      ) {
        AuthDataHandler(authData);
        toast.success("Login Successfull");
        navigate("/");
      } else {
        toast.error("Invalid credentials");
      }
    }
  };

  return (
    <div className="loginWrapper">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-7 LoginImageSection p-0 m-0">
            <img
              src={ImageProvider.LoginImage}
              alt="LoginImage"
              height={"100%"}
              width={"100%"}
            />
            <div className="logo_data">
              <NavLink to={"/"}>
                <img
                  src={ImageProvider.WebLogo}
                  alt="loginlogo"
                  className="weblogologin"
                />
              </NavLink>
            </div>
          </div>
          <div className="col-md-5">
            <h5 className="mb-3">Welcome Back</h5>
            <h3>Login Form</h3>
            <Form onSubmit={handleSubmit}>
              <InputType
                controlId="basicEmail"
                error={errors.email}
                inputlable="Email address"
                inputtype="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onchange={handleInput}
              />
              {errors.email ? (
                <p className="text-danger">{errors.email} </p>
              ) : (
                ""
              )}
              <div className="password_field">
                <InputType
                  controlId="basicPasswords"
                  error={errors.password}
                  inputlable="Password"
                  inputtype="password"
                  showEyeIcon={showEyeIcon}
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onchange={handleInput}
                />
                <div className="eye_icon">
                  {!showEyeIcon ? (
                    <span
                      className="icons"
                      onClick={() => setShowEyeIcon(!showEyeIcon)}
                    >
                      <FaEyeSlash />
                    </span>
                  ) : (
                    <span
                      className="icons"
                      onClick={() => setShowEyeIcon(!showEyeIcon)}
                    >
                      <FaEye />
                    </span>
                  )}
                </div>
              </div>
              {errors.password ? (
                <p className="text-danger">{errors.password} </p>
              ) : (
                ""
              )}
              <button className="btn btn-success btn-sm">Login</button>
            </Form>
            <div className="d-flex justify-content-between mt-3">
              <span>Don't have an account?</span>
              <Link className="nav-link" to="/signup">
                Signup here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
