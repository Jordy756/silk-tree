import { AwardCard } from "@modules/home/components/Hero/AwardCard.tsx";
import Spline from "@splinetool/react-spline";
import awards from "@modules/home/data/awards.json";
import { NavigationLink } from "@shared/components/ui/NavigationLink.tsx";
import basics from "@shared/data/basics.json";
import { Suspense } from "react";
// import { useAuthStatus } from "@hooks/useAuthStatus";

export const Hero = () => {
  const { name, summary } = basics;
  const [fisrtName, secondName] = name;
  // const { isAuthenticated } = useAuthStatus();

  return (
    <section className="relative p-10 pb-0 min-h-screen flex flex-col justify-between gap-12 overflow-hidden">
      <article className="mt-22 flex-1 self-center w-[min(var(--max-width),100%)] flex flex-col justify-center items-start">
        <h1 className="uppercase text-size-huge font-semibold">
          <span>{fisrtName}</span>
          <span className="text-(--primary-500)">{secondName}</span>
        </h1>
        <p className="max-w-[50ch] mb-4 font-light">{summary}</p>
        <NavigationLink to={"/authorization"}>Comenzar</NavigationLink>
      </article>
      <section className="flex flex-col gap-4">
        {awards.map(({ name, date, description }, index) => (
          <AwardCard key={index} index={index + 1 + ""} name={name} date={date} description={description} />
        ))}
      </section>
      <Suspense fallback={<div>Cargando...</div>}>
        <Spline
          className="absolute top-0 left-0 scale-150 translate-x-[25%] -rotate-15 -z-1"
          scene="https://prod.spline.design/RBrvcAZcumTOcqwc/scene.splinecode"
        />
      </Suspense>
    </section>
  );
};
