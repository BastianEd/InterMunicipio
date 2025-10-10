import React from "react";
import { Button, Divider, Form, Typography, Layout } from "antd";
import CampoCorreo from "components/molecules/Login/CampoCorreo";
import CampoContrasena from "components/molecules/Login/CampoContraseña";
import EnlacesAyuda from "components/molecules/Login/EnlacesAyuda";


interface FormularioLoginProps {
    onEnviar?: (d: { correo: string; contrasena: string }) => void;
    onRecuperar?: () => void;
    onCrear?: () => void;
}

const FormularioLogin: React.FC<FormularioLoginProps> = ({ onEnviar, onRecuperar, onCrear }) => {
    const [form] = Form.useForm();

    const enviar = (valores: { correo: string; contrasena: string }) => {
        onEnviar?.({ correo: valores.correo, contrasena: valores.contrasena });
    };

    return (
        <Layout style={{ padding: 0, background: "transparent" }}>
            <Form layout="vertical" form={form} onFinish={enviar} requiredMark={false}>
                <CampoCorreo />
                <CampoContrasena />

                <Layout style={{ padding: 0, background: "transparent", marginTop: -8 }}>
                    <EnlacesAyuda onRecuperar={onRecuperar} onCrear={onCrear} />
                </Layout>

                <Divider style={{ margin: "16px 0" }} />

                <Button type="primary" htmlType="submit" style={{ width: "100%", height: 40, fontWeight: 600 }}>
                    Ingresar
                </Button>

                <Layout style={{ padding: 0, background: "transparent", textAlign: "center", marginTop: 12 }}>
                    <Typography.Text type="secondary">¿Necesitas ayuda?</Typography.Text>
                </Layout>
            </Form>
        </Layout>
    );
};

export default FormularioLogin;