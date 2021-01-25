import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
    "https://cdn4.vectorstock.com/i/1000x1000/21/53/shopping-bazar-logo-design-concept-for-inspiration-vector-30492153.jpg"



     ,
  },
  {
    label: "Bird",
    imgPath:
      "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F887294%252Fcc7a8372-57c9-40e9-8f03-353d4d627153.jpeg%252F950x534__filters%253Aquality%252880%2529.jpeg",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
       "https://media.istockphoto.com/photos/women-walking-with-shopping-bags-in-the-city-picture-id1084070220?k=6&m=1084070220&s=612x612&w=0&h=pp7mjtHcHftYW0iVp67ITs0SSfWEiKCwv7OKENN6e60=",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://previews.123rf.com/images/hasloo/hasloo1407/hasloo140700505/29846097-woman-shopping-concept-collage-with-different-shopping-symbols-around-girl.jpg",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://image.shutterstock.com/z/stock-photo-happy-asian-shopping-girls-on-white-background-176280200.jpg  ",
  },



];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1900,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    //paddingLeft: theme.spacing(50),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 700,
    maxWidth: 1900,
    //paddingLeft: theme.spacing(15),
    overflow: "hidden",
    display: "block",
    width: "100%",
  },
  bar: {
    paddingLeft: theme.spacing(10),
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
