import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { authorActions } from "../../../Auth/store/actions";
import { useDispatch } from "react-redux";
import { authActionTypes } from "@containers/*";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});

const SingUP = () => {
    const dispatch = useDispatch()
    return <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
            dispatch(authorActions.SIGN_UP.REQUEST(values.email))
        }}
        validationSchema={SignupSchema}
    >
        {({ errors, touched }) => (
            <Form>
                <Field name="email" type="email" placeholder="email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
};

export default SingUP;