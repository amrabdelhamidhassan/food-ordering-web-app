import styles from "./AddToCartItem.module.css"
import {FiPlusCircle,FiMinusCircle} from "react-icons/fi"
import { cartActions } from "../../../store/reducers/cartReducer";
import {useNavigate} from "react-router-dom"
import { IconContext } from "react-icons/lib";
import { useSelector,useDispatch } from "react-redux";
import { Fragment, useEffect, useState } from "react";
function AddToCartItem(props) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const cart=useSelector(state=>state.cartReducer.cart);
    const user=useSelector(state=>state.userReducer.user)
    const [productItemNumber,setProductItemNumber]=useState(0)
    useEffect(()=>
    {
        const existingitem=cart.find(item=>item.id==props.product.id)
        if(existingitem)
        {
            setProductItemNumber(existingitem.itemNumber);
        }
        else
        {
            setProductItemNumber(0);

        }

    },[cart])
    const addToCartHandler=()=>
    {
        if(user)
             dispatch(cartActions.addToCart(props.product))
        else 
             navigate('/login')
    }
    const removeFromCartHandler=()=>
    {
        if(user)
            dispatch(cartActions.removeFromCart(props.product))
        else 
            navigate('/login')
    }
    return (
        <div className={styles.addToCartWrapper}>
            <div className={styles.AddToCartItem} >
                <IconContext.Provider value={{ color: "white", className: "fi",size:'2vw' }}>
                    <div className={styles.AddToCartIcon} onClick={removeFromCartHandler}>
                        <FiMinusCircle />
                    </div>
                </IconContext.Provider>                
                <p className={styles.AddToCartItemText}>{productItemNumber}</p>
                <IconContext.Provider value={{ color: "white", className: "fi",size:'2vw' }}>
                <div className={styles.AddToCartIcon} onClick={addToCartHandler}>
                    <FiPlusCircle />
                </div>
                </IconContext.Provider>
            </div>
            {productItemNumber>=props.product.stock &&<p className={styles.outOfStockError}>last item in stock</p>}
        </div>
    );
  }
  
  export default AddToCartItem;
  