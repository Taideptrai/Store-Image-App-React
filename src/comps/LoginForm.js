import React, { useState } from 'react';
import { auth } from '../firebase/config';

const LoginForm = ({setUserFromLoginForm}) => {
    const [singIn, setSignIn] = useState(true);
    const [error,setError] = useState({SignInEmail:'',SignInPassword:''});
    const [errorSignUp,setErrorSignUp] = useState({SignUpEmail:'',SignUpPassword:''});
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailSignUp,setEmailSignUp] = useState('');
    const [passwordSignUp,setPasswordSignUp] = useState('');
    const handleSignInSubmit = (e) => {
        e.preventDefault(); 
       (email.length < 1) ? setError(error => ({...error,SignInEmail:"Input Your Email"})) : setError(error => ({...error,SignInEmail:""}));
       (password.length < 5) ? setError(error =>({...error,SignInPassword:"Your Password must more than 5 characters"})) : setError(error => ({...error,SignInPassword:""}));
       if (email.length > 0 && password.length > 5) {
           console.log(email,password)
           FirebaseSignInUp(true,{email,password})
       }
    }  
    const handleSignUpSubmit = (e) => {
        e.preventDefault(); 
        (emailSignUp.length < 1) ? setErrorSignUp(error => ({...error,SignUpEmail:"Input Your Email"})) : setError(error => ({...error,SignUpEmail:""}));
        (passwordSignUp.length < 5) ? setErrorSignUp(error =>({...error,SignUpPassword:"Your Password must more than 5 characters"})) : setError(error => ({...error,SignUpPassword:""}));
        if (emailSignUp.length > 0 && passwordSignUp.length > 5) {
            console.log(emailSignUp,passwordSignUp)
            FirebaseSignInUp(false,{emailSignUp,passwordSignUp})
        }
    }
    const FirebaseSignInUp = async(IsSignIn,data) =>{
        if (IsSignIn === false){
            await auth.createUserWithEmailAndPassword(data.emailSignUp, data.passwordSignUp)
            .then(result => {
                alert("Register Success")
                setUserFromLoginForm(data.emailSignUp)
            })
            .catch(error => {
                // Update the error
                console.log(error);
                setUserFromLoginForm(null)
              })
        }
        else if (IsSignIn === true){
            await auth.signInWithEmailAndPassword(data.email, data.password)
            .then(result => {
                alert("Login Success")
                setUserFromLoginForm(data.email)
            })
            .catch(error => {
                // Update the error
                alert("Sign In Error")
                setUserFromLoginForm(null)
              })
        }
    }

    return(
        <div className="Form">
        {
          !singIn && (
            <div>
            <h2>Sign Up Your Account</h2>
            <form onSubmit={handleSignUpSubmit}>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your Email"
              onChange={(e) =>{setEmailSignUp(e.target.value)}}
            />
            <div className="invalid-feedback">
             {errorSignUp.SignUpEmail}
            </div>
            <input 
              type="password" 
              name="password"
              placeholder="Enter Your Password"
              onChange={(e) =>{setPasswordSignUp(e.target.value)}}
            />
             <div className="invalid-feedback">
             {errorSignUp.SignUpPassword}
            </div>
            <p onClick={()=>{setSignIn(true);setError({SignInEmail:'',SignInPassword:''})}} href="#" className="registerText">Sign In </p>
            <button type="submit"> Register <i className="fa fa-fw fa-chevron-right"></i></button>
            </form>
            </div>
          ) 
        }
        {
          singIn && (
            <div>
            <h2>Sign In Your Account</h2>
            <form onSubmit={handleSignInSubmit}>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your Email"
              onChange={(e) =>{setEmail(e.target.value)}}
            />
            <div className="invalid-feedback">
                {error.SignInEmail}
            </div>
            <input 
              type="password" 
              name="password"
              placeholder="Enter Your Password"
              onChange={(e) =>{setPassword(e.target.value)}}
            />
             <div className="invalid-feedback">
                {error.SignInPassword}
            </div>
            <p onClick={()=>{setSignIn(false);setErrorSignUp({SignUpEmail:'',SignUpPassword:''})}} href="#" className="registerText">Register here </p>
            <button type="submit">Sign In <i className="fa fa-fw fa-chevron-right"></i></button>
            </form>
            </div>
          ) 
        }
       
      </div>
    )
}

export default LoginForm; 