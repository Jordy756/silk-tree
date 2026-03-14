interface Props {
  index: string;
  name: string;
  date: string;
  description: string;
}

export const AwardCard = ({ index, name, date, description }: Props) => {
  return (
    <article className="p-10 rounded-t-3xl flex justify-between flex-wrap gap-4 bg-white/10 backdrop-blur-md shadow-sm">
      <div className="flex-1 flex gap-4">
        <span className="text-size-xlarge">{index.padStart(2, "0")}</span>
        <div className="flex flex-col">
          <time className="opacity-80">{date}</time>
          <h2 className="text-size-large">{name}</h2>
        </div>
      </div>
      <p className="max-w-[50ch] font-light">{description}</p>
    </article>
  );
};
