import React from "react";
import { Formik } from "formik"; // import Formik from formik
import * as Yup from "yup"; // import Yup from yup
import { useNavigate } from "react-router-dom";
import half_picture from "../assets/img/login_page_half.png"
// create a schema for validation
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  function handleNavigate(values) {
    // Alert the input values of the form that we filled
    alert(values);
    // setTimeout for navigate from login page to home page
    setTimeout(() => {
      navigate("/");
    }, 0);
  }
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // call handleNavigate and pass input filed data
          handleNavigate(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="flex flex-wrap bg-gray-100">
            <img src={half_picture}></img>
            <div className=" ">
              <div className="ml-44 mt-44 bg-white p-10 rounded-md shadow-md">
                {/* Passing handleSubmit parameter to html form onSubmit property */}
                <form noValidate onSubmit={handleSubmit}>
                  <span className="font-semibold text-3xl text-blue-400 ">Login to Continue</span>
                  <br></br>
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter your email"
                    className="pt-2 pl-2 border-2 border-sky-200 mt-10 rounded-lg w-72 h-10 bg-white"
                    id="email"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="mt-2 text-sm text-red-500 ml-2">
                    {errors.email && touched.email && errors.email}
                  </p>
                  {/* input with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter your password"
                    className="pt-2 pl-2 border-2 border-sky-200 mt-5 rounded-lg w-72 h-10 bg-white"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="text-sm text-red-500 ml-2 mt-2">
                    {errors.password && touched.password && errors.password}
                  </p>
                  {/* Click on submit button to submit the form */}
                  <button type="submit" className="bg-purple-500 w-72 h-10 text-white text-semibold text-xl rounded-lg mt-5">Login</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;