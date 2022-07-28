import styles from "./Header.module.css"
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { IconContext } from "react-icons/lib";
import { logoutAction } from "../../store/actions/userActions";

function Header() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const isLoggedIn=useSelector(state=>state.userReducer.user)
    const CartLength=useSelector(state=>state.cartReducer.numberOfitems)
    console.log('cartLength',CartLength)
    const RefreshHandler=()=>
    {
      navigate('/')
    }
    return (
      <div className={styles.Header}>
            <div onClick={RefreshHandler}  className={styles.HeaderTitle}>Get Your Food</div>
            <div className={styles.ActionWrapper}>
                {!(!!isLoggedIn)&&<button onClick={()=>navigate('/login')}className={styles.ActionBtn}>Login</button>}
                {!!isLoggedIn &&<IconContext.Provider value={{ color: "#8B069F", className: "ai",size:'2vw' }}>
                    <div className={styles.CartIcon} onClick={()=>navigate('/checkout')}>
                        <AiOutlineShoppingCart />
                        <p className={styles.CartNumber}>{CartLength}</p>
                        <p className={styles.CartText}>Check Out</p>

                    </div>
                </IconContext.Provider>}
                
                {!!isLoggedIn &&<button onClick={()=>{dispatch(logoutAction())}} className={styles.ActionBtn} >Logout</button>}
            </div>
      </div>
    );
  }
  
  export default Header;
  