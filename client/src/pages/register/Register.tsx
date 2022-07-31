import React from 'react'
import Nav from '../../components/nav'
import RegisterForm from '../../components/registerForm'
import  Footer from "../../components/footer"
import Pokemon from '../../components/pokemon/Pokemon'

const Register = () => {
  return (
    <>
    <Nav/>
    <RegisterForm/>
    <Pokemon/>
    <Footer/>
</>
  )
}

export default Register