import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/auth/operations";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import toast from "react-hot-toast";
import * as Yup from "yup";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const nickNameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    const userInfo = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(userRegister(userInfo))
      .then(() => {
        toast.success("Registration successful!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
    actions.resetForm();
  };

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, <span className={css.error}>Too Short!</span>)
      .required(<span className={css.error}>Required</span>),
    email: Yup.string()
      .min(3, <span className={css.error}>Too Short!</span>)
      .required(<span className={css.error}>Required</span>),
    password: Yup.string()
      .min(6, <span className={css.error}>Too Short!</span>)
      .max(20, <span className={css.error}>Too Long!</span>)
      .required(<span className={css.error}>Required</span>),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor={nickNameId}>Username</label>
          <Field type="text" name="name" id={nickNameId} />
          <ErrorMessage name="name" as="span" />
        </div>

        <div className={css.field}>
          <label htmlFor={emailId}>Email</label>
          <Field type="text" name="email" id={emailId} />
          <ErrorMessage name="email" as="span" />
        </div>

        <div className={css.field}>
          <label htmlFor={passwordId}>Password</label>
          <Field type="text" name="password" id={passwordId} />
          <ErrorMessage name="password" as="span" />
        </div>
        <button className={css.btn} type="submit">
          Sign up
        </button>
      </Form>
    </Formik>
  );
}
