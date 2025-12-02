import "./index.css";
import ArrowLeftIcon from "../../../../assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "../../../../assets/icons/ArrowRightIcon";
import useTestimonies from "../../hooks/useTestimonies";

type Props = {
    isToggled: boolean;
};

const TogglePanel = ({ isToggled }: Props) => {
    const { testimonies, activeTestimonyId, handleNextTestimony, handlePrevTestimony } = useTestimonies();

    return (
        <div className={`toggle__panel ${isToggled ? "toggled" : ""}`}>
            <img
                src="https://res.cloudinary.com/dygwpgeq9/image/upload/v1745287823/service_img_01_qjsnhf.webp"
                alt="Persona sosteniendo una muestra en un tuvo de laboratorio"
                loading="lazy"
                decoding="async"
            />
            <div className="testimonies">
                <ul>
                    {testimonies.map(({ id, name, opinion }) => (
                        <article key={id} className={id === activeTestimonyId ? "active" : ""}>
                            <blockquote>{opinion}</blockquote>
                            <cite>{name}</cite>
                        </article>
                    ))}
                </ul>
                <nav aria-label="Controles de testimonios">
                    <ul>
                        {Array.from({ length: testimonies.length }).map((_, index) => (
                            <li key={index} className={activeTestimonyId === index ? "active" : ""}></li>
                        ))}
                    </ul>
                    <div>
                        <button type="button" aria-label="Testimonio anterior" onClick={handlePrevTestimony}>
                            <ArrowLeftIcon width={24} height={24} color="var(--neutral-50)" />
                        </button>
                        <button type="button" aria-label="Siguiente testimonio" onClick={handleNextTestimony}>
                            <ArrowRightIcon width={24} height={24} color="var(--neutral-50)" />
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default TogglePanel;
