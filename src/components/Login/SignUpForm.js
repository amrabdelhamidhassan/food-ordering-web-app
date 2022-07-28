import Button from "../UI/Button";
import { validEmail,validPassword,validName,passwordErrorMsg,emailErrorMsg,nameErrorMsg } from "../../helperFunctions/ValidationRules";
import FormWrapper from "./FormWrapper"
import styles from './SignUpForm.module.css'
import Input from "./Input";
import { useState,useEffect } from "react";
function SignUpForm(props) {
  const [submited,setSubmited]=useState(false);
  const [fnameIsValid,setFnameIsValid]=useState(false)
  const [fname,setFname]=useState("")
  const [lnameIsValid,setLnameIsValid]=useState(false)
  const [lname,setLname]=useState("")
  const [emailIsValid,setEmailIsValid]=useState(false)
  const [email,setEmail]=useState("")
  const [passwordIsValid,setPasswordIsValid]=useState(false)
  const [password,setPassword]=useState("")
  const [confirmPasswordIsValid,setconfirmPasswordIsValid]=useState(false)
  const [confirmPassword,setConfirmPassword]=useState("")
  const [formError,setFormError]=useState(null)
  useEffect(()=>{
    if(submited)
    {
        if(!(emailIsValid &&passwordIsValid &&confirmPasswordIsValid &&fnameIsValid&&lnameIsValid))
        {
            
              setFormError("Complete All Missing Fields")
        }
        else if(password!==confirmPassword)
        {
          setFormError("Confirm Password doesn't Match Password")
        }
        else 
        {
          setFormError(null)
        }
    }

  },[emailIsValid,passwordIsValid,confirmPasswordIsValid,fnameIsValid,lnameIsValid,password,confirmPassword])
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
  const ValidateFname=(value)=>
  {
      
      if(!validName.test(value.trim()))
      {setFnameIsValid(false); return nameErrorMsg}
      else 
      {setFnameIsValid(true); return null;}

  }
  const ValidateLname=(value)=>
  {
      
      if(!validName.test(value.trim()))
      {setLnameIsValid(false); return nameErrorMsg}
      else 
      {setLnameIsValid(true); return null;}

  }
  const ValidateConfirmPassword=(value)=>
  {
      
    if(!validPassword.test(value))
    {setconfirmPasswordIsValid(false); return passwordErrorMsg}
    else 
    {setconfirmPasswordIsValid(true); return null;}

  }
  const GetFname=(value)=>
  {
      setFname(value)
  }
  const GetLname=(value)=>
  {
      setLname(value)
  }
  const GetConfirmPassword=(value)=>
  {
      setConfirmPassword(value)
  }
  const GetEmail=(value)=>
  {
      setEmail(value);
  }
  const GetPassword=(value)=>
  {
      setPassword(value)
  }
  const SignUpHandler=(e)=>
    {
      e.preventDefault()
      setSubmited(true)
      if(!(emailIsValid &&passwordIsValid &&confirmPasswordIsValid &&fnameIsValid&&lnameIsValid))
      {
          
            setFormError("Complete All Missing Fields")
      }
      else if(password!==confirmPassword)
      {
        setFormError("Confirm Password doesn't Match Password")
      }
      else 
      {
        console.log(email,password,confirmPassword,fname,lname)
      }
        
    }
    return (
        <form onSubmit={SignUpHandler}>
            
          <FormWrapper>
            <Input
                  id='fname'
                  label='First Name'
                  name='fname'
                  type='text'
                  maxLength={15}
                  checkValidity={ValidateFname}
                  setValue={GetFname}
                  submited={submited}

              />
            <Input
                  id='lname'
                  label='Last Name'
                  name='lname'
                  type='text'
                  maxLength={15}
                  checkValidity={ValidateLname}
                  setValue={GetLname}
                  submited={submited}

              />
            <Input
                  id='email'
                  label='Email'
                  name='email'
                  type='email'
                  checkValidity={ValidateEmail}
                  setValue={GetEmail}
                  submited={submited}

              />            
            <Input
                  id='password'
                  label='Password'
                  name='password'
                  type='password'
                  checkValidity={ValidatePassword}
                  setValue={GetPassword}
                  submited={submited}

              />
            <Input
                  id='confirmpassword'
                  label='Confirm Password'
                  name='confirmpassword'
                  type='password'
                  checkValidity={ValidateConfirmPassword}
                  setValue={GetConfirmPassword}
                  submited={submited}

              />
             {!!formError&&<p className={styles.formError}>{formError}</p>}

            <Button type='submit' name='Sign Up'/>
          </FormWrapper>
        </form>

    );
  }
  
  export default SignUpForm;
  