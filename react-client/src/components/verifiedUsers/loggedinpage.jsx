import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SvgIconsSize from "../video.jsx";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import TextMobileStepper from "../imagebar.jsx";
import SingleLineGridList from "../GridList.jsx";
import SwipeableTextMobileStepper from "../background.jsx";
import Grid from '@material-ui/core/Grid';

import Navbar3 from "./navbar3.jsx";

import SimpleBottomNavigation from "../footer.jsx";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));
//our home page of the verified users
function UploadButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Navbar3 />

    <SwipeableTextMobileStepper />
<div     style ={{  backgroundColor : '#92a8d1' ,  borderRadius: '55px ' , border : '18px ' ,   border : 'solid  '}} >
    <Grid container  >
<Grid  item  style ={{margin: "4%"  , marginLeft : '14%'}}>
    <div class="gallery"   >
<a target="_blank" href='https://www.miva.com/blog/wp-content/uploads/2020/02/012020_BLOG_Start-Ecommerce-Business-Design-1200x758.png'>
  <img src="https://www.miva.com/blog/wp-content/uploads/2020/02/012020_BLOG_Start-Ecommerce-Business-Design-1200x758.png"   width="200" height="200"/>
</a>
<div class="desc">
Easy to communicate</div>
</div>
</Grid>
<Grid  item  style ={{margin: "4%" }}>
<div class="gallery">
<a target="_blank" href="https://www.superiortechnology.com/wp-content/uploads/2018/10/How-to-Keep-Your-E-Commerce-System-Funtioning-at-Optimum-Capacity.png">
  <img src="https://www.superiortechnology.com/wp-content/uploads/2018/10/How-to-Keep-Your-E-Commerce-System-Funtioning-at-Optimum-Capacity.png" alt="Forest" width="200" height="200"/>
</a>
<div class="desc">
More comfortable</div>
</div>
</Grid>
<Grid  item  style ={{margin: "4%" }}>

<div class="gallery">
<a target="_blank" href="https://manychat.com/blog/wp-content/uploads/2020/01/using-a-chatbot-for-your-e-commerce-store-5-tips-for-getting-started.jpg">
  <img src="https://manychat.com/blog/wp-content/uploads/2020/01/using-a-chatbot-for-your-e-commerce-store-5-tips-for-getting-started.jpg" alt="Northern Lights" width="200" height="200"/>
</a>
<div class="desc">
Saving Money </div>
</div>
</Grid>
<Grid  item style ={{margin: "4%" }}>
<div class="gallery" >
<a target="_blank" href="https://st2.depositphotos.com/1310390/5486/v/450/depositphotos_54864929-E-commerce-or-online-shopping-concept.jpg">
  <img src="https://st2.depositphotos.com/1310390/5486/v/450/depositphotos_54864929-E-commerce-or-online-shopping-concept.jpg" alt="Mountains" width="200" height="200"/>
</a>
<div class="desc"  >With delivery services</div>
</div>
</Grid>
</Grid>
</div>
<br/>
    <br/>
    <br/>
    <SingleLineGridList />
    <br/>
    <br/>
    <br/>
    <SvgIconsSize />
    <SimpleBottomNavigation />
  </div>
  );
}
export default UploadButtons;