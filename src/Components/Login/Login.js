import React from 'react'
import './Login.css'
import logo1 from '../../Images/fbLogo.png'
import logo2 from '../../Images/fb-text.png'
import { Button } from '@material-ui/core'
import {auth,provider} from '../../firebase'
import {setUser} from '../../reducer'
import { connect } from 'react-redux'


function Login(props) {
    const signin=()=>{
        auth.signInWithPopup(provider)
        .then(res=>{
            props.setUser(res.user)
            localStorage.setItem("user",JSON.stringify(res.user))
        })
        .catch(err=>console.error(err.message))
    }
    return (
      <div className="login">
        <div className="login__logo">
          <img src={logo1} alt="logo1" />
          <img src={logo2} alt="logo1" />
        </div>
        <Button type="submit" onClick={signin}>
          Sign in
        </Button>
      </div>
    );
}

export default connect(null, {setUser})(Login);