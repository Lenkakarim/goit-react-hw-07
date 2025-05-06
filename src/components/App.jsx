import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import {
  selectError,
  selectLoading,
} from "../redux/contactsSlice";
import Loader from "./Loader/Loader";
import Toast from "./Toast/Toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      <ContactList />
      <Toast
        message={
          error?.message || "Oops! Failed to load contacts."
        }
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </div>
  );
}

export default App;
