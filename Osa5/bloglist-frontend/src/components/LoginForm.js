import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = (props) => {
    return (
        <div>
        <h2>Kirjaudu</h2>

        <form onSubmit={props.handleSubmit}>
          <div>
            käyttäjätunnus
            <input
              value={props.username}
              onChange={props.handleChange}
              type="text"
              name="username"
            />
          </div>
          <div>
            salasana
            <input
              value={props.password}
              onChange={props.handleChange}
              type="password"
              name="password"
            />
          </div>
          <button type="submit" onClick={props.handleSubmit}>kirjaudu</button>
        </form>
      </div>
    )
  }

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }

export default LoginForm