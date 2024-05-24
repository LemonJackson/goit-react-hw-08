import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";

import * as Yup from "yup";

import { addContact } from "../../redux/contactsOps";

import css from "./ContactForm.module.css";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, <span className={css.error}>Too Short!</span>)
    .max(50, <span className={css.error}>Too Long!</span>)
    .required(<span className={css.error}>Required</span>),
  number: Yup.number().required(<span className={css.error}>Required</span>),
});

const initialValues = { name: "", number: "" };

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleAddContact = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAddContact}
      validationSchema={FormSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" placeholder="Antony Robins" />
          <ErrorMessage name="name" as="span" />
        </div>

        <div className={css.field}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="number" name="number" placeholder="1234567" />
          <ErrorMessage name="number" as="span" />
        </div>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
