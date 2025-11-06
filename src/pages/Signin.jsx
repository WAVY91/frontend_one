import React from 'react'

const Signin = () => {

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  return (
    <div>
        <form action="/signin">
            <input type="text" name="email" id="email" placeholder='email'/>
            <input type="text" name="password" id="password" placeholder='password'/>
            <p>Dont't an account ? <a href="/signuserup">sign up here</a></p>
            <button>Sign in</button>
        </form>
    </div>
  )
}

export default Signin