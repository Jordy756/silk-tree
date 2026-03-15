import { Separator } from "@modules/auth/components";
import { useLoginUser } from "@modules/auth/hooks/useLoginUser";
import { getLoginFormValidation } from "@modules/auth/utils/loginFormValidations";
import { GoogleIcon } from "@shared/components/icons";
import { Button, Form, InputBox } from "@shared/components/ui";

interface Props {
  isToggled: boolean;
  handleIsToggled: () => void;
}

export const Login = ({ isToggled, handleIsToggled }: Props) => {
  const { register, handleSubmit, errors, loginUser, loginUserWithGoogle } = useLoginUser();

  return (
    <section className={`login ${isToggled ? "active" : ""}`}>
      <header>
        <h2>Iniciar Sesion</h2>
        <p>Ingresa tus credenciales para acceder a tu cuenta</p>
      </header>
      <main>
        <Form onSubmit={loginUser} handleSubmit={handleSubmit}>
          <InputBox label="Correo electrónico" error={errors.email}>
            <input placeholder="" type="text" {...register("email", getLoginFormValidation("email"))} />
          </InputBox>
          <div>
            <InputBox label="Contraseña" error={errors.password}>
              <input
                placeholder=""
                type="password"
                autoComplete="off"
                {...register("password", getLoginFormValidation("password"))}
              />
            </InputBox>
            <p className="forgot__password">Olvido su contraseña</p>
          </div>
          <Button type="submit" variant="primary">
            Iniciar sesión
          </Button>
        </Form>
        <Separator text="O inicia sesión con" />
        <Button variant="secondary" onClick={() => loginUserWithGoogle()}>
          <GoogleIcon width={24} height={24} /> Google
        </Button>
      </main>
      <footer>
        <p>
          ¿No tienes una cuenta?
          <button onClick={handleIsToggled}>Registrate</button>
        </p>
      </footer>
    </section>
  );
};
