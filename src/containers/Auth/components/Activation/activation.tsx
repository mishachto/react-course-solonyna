import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { authorActions } from "../../store/actions";
import { useDispatch } from "react-redux";
import { authActionTypes } from "@containers/*";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const Activation = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={async (values) => {
        dispatch(authorActions.ACCOUNT_ACTIVATION.REQUEST(values));
      }}
      validationSchema={SignupSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" type="text" placeholder="First name " />
          {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
          <Field name="lastName" type="text" placeholder="Last name" />
          {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
          <Field name="password" type="password" placeholder="Password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <Field name="confirmPassword" type="password" placeholder="Confirm password" />
          {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Activation;
