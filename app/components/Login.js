import React from 'react'
import { connect } from 'react-redux'
import { login, createUser } from '../redux/user'
import LocalLoginForm from './local-login-form'
import OauthLoginForm from './oauth-login-form'
import RegisterForm from './RegisterForm'

const Login = (props) => {
  const { handleSubmit, createMe, handleSubmitRegister } = props;

  return (
    <div className='h100 w100 flex column align-items-center justify-center'>
      <h1>Let's Loggin'!</h1>
      <div >
        <div >
          <LocalLoginForm handleSubmit={handleSubmit} />
          <OauthLoginForm />
          <p>Register new User</p>
          <RegisterForm click={handleSubmitRegister} />
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(login({ email, password }))
        .then(() => {
          ownProps.history.push('/submit_order')
        })
    },
    createMe: (user) => { createUser(user), event.preventDefault() },
    handleSubmitRegister(event) {
      console.log(event);
      event.preventDefault()
      // const data = {
      //   name: event.targer.name.value,
      //   email: event.targer.email.value,
      //   password: event.targer.password.value
      // }
      const name=event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      createUser({name,email,password});
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
