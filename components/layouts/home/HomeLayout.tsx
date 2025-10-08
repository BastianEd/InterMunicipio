import React from 'react';
import {Layout} from "antd";
import MainBanner from "../../molecules/MainBanner/MainBanner";




const Principal =()=>{
    return (
        <Layout style={{justifyContent: "space-between", flexDirection: "row" }}>
            <MainBanner/>
        </Layout>
    )
}

export default Principal;