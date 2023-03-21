import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          "Name can only contain Latin letters."
        )
        .required("Required"),
      lastName: Yup.string()
        .matches(
          /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          "Name can only contain Latin letters."
        )
        .required("Required"),
      password: Yup.string()
        .min(6, "Must be greater than 6")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      confirm_password: Yup.string()
        .min(6, "Must be greater than 6")
        .max(15, "Must be 15 characters or less")
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must Match"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values, actios) => {
      //   window.alert(JSON.stringify(values, null, 2));
      console.log(values);
      actios.resetForm();
    },
  });
  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h1 className="heading">Register</h1>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div>
            <input
              id="firstName"
              name="firstName"
              type="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              placeholder="First Name"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="errorMessage">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div>
            <input
              id="lastName"
              name="lastName"
              type="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              placeholder="Last Name"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="errorMessage">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="E-mail"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="errorMessage">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="errorMessage">{formik.errors.password}</div>
            ) : null}
          </div>
          <div>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirm_password}
              placeholder="Password"
            />
            {formik.touched.confirm_password &&
            formik.errors.confirm_password ? (
              <div className="errorMessage">
                {formik.errors.confirm_password}
              </div>
            ) : null}
          </div>
          <div>
            <button className="loginBtn" type="submit">
              Register
            </button>
          </div>
          <div className="signUpText">
            <p>Already Have an Account</p>
            <Link to="/login" className="registerLink">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
