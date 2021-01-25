import { NavLink } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Items from "./Items.jsx";
import signIN from "./signIN.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(10),
    color: "#000000",

  },
  title: {
    flexGrow: 1,
  },
}));
//declaring our nav bar of our home page for the unauthrized users
function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "gray" }}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}

          <Typography variant="h6" className={classes.title}>
            <nav className="navBar">
              <NavLink to="/" className={classes.menuButton}>
                {" "}
                Home{" "}
              </NavLink>

              <NavLink to="/Items" className={classes.menuButton}>
                {" "}
                Items{" "}
              </NavLink>
              <NavLink to="/signIN" className={classes.menuButton}>
                {" "}
                Sign In{" "}
              </NavLink>
              <NavLink to="/SignUP" className={classes.menuButton}>
                {" "}
                Sign Up{" "}
              </NavLink>
            </nav>
          </Typography>
          <Typography variant="h6"> BAZZAR </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
