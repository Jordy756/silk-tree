import "./awardCard.css";

type Props = {
    index: string;
    name: string;
    date: string;
    description: string;
};

const AwardCard = ({ index, name, date, description }: Props) => {
    return (
        <article className="award__card">
            <div>
                <span>{index.padStart(2, "0")}</span>
                <div>
                    <time>{date}</time>
                    <h3>{name}</h3>
                </div>
            </div>
            <p>{description}</p>
        </article>
    );
};

export default AwardCard;
