import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <main className={css.main}>
      <h1 className={css.title}>Welcome to your PhoneBook!</h1>
      <p>This is the place where you can easily manage your contacts.</p>
      {!isLoggedIn && (
        <p>
          If you want to see a your phone numbers, please to{" "}
          <Link to="/register" className={css.link}>
            Register
          </Link>{" "}
          or{" "}
          <Link to="/login" className={css.link}>
            Login
          </Link>{" "}
          in this application.
        </p>
      )}
    </main>
  );
}
