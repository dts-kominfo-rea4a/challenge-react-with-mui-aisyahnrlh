import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Contact = ({ data }) => {
  const { name, phone, email, photo } = data;
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={name} src={photo} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              {phone}
              <br />
              {email}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default Contact;
