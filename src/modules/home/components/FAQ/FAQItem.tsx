interface Props {
  question: string;
  answer: string;
}

export const FAQItem = ({ question, answer }: Props) => {
  return (
    <details name="faqs" className="px-4 border-b border-neutral-200">
      <summary className="py-4 flex items-center gap-2 cursor-pointer">
        <div className="relative w-4 h-4">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-neutral-950" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-full h-0.5 bg-neutral-950" />
        </div>
        <h3 className="text-size-small">{question}</h3>
      </summary>
      <div className="pb-4 ml-6">
        <p className="font-light">{answer}</p>
      </div>
    </details>
  );
};
