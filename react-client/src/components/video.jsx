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
    width: 1950,

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
      <BottomNavigationAction  style ={{ maginRight : "242px "}}
        label="Jordan Islamic Bank"
        icon={<AccountBalanceSharpIcon />}
      />
       <BottomNavigationAction
        label=" International Bank"
        icon={<AccountBalanceSharpIcon />}
      />
       <BottomNavigationAction
        label="Islamic  Arab Bank"
        icon={<AccountBalanceSharpIcon />}
      />
       <BottomNavigationAction
        label="Bank"
        icon={<AccountBalanceSharpIcon />}
      />
       <BottomNavigationAction
        label="Bank al Etihad"
        icon={<AccountBalanceSharpIcon />}
      />
      <BottomNavigationAction label="Shop" icon={<StorefrontSharpIcon />} />
      <BottomNavigationAction label="Shop" icon={<StorefrontSharpIcon />} />
      <BottomNavigationAction
        label="Airlines"
        icon={<AirplanemodeActiveRoundedIcon />}
      />
      <BottomNavigationAction
        label="Airlines"
        icon={<AirplanemodeActiveRoundedIcon />}
      />

    </BottomNavigation>
  );
}

export default SimpleSponsersNavigation;
