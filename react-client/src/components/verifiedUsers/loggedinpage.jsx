import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SvgIconsSize from "../video.jsx";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import TextMobileStepper from "../imagebar.jsx";
import SingleLineGridList from "../GridList.jsx";
import SwipeableTextMobileStepper from "../background.jsx";

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

      <SvgIconsSize />
      <SingleLineGridList />
      <SimpleBottomNavigation />
    </div>
  );
}
export default UploadButtons;