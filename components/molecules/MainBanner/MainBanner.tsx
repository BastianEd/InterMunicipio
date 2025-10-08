import React from 'react';
import {Layout} from "antd";
import ButtonPerfile from "../../atoms/MainBanner/ButtonPerfile";

const login = () => {
  return(
      <Layout style={{justifyContent: "space-between", flexDirection: "row" }}>
          <ButtonPerfile/>
      </Layout>
  )
}

 export default login;