import Register from "src/modules/auth/components/Register";
import Login from "src/modules/auth/components/Login";
import TogglePanel from "src/modules/auth/components/TogglePanel";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useAuthStatus } from "@hooks/useAuthStatus";
import basics from "@data/basics.json";
import "./index.css";

const Auth = () => {
  const { logo } = basics;
  const [isToggled, setIsToggled] = useState(true);
  const handleIsToggled = () => setIsToggled(!isToggled);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStatus();

  if (isAuthenticated) navigate("/#home", { replace: true });

  return (
    <div className="auth">
      <header>
        <NavLink to="/#home">
          <img src={logo} alt="SilkTree logo" loading="lazy" decoding="async" />
        </NavLink>
        <NavLink to="/#home">
          <img src={logo} alt="SilkTree logo" loading="lazy" decoding="async" />
        </NavLink>
      </header>
      <main>
        <GoogleOAuthProvider clientId="12035325870-aj8gvhosgtlludahpbv55hr4nf0q6hgq.apps.googleusercontent.com">
          <Login isToggled={isToggled} handleIsToggled={handleIsToggled} />
          <Register isToggled={isToggled} handleIsToggled={handleIsToggled} />
        </GoogleOAuthProvider>
      </main>
      <TogglePanel isToggled={isToggled} />
    </div>
  );
};

export default Auth;
