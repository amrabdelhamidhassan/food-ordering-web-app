import styles from "./ProductDetailsScreen.module.css"
import {useParams } from "react-router-dom";
import AddToCartItem from "../components/Home/ProductsMenu/AddToCartItem";
import {useNavigate} from "react-router-dom"
import PlaceHolderImage from"../data/images/placeholder.png"
import { getDummyProducts } from "../data/DummyData";
import { useEffect, useState } from "react";
function ProductDetailsScreen() {
    const params=useParams();
    const [imageURL,setImageURL]=useState(PlaceHolderImage)
    const navigate=useNavigate();
    const products=getDummyProducts();
    const [product,setProduct]=useState({});
    useEffect(()=>
    {
            let product=products.filter(item=>item.id==params.productId)
            if(product.length!=0)
            {
                setProduct(product[0])
                setImageURL(product[0].img==null? PlaceHolderImage:product[0].img)
            }
            else
            {
                navigate('/')
            }

    },[])
    useEffect(()=>
    {
            let product=products.filter(item=>item.id==params.productId)
            if(product.length!=0)
            {
                setProduct(product[0])
                setImageURL(product[0].img==null? PlaceHolderImage:product[0].img)
            }
            else
            {
                navigate('/')
            }

    },[])
    return (
      <div className={styles.ProductDetailsScreen}>
        <div className={styles.ImageWrapper}>
           <img  className={styles.ProductImageStyle}src={imageURL}/>            
        </div>
        <div className={styles.InfoWrapper}>
                <p className={styles.ProductTextStyle}>{product?.name}</p>
                <p className={styles.ProductTextStyle}>{product?.description}</p>
                <p className={styles.ProductTextStyle}>{`$${product.price}`}</p>
                <AddToCartItem product={product}/>

        </div>
      </div>
    );
  }
  
  export default ProductDetailsScreen;
  