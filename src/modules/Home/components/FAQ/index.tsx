import FAQItem from "./FAQItem";
import FAQs from "../../data/FAQs.json";
import "./index.css";

const FAQ = () => {
    return (
        <section id="FAQs" className="faq">
            <h2>Preguntas frecuentes</h2>
            <div>
                {FAQs.map(({ question, answer }, index) => (
                    <FAQItem key={index} question={question} answer={answer} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
