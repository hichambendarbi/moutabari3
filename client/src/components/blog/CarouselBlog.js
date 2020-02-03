import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import  ScreenF from '../../assets/img/Screenshot_20190517-163727.png';
import ScreenF2 from '../../assets/img/Screenshot_20190518-143937.png';
import ScreenF1 from '../../assets/img/Screenshot_20190816-125628.png';
import ScreenF3 from '../../assets/img/Screenshot_20190725-204909.png';
import ScreenF4 from '../../assets/img/S1.png';
import ScreenF5 from '../../assets/img/S2.png';
import ScreenF6 from '../../assets/img/S3.png';
import ScreenF7 from '../../assets/img/S4.png';
import ScreenF8 from '../../assets/img/S5.png';

import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  

  {
    label: 'Urgent je cherches de donneurs groupe sanguins O-',
    imgPath: ScreenF,
  },
  {
    label: ' les gens de Fes une fille hospitaliser a hopitale CHU est besoin des donneurs de groupe sanguin A-',
    imgPath: ScreenF1,
  },
  {
    label: 'عاجل نحتاج متبرعين فصيلة الدم O+',
    imgPath: ScreenF2,
  },
  {
    label: 'Urgent besoin de donneur groupe sanguin AB+',
    imgPath: ScreenF3,
  },
  {
    label: 'Urgent besoin de donneur groupe sanguin AB+',
    imgPath: ScreenF4,
  },
  {
    label: 'Urgent besoin de donneur groupe sanguin AB+',
    imgPath: ScreenF5,
  },
  {
    label: 'Urgent besoin de donneur groupe sanguin AB+',
    imgPath: ScreenF6,
  },
  {
    label: 'Urgent besoin de donneur groupe sanguin AB+',
    imgPath: ScreenF7,
  },
  {
    label: 'Urgent besoin de donneur groupe sanguin AB+',
    imgPath: ScreenF8,
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 350,
    border: '3px solid #C42020',
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
}));

function CarouselBlog() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = tutorialSteps.length;

  // const handleNext = () => {
  //   setActiveStep(prevActiveStep => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep(prevActiveStep => prevActiveStep - 1);
  // };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      /> */}
    </div>
  );
}

export default CarouselBlog;