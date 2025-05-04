import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const getVisibleContacts = (contacts, filterName) => {
  const normalFilter = filterName.toLowerCase().trim();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalFilter)
  );
};
const ContactList = () => {
  const contacts = useSelector(
    (state) => state.contacts.items
  );
  const filter = useSelector(
    (state) => state.filter?.name || ""
  );
  const visibleContacts = getVisibleContacts(
    contacts,
    filter
  );
  return (
    <ul className={s.list}>
      {visibleContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
