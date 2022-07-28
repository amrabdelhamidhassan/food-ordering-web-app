import styles from "./HomeScreen.module.css"
import SideMenu from "../components/Home/SideMenu";
import ProductsMenu from "../components/Home/ProductsMenu";

function HomeScreen() {

    return (
      <div className={styles.HomeScreen}>
        <SideMenu/>
        <ProductsMenu/>
      </div>
    );
  }
  
  export default HomeScreen;
  