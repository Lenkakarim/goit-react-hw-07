import s from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={s.item}>
      <div className={s.card}>
        <p className={s.name}>
          <span>
            <FaUser size={20} />
          </span>
          {contact.name}
        </p>
        <p className={s.phone}>
          <span>
            <FaPhone size={20} />
          </span>
          {contact.number}
        </p>
      </div>
      <button
        type="button"
        className={s.btn}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
