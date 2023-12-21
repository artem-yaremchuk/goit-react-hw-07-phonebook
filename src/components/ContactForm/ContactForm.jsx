import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/operations";
import { selectItems } from "../../redux/selectors";
import Notiflix from "notiflix";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const [data, setData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (data.name.trim() === "" || data.phone.trim() === "") {
      Notiflix.Notify.warning("Fill in the fields");
      return;
    }
    const sameNames = items.some(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase(),
    );
    if (sameNames) {
      Notiflix.Notify.info(`${data.name} is already in contacts`);
      return;
    }
    dispatch(addContact(data));
    reset();
  };

  const reset = () => {
    setData({ name: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formField}>
        <label htmlFor="exampleInputName" className={css.formLabel}>
          Name
        </label>
        <input
          type="text"
          name="name"
          className={css.formInput}
          id="exampleInputName"
          value={data.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.formField}>
        <label htmlFor="exampleInputNumber" className={css.formLabel}>
          Number
        </label>
        <input
          type="tel"
          name="phone"
          className={css.formInput}
          id="exampleInputNumber"
          value={data.phone}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className={css.formBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
