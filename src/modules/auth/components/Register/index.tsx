import "./index.css";
import Form from "@components/Form";
import Separator from "src/modules/auth/components/Separator";
import GoogleIcon from "@icons/GoogleIcon";
import Button from "@components/Button";
import InputBox from "@components/InputBox";
import { useRegisterUser } from "src/modules/auth/hooks/useRegisterUser";
import { getRegisterFormValidation } from "src/modules/auth/utils/registerFormValidations";

type Props = {
  isToggled: boolean;
  handleIsToggled: () => void;
};

const Register = ({ isToggled, handleIsToggled }: Props) => {
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
            <InputBox labelText="Nombre" error={errors.name}>
              <input placeholder="" type="text" {...register("name", getRegisterFormValidation("name"))} />
            </InputBox>
            <InputBox labelText="Apellidos" error={errors.lastName}>
              <input placeholder="" type="text" {...register("lastName", getRegisterFormValidation("lastName"))} />
            </InputBox>
          </div>
          <InputBox labelText="Correo electrónico" error={errors.email}>
            <input placeholder="" type="email" {...register("email", getRegisterFormValidation("email"))} />
          </InputBox>
          <InputBox labelText="Contraseña" error={errors.password}>
            <input
              placeholder=""
              type="password"
              autoComplete="off"
              {...register("password", getRegisterFormValidation("password"))}
            />
          </InputBox>
          <InputBox labelText="Confirmar contraseña" error={errors.confirmPassword}>
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

export default Register;
