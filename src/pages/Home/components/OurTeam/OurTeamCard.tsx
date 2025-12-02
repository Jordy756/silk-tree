import { CSSProperties } from "react";
import "./ourTeamCard.css";

type Props = {
    index: number;
    image: string;
    name: string;
    specialty: string;
};

const OurTeamCard = ({ index, image, name, specialty }: Props) => {
    return (
        <article className="our__team-card" style={{ "--grid-area": `doctor${index + 1}` } as CSSProperties}>
            <figure>
                <img src={image} alt={`Imagen de ${name}`} loading="lazy" decoding="async" />
            </figure>
            <div>
                <h3>{name}</h3>
                <p>{specialty}</p>
            </div>
        </article>
    );
};

export default OurTeamCard;
