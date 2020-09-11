import React, { useState } from 'react'
import { navigate } from '@reach/router'

const AuthContext = React.createContext()

const AuthProvider = props => {
  const jwt = window.localStorage.getItem('jwt')
  const user = window.localStorage.getItem('username')
  const [auth, setAuth] = useState(jwt !== '' ? jwt : '')
  const [username, setUsername] = useState(user !== '' ? user : '')
  const [role, setRole] = useState(false)
  const login = (username, jwt, role) => {

    window.localStorage.setItem('username', username)
    window.localStorage.setItem('jwt', jwt)
    if (role === 'privileged') {
      setRole(true)
      navigate('/spider/dashboard')
    } else {
      navigate('/')
    }
    setTimeout(() => setAuth(true), 1000)
  }
  const logout = () => {
    setTimeout(() => setAuth(false), 1000)
    window.localStorage.clear()
  }
  const handleRole = (r) => {
    setRole(r)
  }
  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
        username,
        role,
        handleRole
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
