import React from "react";
import { Card, Typography, Layout, Button } from "antd";

const { Title, Paragraph } = Typography;

interface ItemCardProps {
    image?: string;
    titulo?: string;
    descripcion?: string;
    botonTexto?: string;
    onBotonClick?: () => void;
}

/**
 * Componente de tarjeta genérica (ItemCard)
 * - Muestra imagen, título, descripción y un botón opcional.
 * - Usa Layout de Ant Design para mantener consistencia visual.
 */
const ItemCard: React.FC<ItemCardProps> = ({
                                               image,
                                               titulo = "Título de la tarjeta",
                                               descripcion = "Descripción breve o información adicional.",
                                               botonTexto = "Ver más",
                                               onBotonClick,
                                           }) => {
    return (
        <Layout style={{ background: "transparent", display: "flex", justifyContent: "center" }}>
            <Card
                hoverable
                style={{
                    width: 300,
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
                cover={
                    image ? (
                        <img
                            alt={titulo}
                            src={image}
                            style={{
                                height: 180,
                                objectFit: "cover",
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                            }}
                        />
                    ) : undefined
                }
            >
                <Title level={5}>{titulo}</Title>
                <Paragraph style={{ color: "#555", fontSize: 14, marginBottom: 16 }}>
                    {descripcion}
                </Paragraph>

                {onBotonClick && (
                    <Button type="primary" block onClick={onBotonClick}>
                        {botonTexto}
                    </Button>
                )}
            </Card>
        </Layout>
    );
};

export default ItemCard;
