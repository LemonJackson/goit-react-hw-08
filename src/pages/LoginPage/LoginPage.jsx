import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectLoader } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  const loader = useSelector(selectLoader);
  return (
    <main className={css.main}>
      <h1 className={css.title}>Log in</h1>
      {loader ? <Loader /> : <LoginForm />}
    </main>
  );
}
