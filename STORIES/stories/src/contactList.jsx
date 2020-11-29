import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ViewCarouselRoundedIcon from "@material-ui/icons/ViewCarouselRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    minWidth: 350,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  bordering: {
    border: "0.1px solid lightBlue",

    backgroundColor: "#C4E0E5",
    height: 75,
  },
}));

export default function InteractiveList(props) {
  let contacts = props.contacts;
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div>
          <List>
            {contacts.map((contact) => (
              <ListItem className={classes.bordering}>
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={contact} />

                <IconButton edge="end" aria-label="delete">
                  <ViewCarouselRoundedIcon
                    onClick={() => {
                      props.displayCarsoul(contact);
                      console.log(contact);
                    }}
                  />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </>
  );
}
