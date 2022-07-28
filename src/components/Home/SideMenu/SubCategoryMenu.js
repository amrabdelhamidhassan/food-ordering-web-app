import styles from "./SubCategoryMenu.module.css";
import { useState } from "react";
function SubCategoryMenu(props) {
    const [selectedSubCategoryId,setSelectedSubCategoryId]=useState(null);
    return (
        <div className={styles.SubCategoryMenu}>
        {
          props.subCategories.map((subCategory)=>
          {
              const SubCategoryBoxHandler=()=>
              {
                setSelectedSubCategoryId(subCategory.id)
              }
              const SubCategoryBoxStyle=`${styles.SubCategoryText} ${(selectedSubCategoryId==subCategory.id ?styles.Selected:"")}`
              return(
                <p key={subCategory.id}className={SubCategoryBoxStyle}onClick={SubCategoryBoxHandler}>{subCategory.name}</p>
              )
          })
        }
        </div>
    );
  }
  
  export default SubCategoryMenu;
  