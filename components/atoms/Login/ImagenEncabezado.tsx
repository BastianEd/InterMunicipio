import React from "react";
import { Layout } from "antd";

interface ImagenEncabezadoProps {
    src: string;
}

const ImagenEncabezado: React.FC<ImagenEncabezadoProps> = ({ src }) => {
    return (
        <Layout style={{ position: "relative", height: 110, overflow: "hidden" }}>
            <img
                src={src}
                alt="Encabezado"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
        </Layout>
    );
};

export default ImagenEncabezado;
