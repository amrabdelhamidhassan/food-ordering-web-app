import styles from "./CartItem.module.css"
import AddToCartItem from "../Home/ProductsMenu/AddToCartItem"
function CartItem(props) {

    return (
      <div className={styles.CartItem}>
                <p className={styles.cartItemText}>{props.cartItem.name}</p>
                <AddToCartItem product={props.cartItem}/>
                <p className={styles.CartItemPrice}>{`${(props.cartItem.price*props.cartItem.itemNumber).toFixed(2)}$`}</p>
      </div>
    );
  }
  
  export default CartItem;
  