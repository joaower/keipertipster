import React, { useState } from 'react'

const AuthContext = React.createContext()

const AuthProvider = props => {
  const jwt = window.localStorage.getItem('jwt')
  const user = window.localStorage.getItem('username')
  const [auth, setAuth] = useState(jwt !== '' ? jwt : '')
  const [username, setUsername] = useState(user !== '' ? user : '')
  const login = () => {
    setTimeout(() => setAuth(true), 1000)
  }
  const logout = () => {
    setTimeout(() => setAuth(false), 1000)
    window.localStorage.clear()
  }
  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
        username,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
