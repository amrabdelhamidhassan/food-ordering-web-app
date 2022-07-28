import Input from "./Input";
import { validEmail,validPassword,passwordErrorMsg,emailErrorMsg } from "../../helperFunctions/ValidationRules";
import Button from "../UI/Button";
import styles from './LoginForm.module.css'
import FormWrapper from "./FormWrapper";
import { loginAction } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";
import { useState ,useEffect} from "react";
import { DummyUser } from "../../data/DummyData";
import {useNavigate} from "react-router-dom"
function LoginForm(props) {
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const [submited,setSubmited]=useState(false);
    const [emailIsValid,setEmailIsValid]=useState(false)
    const [email,setEmail]=useState("")
    const [passwordIsValid,setPasswordIsValid]=useState(false)
    const [password,setPassword]=useState("")
    const [formError,setFormError]=useState(false)
    useEffect(()=>{
        if(submited)
        {
            if(!(emailIsValid &&passwordIsValid))
            {
                
                  setFormError("Complete All Missing Fields")
            }
            else 
            {
              setFormError(null)
            }
        }
    })
    const ValidateEmail=(value)=>
    {
        if(!validEmail.test(value.trim()))
            {setEmailIsValid(false); return emailErrorMsg}
        else 
            {setEmailIsValid(true);return null;}
    }
     const ValidatePassword=(value)=>
    {
        
        if(!validPassword.test(value))
        {setPasswordIsValid(false); return passwordErrorMsg}
        else 
        {setPasswordIsValid(true); return null;}
    }
    const GetEmail=(value)=>
    {
        setEmail(value);
    }
    const GetPassword=(value)=>
    {
        setPassword(value)
    }
    const LoginHandler=(e)=>
    {
        e.preventDefault()
        setSubmited(true)
        if(emailIsValid &&passwordIsValid)
        {
            dispatch(loginAction(DummyUser))
            navigate('/')

        }
        else 
        {
            console.log("error")
        }
    }
    return (
      <form onSubmit={LoginHandler}>
        <FormWrapper>
                <Input
                    id='email'
                    label='Email'
                    name='email'
                    type='email'
                    maxLength={30}
                    checkValidity={ValidateEmail}
                    setValue={GetEmail}
                    submited={submited}
                />
                <Input
                    id='password'
                    label='Password'
                    name='password'
                    type='password'
                    maxLength={20}
                    checkValidity={ValidatePassword}
                    setValue={GetPassword}
                    submited={submited}

                />
                {!!formError&&<p className={styles.formError}>{formError}</p>}
                <Button type='submit' name='Sign In'/>
            </FormWrapper>

      </form>
    );
  }
  
  export default LoginForm;
  