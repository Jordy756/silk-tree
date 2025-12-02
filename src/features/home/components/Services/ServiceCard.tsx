import { CSSProperties } from "react";
import "./serviceCard.css";

type Props = {
    index: number;
    name: string;
    image: string;
};

const ServiceCard = ({ index, name, image }: Props) => {
    return (
        <article className="service__card" style={{ "--index": window.innerWidth > 480 ? index : 0 } as CSSProperties}>
            <figure>
                <img src={image} alt={`Imagen de ${name}`} loading="lazy" decoding="async" />
            </figure>
            <div>
                <h3>{name}</h3>
                <span>Servicios</span>
            </div>
        </article>
    );
};

export default ServiceCard;
