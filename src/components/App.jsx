import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operations";
import { selectItems, selectIsLoading, selectError } from "../redux/selectors";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Loader from "./Loader/Loader";
import Notiflix from "notiflix";

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    Notiflix.Notify.failure("Oooops, something went wrong...");
  }

  return (
    <div>
      <h1
        style={{
          fontWeight: 500,
          lineHeight: "1.5",
          textAlign: "center",
          letterSpacing: "0.02em",
          color: "#2E2F42",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        Phonebook
      </h1>
      <ContactForm />

      <h2
        style={{
          fontWeight: 500,
          lineHeight: "1.5",
          textAlign: "center",
          letterSpacing: "0.02em",
          color: "#2E2F42",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        Contacts
      </h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {items.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
