import styles from "./LoginScreen.module.css"
import LoginForm from "../components/Login/LoginForm";
import SignUpForm from "../components/Login/SignUpForm";
import { useState } from "react";
function LoginScreen() {
    const [loginView,setLoginView]=useState(true)
    const showLoginViewHandler=()=>
    {
      setLoginView(true);
    }
    const showSignUpViewHandler=()=>
    {
      setLoginView(false);
    }
    return (
      <div className={styles.LoginScreen}>
        {loginView &&<LoginForm/>}
        {loginView &&<p className={styles.Switchtext}onClick={showSignUpViewHandler}>if you are a new user sign up first then login</p>}
        {!loginView &&<SignUpForm/>}
        {!loginView &&<p className={styles.Switchtext} onClick={showLoginViewHandler}>if you already a registered user login to your account now</p>}
      </div>
    );
  }
  
  export default LoginScreen;
  