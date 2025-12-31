import React , {useState, useEffect}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as authLogin} from '..store/authSlice'
import Button from './Button'
import {useDispatch} from 'react-redux'
import Input from './Input'
import Logo from './Logo'
import authService from '../auth.service'
import { useForm } from 'react-hook-form'




function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState('')

  const Login = async(data) =>{
    setError("")
    try {
      
    } catch (err) {
      
    }
  }
  return (

    <div>Login</div>
  )
}

export default Login