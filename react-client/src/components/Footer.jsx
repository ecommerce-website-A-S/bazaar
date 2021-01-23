import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddIcCallSharpIcon from "@material-ui/icons/AddIcCallSharp";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import AlternateEmailSharpIcon from "@material-ui/icons/AlternateEmailSharp";

const useStyles = makeStyles({
  root: {
    width: 1350,
    backgroundColor: "000000",
  },
});

function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      style={{ background: "#4dd0e1" }}
    >
      <BottomNavigationAction
        label="TEL:0798654325"
        icon={<AddIcCallSharpIcon />}
      />
      <BottomNavigationAction
        label="Email:faz3etak@gmail.com"
        icon={<AlternateEmailSharpIcon />}
      />
      <BottomNavigationAction label="Amman.Jordan" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
export default SimpleBottomNavigation;
