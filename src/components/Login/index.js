import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
    showDivLogin: true,
    showDivRegister: false,
    showErrorRegister: false,
    errorMsgRegister: 'Enter Correct Credentials',
    name: '',
    gender: 'male',
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updateName = event => {
    this.setState({name: event.target.value})
  }

  updateGender = event => {
    this.setState({gender: event.target.id})
  }

  changeDiv = () => {
    this.setState(i => ({
      showDivLogin: !i.showDivLogin,
      showDivRegister: !i.showDivRegister,
      username: '',
      password: '',
      name: '',
      gender: '',
    }))
  }

  SubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const LoginApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/bookHub')
    } else {
      this.setState({showError: true, errorMsg: data.error_msg})
    }
  }

  SubmitFormRegister = async event => {
    event.preventDefault()
    const {username, password, name, gender} = this.state
    const RegisterApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
      name,
      gender,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
    const response = await fetch(RegisterApiUrl, options)
    const data = await response.json()
    console.log(data)
    /*
    if (response.ok === true) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState({showError: true, errorMsg: data.error_msg})
    }
    */
  }

  ShowError = event => {
    event.preventDefault()
    this.setState({showError: true, errorMsg: 'Username or Password invalid'})
  }

  ShowErrorRegister = event => {
    event.preventDefault()
    this.setState({showErrorRegister: true})
  }

  render() {
    const {
      username,
      password,
      showError,
      errorMsg,
      showDivLogin,
      showDivRegister,
      errorMsgRegister,
      showErrorRegister,
      name,
      gender,
    } = this.state
    const token = Cookies.get('jwt_token')

    if (token !== undefined) {
      return <Redirect to="/bookHub" />
    }
    return (
      <div className="LoginRoute">
        <div className="LoginPageImageContainer">
          <img
            src="https://res.cloudinary.com/dub9ymu0j/image/upload/v1670662951/Rectangle_1467loginPageImage_em61aq.jpg"
            alt="login website logo"
            className="LoginPageImage"
          />
          <img
            src="https://res.cloudinary.com/dub9ymu0j/image/upload/v1670745169/Ellipse_99_xxxgdn.png"
            alt="login website logo"
            className="LoginPageImageMobile"
          />
        </div>
        <div className="LoginBoxContainer">
          <div className="LoginContainer">
            <div className="LogoContainerLogin">
              <img
                src="https://res.cloudinary.com/dub9ymu0j/image/upload/v1670662961/Group_7731bookHubLogo_uliueq.jpg"
                alt="website login"
                className="LoginImage"
              />
            </div>
            <div>
              <button
                type="button"
                onClick={this.changeDiv}
                className="loginRegisterButtonMobile"
              >
                {showDivLogin
                  ? 'New User ? Register here'
                  : 'Already Registered Login here'}
              </button>
              <form
                onSubmit={
                  username === '' || password === ''
                    ? this.ShowError
                    : this.SubmitForm
                }
                className={`FormContainerLogin ${
                  showDivLogin ? '' : 'hideLogin'
                }`}
                showDivLogin
              >
                <label htmlFor="username" className="FormLabelLogin">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  onChange={this.updateUsername}
                  placeholder="Enter username"
                  className="FormInputLogin"
                />
                <label htmlFor="password" className="FormLabelLogin">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  onChange={this.updatePassword}
                  placeholder="Enter Password"
                  className="FormInputLogin"
                />
                <button type="submit" className="LoginButton">
                  Login
                </button>
                <p className="red">{showError ? errorMsg : ''}</p>
              </form>

              <form
                onSubmit={
                  username === '' || password === '' || name === ''
                    ? this.ShowErrorRegister
                    : this.SubmitFormRegister
                }
                className={`FormContainerRegister ${
                  showDivRegister ? '' : 'hideRegister'
                }`}
                showDivRegister
              >
                <label htmlFor="username" className="FormLabelLogin">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  onChange={this.updateUsername}
                  placeholder="Enter username"
                  className="FormInputLogin"
                />
                <label htmlFor="password" className="FormLabelLogin">
                  Password
                </label>
                <input
                  id="password"
                  type="text"
                  onChange={this.updatePassword}
                  placeholder="Enter Password"
                  className="FormInputLogin"
                />
                <label htmlFor="name" className="FormLabelLogin">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  onChange={this.updateName}
                  placeholder="Enter Name"
                  value={name}
                  className="FormInputLogin"
                />
                <label htmlFor="gender" className="FormLabelLogin">
                  Gender
                  <input
                    type="radio"
                    className="gender"
                    id="male"
                    name="gender"
                    checked={gender === 'male'}
                    onClick={this.updateGender}
                  />
                  <label htmlFor="Male">Male</label>
                  <input
                    type="radio"
                    className="gender"
                    id="female"
                    name="gender"
                    onClick={this.updateGender}
                    checked={gender === 'female'}
                  />
                  <label htmlFor="Female">Female</label>
                </label>

                <button type="submit" className="LoginButton">
                  Register
                </button>
                <p className="red">
                  {showErrorRegister ? errorMsgRegister : ''}
                </p>
              </form>
              <button
                type="button"
                onClick={this.changeDiv}
                className="loginRegisterButton"
              >
                {showDivLogin
                  ? 'New User ? Register here'
                  : 'Already Registered Login here'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
