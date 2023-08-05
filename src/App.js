import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import AppContext from "./utils/context";
import PaymentRedirection from "./components/PaymentStatus/PaymentRedirection";
import Shipping from "./components/Cart/Shipping/Shipping"
import { SkeletonTheme } from "react-loading-skeleton";


function App(){
    return(
        <HashRouter>
            <AppContext>
            <SkeletonTheme baseColor="#d2d2e4" highlightColor="#bcbdc5">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/category/:id" element={<Category/>}/>
                    <Route path="/product/:id" element={<SingleProduct/>}/>
                    <Route path="/payment" element={<PaymentRedirection/>}/>
                    <Route path="/shipping" element={<Shipping/>}/>
                </Routes>
                <Newsletter/>
                <Footer/>
                </SkeletonTheme>
            </AppContext>
        </HashRouter>
    );
}

export default App;
