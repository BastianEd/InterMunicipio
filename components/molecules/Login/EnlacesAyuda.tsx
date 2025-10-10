import React from "react";
import { Typography, Layout } from "antd";

interface EnlacesAyudaProps {
    onRecuperar?: () => void;
    onCrear?: () => void;
}

const EnlacesAyuda: React.FC<EnlacesAyudaProps> = ({ onRecuperar, onCrear }) => {
    return (
        <Layout style={{ padding: 0, background: "transparent" }}>
            <Typography.Link onClick={onRecuperar}>¿Olvidaste tu contraseña?</Typography.Link>
            <br />
            <Typography.Link onClick={onCrear}>Crear cuenta</Typography.Link>
        </Layout>
    );
};

export default EnlacesAyuda;
