import React from 'react'
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik'
import"./formFormik.scss"

  interface MyFormValues {
    firstName: string;
    lastName: string;
    email: string;
    location: string;
  }

const FormFormik = () => {
    const initialValues: MyFormValues = { firstName: '' ,lastName: "", email:"",location:""};
    return (
      <div className="wrapper">
        
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          <Form className="wrapper__form" >
            <h2>Login</h2>
            <label className="wrapper__form__label" htmlFor="firstName">First Name</label>
            <Field className="wrapper__form__field" name="firstName" placeholder="First Name" />
            <label className="wrapper__form__label" htmlFor="lastName">Last Name</label>
            <Field className="wrapper__form__field" name="lastName" placeholder="Last Name" />
            <label className="wrapper__form__label" htmlFor="email">Email</label>
            <Field className="wrapper__form__field" name="email" placeholder="Email" />
            <label className="wrapper__form__label" htmlFor="location">Location</label>
            <Field className="wrapper__form__field"name="location" placeholder="location" />
            <button  className="wrapper__button"type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
}

export default FormFormik