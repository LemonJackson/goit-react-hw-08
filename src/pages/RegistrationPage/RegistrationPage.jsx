import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

export default function RegisterPage() {
  return (
    <main className={css.main}>
      <h1 className={css.title}>Sign up</h1>
      <RegistrationForm />
    </main>
  );
}
