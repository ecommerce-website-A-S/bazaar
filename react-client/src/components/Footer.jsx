import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddIcCallSharpIcon from "@material-ui/icons/AddIcCallSharp";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Grid from '@material-ui/core/Grid';

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

      style={{ background: " gray" ,width : "92% "  ,padding: "60px" , height : "100%"}}
    >
          {/* <Typography  style={{fontFamily:'Cursive' ,fontSize:'20px' }} > Stay in Touch </Typography> */}
      {/* <div>
      <Typography  style={{fontFamily:'Cursive' ,fontSize:'15px'  }}  > One of the biggest misunderstanding about  e-commerce store is that people think every e-commerce store is the same.We have made sure that Faz3a is the absolute best e-commerce storeyou can sell your items on .  </Typography>
      </div> */}
 <Grid container  >
 <Grid  item  style ={{margin: "4%"  }}>
<p>Contact Us</p>
<a href="tel:+962 7 980 7680">Call us at +962 7 980 7680   </a><br />
<a href="tel:+962 7 800 7680">Call us at +962 7 800 7680</a> <br />
<a href = "mailto:bazzar.organization@bazzar.com">bazzar.organization@bazzar.com</a>
</Grid>
<Grid  item  style ={{margin: "4%" }}>

<p>About Us</p>
<p >

 BAZZAR .One of the biggest misunderstanding about  e-commerce store
 is that people think every e-commerce store is the same.
 We have made sure that Faz3a is the absolute best e-commerce
  storeyou can sell your items on
            </p>

</Grid>

      {/* <BottomNavigationAction
        label="TEL:0798654325"


        icon={<AddIcCallSharpIcon />}
      />

      <BottomNavigationAction
        label="Email:BAZZAR@gmail.com"
        icon={<AlternateEmailSharpIcon />}
      />

      <BottomNavigationAction label="Amman.Jordan" icon={<LocationOnIcon />} /> */}
      </Grid>
    </BottomNavigation>

  );
}
export default SimpleBottomNavigation;
