import { Separator } from "@modules/auth/components";
import { useRegisterUser } from "@modules/auth/hooks/useRegisterUser";
import { getRegisterFormValidation } from "@modules/auth/utils/registerFormValidations";
import { GoogleIcon } from "@shared/components/icons";
import { Button, Form, InputBox } from "@shared/components/ui";

interface Props {
  isToggled: boolean;
  handleIsToggled: () => void;
}

export const Register = ({ isToggled, handleIsToggled }: Props) => {
  const { register, handleSubmit, errors, registerUser, registerUserWithGoogle } = useRegisterUser(handleIsToggled);

  return (
    <section className={`register ${!isToggled ? "active" : ""}`}>
      <header>
        <h2>Crea tu cuenta</h2>
        <p>Regístrate para acceder a todas las funciones</p>
      </header>
      <main>
        <Form onSubmit={registerUser} handleSubmit={handleSubmit}>
          <div className="input__box-container">
            <InputBox label="Nombre" error={errors.name}>
              <input placeholder="" type="text" {...register("name", getRegisterFormValidation("name"))} />
            </InputBox>
            <InputBox label="Apellidos" error={errors.lastName}>
              <input placeholder="" type="text" {...register("lastName", getRegisterFormValidation("lastName"))} />
            </InputBox>
          </div>
          <InputBox label="Correo electrónico" error={errors.email}>
            <input placeholder="" type="email" {...register("email", getRegisterFormValidation("email"))} />
          </InputBox>
          <InputBox label="Contraseña" error={errors.password}>
            <input
              placeholder=""
              type="password"
              autoComplete="off"
              {...register("password", getRegisterFormValidation("password"))}
            />
          </InputBox>
          <InputBox label="Confirmar contraseña" error={errors.confirmPassword}>
            <input
              placeholder=""
              type="password"
              autoComplete="off"
              {...register("confirmPassword", getRegisterFormValidation("confirmPassword"))}
            />
          </InputBox>
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>
        <Separator text="o registrate con" />
        <Button variant="secondary" onClick={() => registerUserWithGoogle()}>
          <GoogleIcon width={24} height={24} /> Google
        </Button>
      </main>
      <footer>
        <p>
          Ya tienes cuenta?
          <button onClick={handleIsToggled}>Inicia sesion</button>
        </p>
      </footer>
    </section>
  );
};
