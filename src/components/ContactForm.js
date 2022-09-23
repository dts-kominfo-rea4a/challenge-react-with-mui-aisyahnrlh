import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const onSubmit = (e, newContact) => {
    e.preventDefault();
    addContact(newContact);
  };

  return (
    <>
      <Box
        onSubmit={(e) => onSubmit(e, newContact)}
        component="form"
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          padding: "1rem",
        }}
      >
        <Stack>
          <TextField
            id="filled-basic"
            label="Name *"
            variant="filled"
            sx={{ marginBottom: "1rem" }}
            onChange={(e) =>
              setNewContact((state) => ({ ...state, name: e.target.value }))
            }
          />
          <TextField
            id="filled-basic"
            label="Phone *"
            variant="filled"
            sx={{ marginBottom: "1rem" }}
            onChange={(e) =>
              setNewContact((state) => ({ ...state, phone: e.target.value }))
            }
          />
          <TextField
            id="filled-basic"
            label="Email *"
            variant="filled"
            sx={{ marginBottom: "1rem" }}
            onChange={(e) =>
              setNewContact((state) => ({ ...state, email: e.target.value }))
            }
          />
          <TextField
            id="filled-basic"
            label="Photo URL *"
            variant="filled"
            sx={{ marginBottom: "2rem" }}
            onChange={(e) =>
              setNewContact((state) => ({
                ...state,
                photo: e.target.value,
              }))
            }
          />
          <Button variant="text" color="info" type="submit">
            Add new
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default ContactForm;
