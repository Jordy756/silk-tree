import { Link } from "react-router-dom";
import NavigationLink from "../NavigationLink";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import basics from "../../data/basics.json";
import "./index.css";

const Footer = () => {
    const { isAuthenticated } = useAuthStatus();
    const { logo, slogan, footerNavigation } = basics;

    return (
        <footer className="footer">
            <section>
                <div>
                    <Link to="/#home">
                        <img src={logo} alt="Logo de SilkTree" loading="lazy" decoding="async" />
                    </Link>
                    <blockquote>{slogan}</blockquote>
                    <NavigationLink
                        className="primary"
                        to={isAuthenticated ? "/schedule-appointment" : "/authorization"}
                    >
                        {isAuthenticated ? "Agendar cita" : "Comenzar"}
                    </NavigationLink>
                </div>
                <nav>
                    <ul>
                        {footerNavigation.map(({ label, path }, index) => (
                            <li key={index}>
                                <span>{(index + 1 + "").padStart(2, "0")}</span>
                                <Link to={path}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
            <aside>
                <p>&copy; SilkTree 2024</p>
                <nav>
                    <ul>
                        <li>
                            <Link to="/#">Términos y condiciones</Link>
                        </li>
                        <li>
                            <Link to="/#">Política de privacidad</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </footer>
    );
};

export default Footer;
