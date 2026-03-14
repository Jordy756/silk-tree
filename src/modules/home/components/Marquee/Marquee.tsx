interface Props {
  list: string[];
  color?: "text-neutral-950" | "var(--primary-500)";
}

export const Marquee = ({ list, color = "text-neutral-950" }: Props) => {
  return (
    <aside className="flex gap-20 py-4 overflow-hidden w-full hover:[&>ul]:[animation-play-state:paused]">
      {[0, 1].map((i) => (
        <ul key={i} className="flex gap-20 animate-marquee">
          {list.map((item, index) => (
            <li key={index} className="flex gap-4 text-size-mega whitespace-nowrap uppercase font-medium">
              <span>{item}</span>
              <div
                className="relative border w-10 h-10 rounded-full 
                before:absolute before:top-1/2 before:left-1/2 before:w-3/4 before:h-px before:-translate-y-1/2 before:-translate-x-1/2 before:bg-neutral-950
                after:absolute after:top-1/2 after:left-1/2 after:w-3/4 after:h-px after:-translate-y-1/2 after:-translate-x-1/2 after:rotate-90 after:bg-neutral-950"
              />
            </li>
          ))}
        </ul>
      ))}
    </aside>
  );
};
