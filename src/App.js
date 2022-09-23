import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import contactsJSON from "./data/contacts.json";
import Header from "./components/Header";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";

const App = () => {
  const [contacts, setContacts] = useState(contactsJSON);

  const addContact = (newContact) => {
    setContacts((state) => [...state, newContact]);
  };

  return (
    <div className="App">
      <Header />
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <ContactForm addContact={addContact} />
        </Grid>
        <Grid item xs={12} md={6}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {contacts.map((contact) => (
              <Contact data={contact} key={contact.phone} />
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
