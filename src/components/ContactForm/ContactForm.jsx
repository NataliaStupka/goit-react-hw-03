import { Formik, Form, Field, ErrorMessage } from "formik"; //форма
import * as Yup from "yup"; //валідація форми
import { nanoid } from "nanoid"; //id
import PropTypes from "prop-types";

import s from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  //values це initialValues
  const handleSubmit = (values, options) => {
    // console.log("name:", values.username);
    // console.log("tel:", values.tel);

    options.resetForm(); // очистка форми
    //console.log(options); //усі доступні функції

    //передає новий контакт {об'єкт}
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.tel,
    });
  };

  //початкові значення форми, (прописуємо у Formik)
  const initialValues = {
    username: "",
    tel: "",
  };

  // валідация, прописуємо у Formik
  const contactSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(50, "Поле не може бути більше ніж 50 символи")
      .required("Required"),
    tel: Yup.number()
      .positive("Число має бути додатним")
      .integer("Число має бути цілим")
      .required("Required"),
  });

  return (
    <div className={s.wrapper}>
      {/* Formik має 2 обов'язкові поля: onSubmit={}, obj={initialValues}, +validationSchema */}
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={contactSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field type="text" name="username" />
            <ErrorMessage
              name="username"
              component="span"
              className={s.error}
            />
          </label>

          <label className={s.label}>
            <span>Number</span>
            <Field type="text" name="tel" />
            <ErrorMessage name="tel" component="span" className={s.error} />
          </label>

          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

ContactForm.prototype = {
  onAdd: PropTypes.func.isRequired,
};

export default ContactForm;
