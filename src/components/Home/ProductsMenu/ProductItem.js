import styles from "./ProductItem.module.css"
import PlaceHolderImage from"../../../data/images/placeholder.png"
import AddToCartItem from "./AddToCartItem";
import {useNavigate} from "react-router-dom"
import { Fragment } from "react";
function ProductItem(props) {

    const imageURL=props.product.img==null? PlaceHolderImage:props.product.img
    const navigate=useNavigate();
    const productItemClickHandler=()=>
    {
        navigate(`/${props.product.id}`)
    }
    return (
        <div className={styles.ProductItem} >
            <div className={styles.ProductItemClickWrapper}onClick={productItemClickHandler}  >
                <img  className={styles.ProductImageStyle}src={imageURL}/>            
                <p className={styles.ProductTextStyle}>{props.product.name}</p>
                <p className={styles.ProductTextStyle}>{`$${props.product.price}`}</p>
            </div>
            <AddToCartItem product={props.product}/>
        </div>

    );
  }
  
  export default ProductItem;
  