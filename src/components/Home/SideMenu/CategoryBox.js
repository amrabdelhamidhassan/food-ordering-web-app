import styles from "./CategoryBox.module.css"
import {AiOutlineArrowDown,AiOutlineArrowUp}from  'react-icons/ai'
function CategoryBox(props) {
    const CategoryBoxStyle=`${styles.CategoryBox} ${(props.selectedCategoryId==props.category.id ?styles.Selected:"")}`
    return (
        <div className={CategoryBoxStyle} onClick={props.CategoryBoxHandler}>
            <p className={styles.CategoryText}>{props.category.name}</p>
            <div className={styles.IconStyle}>
                {props.selectedCategoryId!=props.category.id &&     <AiOutlineArrowDown/>}
                {props.selectedCategoryId==props.category.id &&       <AiOutlineArrowUp/>}
            </div>
      </div>
    );
  }
  
  export default CategoryBox;
  