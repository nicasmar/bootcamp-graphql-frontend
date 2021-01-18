/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import LOGIN from './graphql'


const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [login, { loading, error }] = useMutation(LOGIN, {
    variables: {
      email,
      password: pass,
    },
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/home')
    },
  })
  return (
    <div>
      <title>Welcome</title>
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </label>
      </form>
      <form>
        <label htmlFor="email">
          Password:
          <input
            type="password"
            name="password"
            onChange={e => setPass(e.target.value)}
            value={pass}
          />
        </label>
      </form>
      <button type="submit" onClick={login}>Submit</button>
    </div>
  )
}


export default Login
