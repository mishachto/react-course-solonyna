import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { authorActions } from "../../../Auth/store/actions";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is required"),
});

const SingIn = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        dispatch(authorActions.SIGN_IN.REQUEST(values));
      }}
      validationSchema={SignupSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="email" type="email" placeholder="email" />
          {errors.email && touched.email ? <span>{errors.email}</span> : null}
          <Field name="password" type="password" placeholder="Password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SingIn;
