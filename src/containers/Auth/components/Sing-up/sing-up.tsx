import React from "react";
import { Formik, Field, Form } from "formik";


const SingUP = () =>
    <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {

        }}
    >
        <Form>
            <Field name="email" type="email" />
            <button type="submit">Submit</button>
        </Form>
    </Formik>;

export default SingUP;