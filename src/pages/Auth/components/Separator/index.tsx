import "./index.css";

type Props = {
    text?: string;
};

const Separator = ({ text }: Props) => {
    return (
        <div className="form__separator">
            <p>{text}</p>
        </div>
    );
};

export default Separator;
