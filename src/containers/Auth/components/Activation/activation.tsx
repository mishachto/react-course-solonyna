import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { authorActions } from "../../store/actions";
import { useDispatch } from "react-redux";
import { authActionTypes } from "@containers/*";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  first_name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  last_name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
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
        first_name: "",
        last_name: "",
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
          <Field name="first_name" type="text" placeholder="First name " />
          {errors.first_name && touched.first_name ? <div>{errors.first_name}</div> : null}
          <Field name="last_name" type="text" placeholder="Last name" />
          {errors.last_name && touched.last_name ? <div>{errors.last_name}</div> : null}
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
