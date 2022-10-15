import React from 'react'

const Login = () => {
  return (
    <article>
        <form>
            <label for="username">Username: </label>
            <input type="text" id="username"/>
            <label for="password">Password: </label>
            <input type="password" id="username"/>
        </form>
        <button>Login</button>
        <div>
          <a href='/'>Create new account</a>
          <a href='/'>Forgot password?</a>
        </div>
    </article>
  )
}

export default Login