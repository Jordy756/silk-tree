import { FAQItem } from "./FAQItem";
import FAQs from "@modules/home/data/FAQs.json";

export const FAQ = () => {
  return (
    <section id="FAQs" className="px-10">
      <h2 className="uppercase text-size-xlarge">Preguntas frecuentes</h2>
      <div>
        {FAQs.map(({ question, answer }, index) => (
          <FAQItem key={index} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};
