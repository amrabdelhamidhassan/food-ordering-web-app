import styles from "./Input.module.css"
import { useState,useEffect, Fragment } from "react";
function Input({initial="",submited,checkValidity,label,name,id,type,maxLength}) {
    const [error,setError]=useState(null)
    const [touched,setTouched]=useState(false);
    const [value,setValue]=useState(initial!=null?initial:"")
    const InputTextBoxStyle=`${styles.InputText} ${(error&&(touched||submited))?styles.TextError:""}`
    useEffect(()=>
    {
        setError(checkValidity(value))
        setValue(value);
    },[value,setValue])
    useEffect(()=>
    {
      setValue(initial)
    },[initial])
    const InputChangeHandler=(event)=>
    {
        setValue(event.target.value)
    }
    const FocusHandler=()=>
    {
      setTouched(true)
    }
    return (
      <Fragment>
      <div className={styles.Input}>
            <p className={styles.Label}>{label}</p>
            <input className={InputTextBoxStyle}
             id={id}
             name={name}
             type={type}
             value={value}
             onChange={InputChangeHandler}
             onBlur={FocusHandler}
             maxLength={maxLength?maxLength:100}
            >

            </input>
      </div>
      {(touched||submited) && !!error &&<p className={styles.InputError}>{error}</p>}
      </Fragment>
    );
  }
  
  export default Input;
  