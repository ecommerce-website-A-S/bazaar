import AccountBalanceSharpIcon from "@material-ui/icons/AccountBalanceSharp";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StorefrontSharpIcon from "@material-ui/icons/StorefrontSharp";
import AirplanemodeActiveRoundedIcon from "@material-ui/icons/AirplanemodeActiveRounded";

const useStyles = makeStyles({
  root: {
    width: 1350,
  },
});

function SimpleSponsersNavigation() {
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
    >
      <BottomNavigationAction
        label="ABOUD Bank"
        icon={<AccountBalanceSharpIcon />}
      />
      <BottomNavigationAction label="SARA" icon={<StorefrontSharpIcon />} />
      <BottomNavigationAction
        label="RAHEMA Airlines"
        icon={<AirplanemodeActiveRoundedIcon />}
      />
    </BottomNavigation>
  );
}

export default SimpleSponsersNavigation;
