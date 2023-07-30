import React from "react";
import Herosection1 from "./components/Herosection1";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
    const data = {
        name:"Shopping Store",
    }
    return (
    <>
    <Herosection1 myData={data}/>
    <FeatureProduct />
    <Services />
    <Trusted  />
   
    </>
    );
};

export default Home;