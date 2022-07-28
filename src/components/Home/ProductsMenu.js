import styles from "./ProductsMenu.module.css"
import ProductItem from "./ProductsMenu/ProductItem";
import { getDummyProducts } from "../../data/DummyData";
function ProductsMenu() {
    const products=getDummyProducts();
    return (
      <div   className={styles.ProductsMenuWrapper}>
        <div  className={styles.ProductsMenu}>
              {products.map((product)=>
              {return(
                      <ProductItem key={product.id}product={product}/>
              )
              }
              )}
        </div>
      </div>
    );
  }
  
  export default ProductsMenu;
  