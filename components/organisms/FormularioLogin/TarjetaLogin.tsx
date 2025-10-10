import React from "react";
import { Card, Typography, Layout, Divider, Button, Form, Input } from "antd";
// 👇 Importa tu imagen directamente desde Assets
import logoInterMunicipio from "../../../Assets/generated-image.png";

const { Title, Text, Link } = Typography;

interface TarjetaLoginProps {
    onEnviar?: (d: { correo: string; contrasena: string }) => void;
    onRecuperar?: () => void;
    onCrear?: () => void;
}

const TarjetaLogin: React.FC<TarjetaLoginProps> = ({
                                                       onEnviar,
                                                       onRecuperar,
                                                       onCrear,
                                                   }) => {
    const [form] = Form.useForm();

    const enviar = (valores: { correo: string; contrasena: string }) => {
        onEnviar?.(valores);
    };

    return (
        <Layout
            style={{
                minHeight: "100vh",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 16,
            }}
        >
            <Card
                variant="outlined"
                style={{
                    width: 380,
                    borderRadius: 12,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                styles={{ body: { padding: "32px 40px" } }}
            >
                {/* Imagen superior */}
                <div style={{ textAlign: "center", marginBottom: 16 }}>
                    <img
                        src={logoInterMunicipio} // ✅ usa la importación
                        alt="InterMunicipio"
                        style={{ width: 160, marginBottom: 8 }}
                    />
                </div>

                {/* Título */}
                <Title level={4} style={{ textAlign: "center", marginBottom: 24 }}>
                    Iniciar sesión
                </Title>

                {/* Formulario */}
                <Form layout="vertical" form={form} onFinish={enviar} requiredMark={false}>
                    <Form.Item
                        label="Correo electrónico"
                        name="correo"
                        rules={[
                            { required: true, message: "Ingresa tu correo" },
                            { type: "email", message: "Formato de correo no válido" },
                        ]}
                    >
                        <Input placeholder="nombre@dominio.com" />
                    </Form.Item>

                    <Form.Item
                        label="Contraseña"
                        name="contrasena"
                        rules={[{ required: true, message: "Ingresa tu contraseña" }]}
                    >
                        <Input.Password placeholder="••••••••" />
                    </Form.Item>

                    {/* Enlaces */}
                    <div style={{ marginTop: -8, marginBottom: 16 }}>
                        <Link onClick={onRecuperar} style={{ display: "block" }}>
                            ¿Olvidaste tu contraseña?
                        </Link>
                        <Link onClick={onCrear}>Crear cuenta</Link>
                    </div>

                    <Divider style={{ margin: "12px 0" }} />

                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: "100%", height: 40, fontWeight: 600 }}
                    >
                        Ingresar
                    </Button>

                    <div style={{ textAlign: "center", marginTop: 14 }}>
                        <Text type="secondary">¿Necesitas ayuda?</Text>
                    </div>
                </Form>
            </Card>
        </Layout>
    );
};

export default TarjetaLogin;
