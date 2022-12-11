import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', showError: false, errorMsg: ''}

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
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
      history.replace('/')
    } else {
      this.setState({showError: true, errorMsg: data.error_msg})
    }
  }

  ShowError = event => {
    event.preventDefault()
    this.setState({showError: true, errorMsg: 'Username or Password invalid'})
  }

  render() {
    const {username, password, showError, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
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
              <form
                onSubmit={
                  username === '' || password === ''
                    ? this.ShowError
                    : this.SubmitForm
                }
                className="FormContainerLogin"
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
