import { Link } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import { useNavbar } from "../../hooks/useNavbar";
import AvatarIcon from "../../../assets/icons/AvatarIcon";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import basics from "../../data/basics.json";
import "./index.css";

const Header = () => {
    const { isAuthenticated } = useAuthStatus();
    const {
        isUserMenuOpen,
        isMenuOpen,
        userMenuRef,
        userButtonRef,
        handleUserMenuToggle,
        handleMenuToggle,
        logoutUser,
    } = useNavbar();
    const { logo, socialNetworks, navbarNavigation } = basics;

    return (
        <header className={`header ${isMenuOpen ? "with__navbar-open" : ""}`}>
            <nav>
                <div>
                    <Link to="/#home">
                        <img src={logo} alt="Logo de SilkTree" loading="lazy" decoding="async" />
                    </Link>
                    <button onClick={handleMenuToggle}>
                        <div>
                            <span />
                            <span />
                        </div>
                        <span>Menu</span>
                    </button>
                </div>
                <ul>
                    {navbarNavigation.map(({ label, path }, index) => (
                        <li key={index}>
                            <span>{(index + 1 + "").padStart(2, "0")}</span>
                            <Link onClick={handleMenuToggle} to={path}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <div>
                    <Link onClick={handleMenuToggle} to={isAuthenticated ? "/schedule-appointment" : "/authorization"}>
                        {isAuthenticated ? "Agendar cita" : "Comenzar"}
                    </Link>
                    {isAuthenticated && (
                        <>
                            <button ref={userButtonRef} onClick={handleUserMenuToggle}>
                                <AvatarIcon width={24} height={24} color="var(--neutral-900)" />
                            </button>
                            <ul ref={userMenuRef} className={`${isUserMenuOpen ? "user__menu-open" : ""}`}>
                                <li>
                                    <button onClick={logoutUser}>
                                        <LogoutIcon width={24} height={24} color="var(--error-500)" />
                                        Cerrar sesión
                                    </button>
                                </li>
                            </ul>
                        </>
                    )}
                </div>
                <span />
                <aside>
                    <ul>
                        {socialNetworks.map(({ name, url }, index) => (
                            <li key={index}>
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
            <aside>
                <span />
                <p>Menu</p>
            </aside>
        </header>
    );
};

export default Header;
