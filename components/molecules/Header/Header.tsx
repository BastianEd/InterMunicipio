import React from 'react';
import ButtonPerfile  from "../../atoms/Header/ButtonPerfile";
import {Layout} from "antd";

const Header = () => {
    return(
        <Layout style={{justifyContent: "space-between", flexDirection: "row" }}>

            <ButtonPerfile/>
        </Layout>
    )
}

export default Header;