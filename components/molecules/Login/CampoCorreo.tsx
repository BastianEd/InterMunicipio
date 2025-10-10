import React from "react";
import { Form, Input } from "antd";

const CampoCorreo: React.FC = () => {
    return (
        <Form.Item
            label="Correo electrónico"
            name="correo"
            rules={[
                { required: true, message: "Ingresa tu correo" },
                { type: "email", message: "Formato de correo no válido" },
            ]}
        >
            <Input placeholder="nombre@dominio.com" autoComplete="username" allowClear />
        </Form.Item>
    );
};

export default CampoCorreo;
