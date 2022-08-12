import React from 'react'
import {
    Formik,
    Form,
    Field,
  } from 'formik'

import"./formFormik.scss"

  interface MyFormValues {
    name: string
    password: string
    email: string
    rol:string
  }

  const handleSubmitFetch = async(values:MyFormValues)=>{
       
    const requestOption ={
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(values),            
  }
   await fetch("http://localhost:4000/api/users",requestOption)
  .then(response => response.json())
}

const FormFormik = () => {
    const initialValues: MyFormValues = { name:"", password: "", email:"", rol:"USER_ROLE"};

    return (
      <div className="formFormik__wrapper">
        
        <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
           console.log({ values, actions });
          /*  alert(JSON.stringify(values, null, 2)); */ 
           handleSubmitFetch(values)
           actions.setSubmitting(false);
         }}
       >
          <Form className="formFormik__wrapper__form" >
            <h2>Register</h2>
            <label className="formFormik__wrapper__form__label" htmlFor="name">User name</label>
            <Field className="formFormik__wrapper__form__field" name="name" placeholder="add your user name" />
            <label className="formFormik__wrapper__form__label" htmlFor="password">Password</label>
            <Field className="formFormik__wrapper__form__field" name="password" placeholder="add a strog password" />
            <label className="formFormik__wrapper__form__label" htmlFor="email">Email</label>
            <Field className="formFormik__wrapper__form__field" name="email" placeholder="Email" />
            <button  className="formFormik__wrapper__form__button"type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
}

export default FormFormik