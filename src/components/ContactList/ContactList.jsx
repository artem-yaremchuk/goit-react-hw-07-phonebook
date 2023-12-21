import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import ContactListItem from "../ContactListItem/ContactListItem";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactsList}>
      {contacts.map((el) => (
        <ContactListItem key={el.id} contact={el} />
      ))}
    </ul>
  );
};

export default ContactList;
