import { Link } from "react-router-dom";
import { NavigationLink } from "@shared/components/ui/NavigationLink.tsx";
import basics from "@shared/data/basics.json";

const year = new Date().getFullYear();

export const Footer = () => {
  // const { isAuthenticated } = useAuthStatus();
  const { logo, slogan, footerNavigation } = basics;

  return (
    <footer className="p-10 flex flex-col gap-20">
      <section className="flex flex-wrap justify-between gap-8">
        <div className="flex-1 flex flex-col items-start gap-4">
          <Link to="/#home" className="">
            <img
              src={logo}
              width={250}
              className="object-contain"
              alt="Logo de SilkTree"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <blockquote>{slogan}</blockquote>
          <NavigationLink to={"/authorization"}>Comenzar</NavigationLink>
        </div>
        <nav className="flex-1">
          <ul className="flex flex-col gap-4">
            {footerNavigation.map(({ label, path }, index) => (
              <li
                key={index}
                className="relative flex items-center gap-4 border-b border-neutral-200 before:absolute before:left-0 before:bottom-0 before:h-px before:w-0 before:bg-neutral-950 hover:before:w-full"
              >
                <span className="min-w-7 text-size-small">{(index + 1 + "").padStart(2, "0")}</span>
                <Link to={path} className="font-medium text-size-xlarge uppercase">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <aside className="flex items-center justify-between gap-8 flex-wrap-reverse">
        <span>&copy; SilkTree {year}</span>
        <nav>
          <ul className="flex gap-4">
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
