import "./aboutUsCard.css";

type Props = {
    text: string;
    value: string;
};

const AboutUsCard = ({ text, value }: Props) => {
    return (
        <article className="about__us-card">
            <p>{text}</p>
            <h3>{value}</h3>
        </article>
    );
};

export default AboutUsCard;
