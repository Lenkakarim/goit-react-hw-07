import { addContact } from "../../redux/contactsOps";
import s from "./ContactForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "The name is too short!")
    .max(50, "The name is too long!")
    .required("Required field"),
  number: Yup.string()
    .min(3, "The number is too short!")
    .max(20, "The number is too long!")
    .required("Required field"),
});

const initialValues = {
  name: "",
  number: "",
  loading: false,
  error: null,
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );
    resetForm();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={s.form}>
          <label htmlFor="name" className={s.label}>
            <span>Name</span>
            <Field
              type="text"
              name="name"
              id="name"
              className={s.input}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={s.err}
            />
          </label>
          <label htmlFor="number" className={s.label}>
            <span>Number</span>
            <Field
              name="number"
              type="tel"
              id="number"
              className={s.input}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={s.err}
            />
          </label>

          <button className={s.btn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
