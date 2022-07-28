import styles from "./FormWrapper.module.css"
function FormWrapper(props) {
    return (
      <div className={styles.FormWrapper}>
            {props.children}
      </div>
    );
  }
  
  export default FormWrapper;
  