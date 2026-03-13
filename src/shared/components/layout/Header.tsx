import { Link } from "react-router-dom";
// import { useAuthStatus } from "@hooks/useAuthStatus";
// import { useNavbar } from "@shared/hooks/useNavbar.ts";
// import AvatarIcon from "@icons/AvatarIcon";
// import LogoutIcon from "@icons/LogoutIcon";
import basics from "@shared/data/basics.json";
import { CloseIcon } from "@shared/components/icons/CloseIcon";

export const Header = () => {
  // const { isAuthenticated } = useAuthStatus();
  // const { isUserMenuOpen, isMenuOpen, userMenuRef, userButtonRef, handleUserMenuToggle, handleMenuToggle, logoutUser } =
  //   useNavbar();
  const { logo, socialNetworks, navbarNavigation } = basics;

  return (
    <header className="fixed top-10 left-10 right-10 z-10">
      <nav className="flex items-center gap-10">
        <Link to="/#home" className="h-10 flex">
          <img
            src={logo}
            height={40}
            className="object-contain"
            alt="Logo de SilkTree"
            loading="lazy"
            decoding="async"
          />
        </Link>
        <button className="flex items-center gap-4 cursor-pointer" popoverTarget="menu">
          <div className="w-10 flex flex-col justify-center items-end gap-2 ">
            <span className="block w-full h-0.5 bg-neutral-950" />
            <span className="block w-[70%] h-0.5 bg-neutral-950" />
          </div>
          <span>Menu</span>
        </button>
      </nav>

      <div id="menu" className="fixed top-0 left-0 w-full h-full p-10" popover="auto">
        <nav className="flex flex-col justify-between h-full">
          <div className="flex items-center justify-between gap-8">
            <span className="realtive -rotate-90 after:absolute after:bottom-1/2 after:right-[calc(100%+8px)] after:h-px after:w-[50vh] after:bg-neutral-950 after:-translate-y-1/2 uppercase">
              Menu
            </span>
            <button className="flex cursor-pointer" popoverTarget="menu" popoverTargetAction="hide">
              <CloseIcon width={48} className="" />
            </button>
          </div>
          <ul className="w-[min(1100px,100%)] flex flex-col gap-8 self-center">
            {navbarNavigation.map(({ label, path }, index) => (
              <li
                key={index}
                className="relative flex items-center gap-4 border-b border-neutral-200 before:absolute before:left-0 before:bottom-0 before:h-px before:w-0 before:bg-neutral-950 before:transition-[width] before:duration-300 hover:before:w-full"
              >
                <span className="min-w-7 text-size-small">{(index + 1 + "").padStart(2, "0")}</span>
                <Link to={path} className="font-medium text-size-huge uppercase">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <aside className="flex justify-between gap-8">
            <ul className="flex-1 flex gap-4">
              <li>
                <Link to={"/a"} className="border-b">
                  Comenzar
                </Link>
              </li>
            </ul>
            <div className="w-10 h-px bg-neutral-950"></div>
            <ul className="flex-1 flex justify-end gap-4">
              {socialNetworks.map(({ name, url }, index) => (
                <li key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="border-b">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </nav>
      </div>
    </header>
  );
};
