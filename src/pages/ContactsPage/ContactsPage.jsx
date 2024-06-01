import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";

import { selectLoader } from "../../redux/auth/selectors";

import css from "./ContactsPage.module.css";

export default function ContactPage() {
  const loading = useSelector(selectLoader);

  return (
    <main className={css.main}>
      <h1 className={css.title}>Contacts</h1>
      <section className={css.section}>
        <ContactForm />
        <SearchBox />
        {loading ? <Loader /> : <ContactList />}
      </section>
    </main>
  );
}
