import AwardCard from "./AwardCard";
import Spline from "@splinetool/react-spline";
import basics from "@shared/data/basics.json";
import awards from "@modules/home/data/awards.json";
import { NavigationLink } from "@shared/components/ui/NavigationLink.tsx";
// import { useAuthStatus } from "@hooks/useAuthStatus";

export const Hero = () => {
  const { name, summary } = basics;
  const [fisrtName, secondName] = name;
  // const { isAuthenticated } = useAuthStatus();

  return (
    <section id="home" className="hero__container">
      <div>
        <h1>
          {fisrtName}
          <span>{secondName}</span>
        </h1>
        <p>{summary}</p>
        <NavigationLink to={"/authorization"}>Comenzar</NavigationLink>
      </div>
      <section className="award__section">
        {awards.map(({ name, date, description }, index) => (
          <AwardCard key={index} index={index + 1 + ""} name={name} date={date} description={description} />
        ))}
      </section>
      <Spline className="spline__animation" scene="https://prod.spline.design/RBrvcAZcumTOcqwc/scene.splinecode" />
    </section>
  );
};
