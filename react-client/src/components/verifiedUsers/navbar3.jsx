import { NavLink } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // color: "#000000",
  },
  menuButton: {
    marginRight: theme.spacing(10),
    color: "#000000",

  },
  title: {
    flexGrow: 1,
  },
}));
//declaring our nav bar inside the homepage of our verfied users after he sign in
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
              <NavLink to="/loggedIn" className={classes.menuButton}>
                {" "}
                Home{" "}
              </NavLink>

              <NavLink to="/Items3" className={classes.menuButton}>
                {" "}
                Items{" "}
              </NavLink>

              <NavLink to="/profile" className={classes.menuButton}>
                {" "}
                Profile{" "}
              </NavLink>
              <NavLink to="/SignOut" className={classes.menuButton}>
                {" "}
                Sign Out{" "}
              </NavLink>
            </nav>
          </Typography>
          <Typography variant="h6"> Faz3etak </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;