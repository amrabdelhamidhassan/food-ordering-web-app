import styles from "./SideMenu.module.css"
import { getDummyCategories } from "../../data/DummyData";
import CategoryBox from "./SideMenu/CategoryBox";
import SubCategoryMenu from "./SideMenu/SubCategoryMenu";
import { Fragment,useState } from "react";
function SideMenu() {
    const [selectedCategoryId,setSelectedCategoryId]=useState(null);
    const categories=getDummyCategories();
    return (
      <div  className={styles.SideMenu}>
          <div className={styles.CategoriesHeader}>Categories</div>
          {categories.map((category)=>
          {
            const CategoryBoxHandler=()=>
            {
              setSelectedCategoryId((previousVal)=>{
                if(previousVal==category.id)
                {
                  return null;
                }
                else return category.id
              })
            }
            return(
            <Fragment key={category.id}>
              <CategoryBox category={category}selectedCategoryId={selectedCategoryId}CategoryBoxHandler={CategoryBoxHandler}/>
              {selectedCategoryId==category.id &&<SubCategoryMenu subCategories={category.subCategories}/>}
            </Fragment>
          )
          })}
      </div>
    );
  }
  
  export default SideMenu;
  