import { CSSProperties } from "react";
import Marquee from "../../../../shared/components/Marquee";
import ServiceCard from "./ServiceCard";
import basics from "../../../../shared/data/basics.json";
import services from "../../data/services.json";
import "./index.css";

const Services = () => {
    return (
        <section id="services" className="services" style={{ "--total-cards": services.length } as CSSProperties}>
            <div className="pin__wrap-sticky">
                <Marquee list={basics.marquee} color="var(--primary-500)" />
                <div className="pin__wrap">
                    {services.map(({ name, image }, index) => (
                        <ServiceCard key={index} index={services.length - 1 - index} name={name} image={image} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
