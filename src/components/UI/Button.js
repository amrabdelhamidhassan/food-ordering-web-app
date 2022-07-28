import styles from "./Button.module.css"
function Button(props) {
    return (
      <button onClick={props.onClickHandler}type={props.type}className={styles.Button}>
            {props.name}
      </button>
    );
  }
  
  export default Button;
  