import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { authorActions } from "../../store/actions";
import { useDispatch } from "react-redux";
import { authActionTypes } from "@containers/*";


const Activation = () => {
    return <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
            
        }}
    >
        <Form>
            <Field name="name" type="text" />
            <Field name="password" type="email" />
            <button type="submit">Submit</button>
        </Form>
    </Formik>
};

export default Activation;