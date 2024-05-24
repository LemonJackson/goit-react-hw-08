import { IoPersonSharp } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <p className={css.field}>
        <IoPersonSharp />
        {contact.name}
      </p>
      <p className={css.field}>
        <FaSquarePhone />
        {contact.number}
      </p>
      <button
        className={css.btn}
        type="button"
        name="delete"
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
}
