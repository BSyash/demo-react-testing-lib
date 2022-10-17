import React from "react";
import { ErrorMessage, Formik } from "formik";
import axiosRequester from "../../../../Utils/API";
import * as Yup from "yup";
import "./RegistrationForm.scss";

const RegistrationForm = ({ employeeModalToggle }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    adharNumber: "",
    dob: "",
    gender: "",
    contactNumber: "",
    address: "",
    maritalStatus: "",
    designation: "",
    position: "",
    departmentName: "",
    vehicleNumber: "",
    degree: "",
    collegeName: "",
    passingYear: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name is  Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name is  Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    adharNumber: Yup.number().required("Adhar Number is Required"),
    dob: Yup.string().required("Date of Birth is Required"),
    gender: Yup.string().required("Gender is Required"),
    contactNumber: Yup.number()
      // .min(10, "Too Short!")
      // .max(10, "Too Long!")
      .required("Contact Number is Required"),
    address: Yup.string().required("Address is Required"),
    maritalStatus: Yup.string().required("Marital Status is Required"),
    designation: Yup.string().required("Designation is Required"),
    position: Yup.string().required("Position is Required"),
    departmentName: Yup.string().required("Department Name is Required"),
    vehicleNumber: Yup.string().required("Vehicle Number is Required"),
    degree: Yup.string().required("Degree is Required"),
    collegeName: Yup.string().required("Colloge Name is Required"),
    passingYear: Yup.string().required("Passing Year is Required"),
  });
  return (
    <div className="registration-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // console.log("values :: ", values);
          await axiosRequester.post("/employees", values).then((response) => {
            console.log(response);
            response.status === 201 && employeeModalToggle();
          });
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-controll-wrapper">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <div className="error-msg">
                <ErrorMessage name="firstName" />
              </div>
            </div>
            <div className="form-controll-wrapper">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              <div className="error-msg">
                <ErrorMessage name="lastName" />
              </div>
            </div>
            <div className="form-controll-wrapper">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className="error-msg">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="form-controll-wrapper">
              <label htmlFor="">Adhar Card Number</label>
              <input
                type="text"
                name="adharNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.adharNumber}
              />
              <div className="error-msg">
                <ErrorMessage name="adharNumber" />
              </div>
            </div>
            <div className="form-controll-wrapper">
              <label htmlFor="">Date Of Birth</label>
              <input
                type="date"
                name="dob"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dob}
              />
              <div className="error-msg">
                <ErrorMessage name="dob" />
              </div>
            </div>
            <div className="form-controll-wrapper">
              <label htmlFor="">Gender</label>
              <input
                type="text"
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
              />
              <div className="error-msg">
                <ErrorMessage name="gender" />
              </div>
              {/* <input
                type="checkbox"
                name="gender"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
              /> */}
            </div>
            <div className="form-controll-wrapper">
              <label htmlFor="">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contactNumber}
              />
              <div className="error-msg">
                <ErrorMessage name="contactNumber" />
              </div>
            </div>

            <div className="form-controll-wrapper">
              <label htmlFor="">Address</label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
              <div className="error-msg">
                <ErrorMessage name="address" />
              </div>
            </div>

            <div className="form-controll-wrapper">
              <label htmlFor="">Marital Status</label>
              <input
                type="text"
                name="maritalStatus"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.maritalStatus}
              />
              <div className="error-msg">
                <ErrorMessage name="maritalStatus" />
              </div>
            </div>

            <div className="form-controll-wrapper">
              <label htmlFor="">Designation</label>
              <input
                type="text"
                name="designation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.designation}
              />
              <div className="error-msg">
                <ErrorMessage name="designation" />
              </div>
            </div>

            <div className="form-controll-wrapper">
              <label htmlFor="">Position</label>
              <input
                type="text"
                name="position"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.position}
              />
              <div className="error-msg">
                <ErrorMessage name="position" />
              </div>
            </div>

            <div className="form-controll-wrapper">
              <label htmlFor="">Department Name</label>
              <input
                type="text"
                name="departmentName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.departmentName}
              />
              <div className="error-msg">
                <ErrorMessage name="departmentName" />
              </div>
            </div>

            <div className="form-controll-wrapper">
              <label htmlFor="">Vehicle Number</label>
              <input
                type="text"
                name="vehicleNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.vehicleNumber}
              />
              <div className="error-msg">
                <ErrorMessage name="vehicleNumber" />
              </div>
            </div>

            <div className="form-controll-wrapper">
              <label htmlFor="">degree</label>
              <input
                type="text"
                name="degree"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.degree}
              />
              <div className="error-msg">
                <ErrorMessage name="degree" />
              </div>
            </div>

            <div className="form-controll-wrapper">
              <label htmlFor="">College Name</label>
              <input
                type="text"
                name="collegeName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.collegeName}
              />
              <div className="error-msg">
                <ErrorMessage name="collegeName" />
              </div>
            </div>

            <div className="form-controll-wrapper">
              <label htmlFor="">Passing Year</label>
              <input
                type="text"
                name="passingYear"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passingYear}
              />
              <div className="error-msg">
                <ErrorMessage name="passingYear" />
              </div>
            </div>

            <button type="submit">Add</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
