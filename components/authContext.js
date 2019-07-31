import React from 'react'
import { node } from 'prop-types'
// import Cookie from 'js-cookie'

import { makePostRequest } from '../utils/makeRequest'
import { loginUrl } from '../constants/router'

const initialState = {
  roles: [],
  isLogin: false
}

const AuthContext = React.createContext(initialState)

function AuthProvider({ children }) {

  const login = async (username, password) => {
    const { status } = await makePostRequest(
      loginUrl,
      { username, password }
    )

    if (status === 200) {
      setState({ ...state, isLogin: true })
    }
  }

  const googleLogin = async data => {
    console.log('gooogle login', data)
    const { accessToken } = data
    if (accessToken) setState({ ...state, isLogin: true })
  }

  const facebookLogin = async data => {
    console.log('facebook login', data)
    const { accessToken } = data
    if (accessToken) setState({ ...state, isLogin: true })
  }

  const logout = () => {
    setState({ ...state, isLogin: false })
  }

  const [state, setState] = React.useState({
    ...initialState,
    login,
    logout,
    googleLogin,
    facebookLogin,
  })

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: node.isRequired,
}

export { AuthProvider }
export default AuthContext
