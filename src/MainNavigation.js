import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import { useSelector } from "react-redux";
import CartScreen from "./screens/CartSceen";
const MainNavigation=()=>
{
    const user=useSelector(state=>state.userReducer.user)
    return(
        <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/:productId" element={<ProductDetailsScreen/>}/>
            {!(!!user) &&<Route path="/login" element={<LoginScreen />}/>}
            {!!user &&<Route path="/checkout" element={<CartScreen/>}/>}
            <Route path="*" element={<Navigate to={'/'} replace/>}/>
      </Routes>
    )
}
export default MainNavigation