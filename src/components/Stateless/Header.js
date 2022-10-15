import React from 'react'

const Header = () => {
  return (
    <>
    <CenteredLogo/>
    <SplashPageHeader/>
    <NavigationBar/>
    </>
  )
}

export default Header

// ---------component variations 
const CenteredLogo = () => {
  return (
    <div>Centered logo
            <img alt='logo'></img>
    </div>
  )
}

const SplashPageHeader = () => {
    return (
      <div>
            <a href='/'>Link to splash</a>
            <button>Sign in</button>
            <button>Sign up free</button>
      </div>
    )
  }

  const NavigationBar = () => {
    return (
      <nav>
            <a href='/'>Route</a>
            <a href='/'>Route</a>
            <a href='/'>Route</a>
            <a href='/'>Route</a>
      </nav>
    )
  }