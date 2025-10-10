import React from "react";
import { Form, Input } from "antd";

const CampoContrasena: React.FC = () => {
    return (
        <Form.Item
            label="Contraseña"
            name="contraseña"
            rules={[{ required: true, message: "Ingresa tu contraseña" }]}
        >
            <Input.Password placeholder="••••••••" autoComplete="current-password" />
        </Form.Item>
    );
};

export default CampoContrasena;
