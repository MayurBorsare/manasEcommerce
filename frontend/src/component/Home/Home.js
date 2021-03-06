import React, { Fragment, useEffect} from "react";
import MouseIcon from '@mui/icons-material/Mouse';
import "./Home.css";
import MetaData from "../layout/MetaData"
import {clearErrors, getProduct} from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux";
import {useAlert} from "react-alert";
import Loader from "../layout/Loader/Loader";
import ProductCard from "./ProductCard";


const Home = () => {

    const alert=useAlert();
    const dispatch=useDispatch();
    const {loading,error,products}=useSelector((state)=>state.products)

    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    },[dispatch,alert,error])

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                <MetaData title={" M.A.N.A.S "}/>
                <div className="banner">
                    <p> Welcome to MANAS</p>
                    <h1>FIND AMAZING PRODUCTS BELOW</h1>
    
                    <a href="#container">
                        <button>
                            Scroll <MouseIcon />
                        </button>
                    </a>
                </div>
    
                <h2 className="homeHeading">Featured Products</h2>
                <div className="container" id="container">
                    {products && products.map((product)=>{
                        return <ProductCard key={product._id} product={product} />
                    })}
                </div>
            </Fragment>
            )}
        </Fragment>
            )
}

export default Home
