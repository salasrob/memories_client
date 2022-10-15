import React from 'react'
import UserAccountForm from '../components/forms/UserAccountForm'

const UserAccountPage = () => {
  return (
    <section>
        <h1>My Account</h1>
        <p><em>Manage your account information, profile and billing details.</em></p>
        <UserAccountForm/>
    </section>
  )
}

export default UserAccountPage