import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { userLogIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(userLogIn(values))
      .unwrap()
      .then((reponse) => {
        console.log(reponse);
      })
      .catch((error) => {
        console.log(error);
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <label className={css.field}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.field}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
