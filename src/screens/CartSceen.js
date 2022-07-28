import styles from "./CartScreen.module.css"
import NewAdressForm from "../components/Cart/NewAddressForm";
import Button from "../components/UI/Button"
import { useSelector ,useDispatch} from "react-redux";
import { DummyEmptyAdress ,getDummyAdresses} from "../data/DummyData";
import { cartActions } from "../store/reducers/cartReducer";
import CartItem from "../components/Cart/CartItem";
import { Fragment, useState } from "react";
function CartScreen() {
  const cart=useSelector(state=>state.cartReducer.cart)
  const totalPrice=useSelector(state=>state.cartReducer.totalPrice)
  const [currentAddress,setCurrentAdress]=useState(DummyEmptyAdress)
  const dispatch=useDispatch();
  const savedAddress=getDummyAdresses();
  const ClearCartHandler=()=>
  {
      dispatch(cartActions.clearCart())
  }
    return (
      <Fragment>
      {cart.length!=0 &&<div className={styles.CartScreen}>
        <div className={styles.rowWrapper}>
          <div>
            <div className={styles.Wrapper}>

              {
                cart.map((cartItem)=>
                {
                  return <CartItem key={cartItem.id}cartItem={cartItem}/>
                }
                )
              }
            </div>

            <div className={styles.TotalPriceBox}>
                      <p className={styles.TotalPriceText}>Total Price </p>
                      <p className={styles.TotalPrice}>{`${(totalPrice).toFixed(2)}$`}</p>
            </div>
            <div className={styles.actionBox}>
                <Button name="Clear Cart"type="button" onClickHandler={ClearCartHandler}/>
            </div>
          </div>
          <div className={styles.addressWrapper}>
            <NewAdressForm address={currentAddress}/>
          </div>
{   savedAddress.length>0 &&
         <div className={styles.addressWrapper}>
              <p className={styles.SavedAdressesTitle}>Saved Adresses </p>
              <p className={styles.SavedAdressesText}>Choose from Adresses Used Before</p>
              <div className={styles.Wrapper}>
              <p onClick={()=>setCurrentAdress(DummyEmptyAdress)} className={styles.SavedAdressBox}>New Address</p>

              {
                savedAddress.map((address)=>
                {return(
                  <p key={address.id}className={styles.SavedAdressBox}onClick={()=>setCurrentAdress(address)}>{address.name}</p>
                )
                })
              }
              </div>
          </div>
}
        </div>
      </div>
    }
    {cart.length==0 &&<div className={styles.CartScreen}>
          <div className={styles.TotalPriceBox}>
                <p  className={styles.TotalPrice} >Cart Is Empty Add Items First</p>
          </div>
      </div>
    }
      </Fragment>
    );
  }
  
  export default CartScreen;
  