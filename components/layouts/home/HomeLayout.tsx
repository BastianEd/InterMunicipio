import React from "react";
import { Layout } from "antd";
import TarjetaLogin from "components/organisms/FormularioLogin/TarjetaLogin";
const { Content, Footer } = Layout;

interface HomeLayoutProps {
    children?: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    return (
        <Layout style={{ minHeight: "100vh" }}>

            <Content style={{ padding: 16 }}>


                {/* Sección del login */}
                <Layout
                    style={{
                        minHeight: 260,
                        background: "#f5f6f8",
                        borderRadius: 12,
                        display: "grid",
                        placeItems: "center",
                        padding: 16,
                    }}
                >
                    <TarjetaLogin
                        onEnviar={(d) => console.log("login", d)}
                        onRecuperar={() => console.log("recuperar")}
                        onCrear={() => console.log("crear cuenta")}
                    />
                </Layout>

                {children}
            </Content>

            <Footer style={{ textAlign: "center" }}>
                © {new Date().getFullYear()} InterMunicipio
            </Footer>
        </Layout>
    );
};

export default HomeLayout;
