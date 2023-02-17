import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigation = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e, field) => {
    setUser({
      ...user,
      [field]: e.target.value
    })
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(user);
    navigation("/")
  }

  return (
    <div>
      <h1>Iniciar sesión</h1>

      <form onSubmit={submit}>
        <div> 
          <label htmlFor="email">Correo</label>
          <input onChange={e => handleChange(e, 'email')} type="email" name='email' />
        </div>  
        <div>
          <label htmlFor="password">Password</label>
          <input onChange={e => handleChange(e, 'password')} type="password" name='password' />
        </div>  
        <div>
          <input type="submit" vale='Ingresar' />
        </div>  
      </form>
    </div>
  )
}

export default LoginPage