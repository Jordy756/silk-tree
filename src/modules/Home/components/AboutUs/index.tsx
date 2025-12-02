import AboutUsCard from "./AboutUsCard";
import aboutUs from "../../data/aboutUs.json";
import "./index.css";

const AboutUs = () => {
    const { title, description, cards } = aboutUs;
    return (
        <section id="about-us" className="about__us">
            <div className="pin__wrap-sticky">
                <header>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </header>
                <main className="pin__wrap">
                    {cards.map(({ text, value }, index) => (
                        <AboutUsCard key={index} text={text} value={value} />
                    ))}
                </main>
            </div>
        </section>
    );
};

export default AboutUs;
