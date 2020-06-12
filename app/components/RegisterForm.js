import React from 'react'


const RegisterForm = (props) => {
const {click}=props
  return (
    <form onSubmit={click}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}


export default RegisterForm;