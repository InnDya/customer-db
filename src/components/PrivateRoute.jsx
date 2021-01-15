import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({component: Component, ...rest}) {
  // redirect to /login if token not found in localStorage
  // https://stackoverflow.com/questions/47476186/when-user-is-not-logged-in-redirect-to-login-reactjs
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}
