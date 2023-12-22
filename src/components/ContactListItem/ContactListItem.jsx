import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import css from "./ContactListItem.module.css";

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li className={css.contactsListItem}>
      <div className={css.contactsCoverDiv}>
        <img
          className={css.contactAvatar}
          src={contact.avatar}
          alt={contact.name}
        />
        <div className={css.contactsCoverInfo}>
          <h4 className={css.contactsCoverTitle}>Additional info</h4>
          <p className={css.contactsCoverText}>Country: {contact.country}</p>
          <p className={css.contactsCoverText}>City: {contact.city}</p>
          <p className={css.contactsCoverText}>Street: {contact.street}</p>
        </div>
      </div>
      <div className={css.contactsWrap}>
        <h3 className={css.contactName}>{contact.name}</h3>
        <p className={css.contactPhone}>{contact.phone}</p>
        <button
          type="button"
          className={css.deleteBtn}
          onClick={() => handleDelete()}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactListItem;
