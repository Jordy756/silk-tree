import { Link } from "react-router-dom";
// import { useAuthStatus } from "@hooks/useAuthStatus";
// import { useNavbar } from "@shared/hooks/useNavbar.ts";
// import AvatarIcon from "@icons/AvatarIcon";
// import LogoutIcon from "@icons/LogoutIcon";
import basics from "@shared/data/basics.json";

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
      <div id="menu" popover="auto" className="fixed top-0 left-0 w-full h-full bg-red-500">
        <nav>
          <button popoverTarget="menu" popoverTargetAction="hide">
            X
          </button>
        </nav>
      </div>
    </header>
  );
};
