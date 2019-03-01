import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from "assets/jss/material-dashboard-react.jsx";

const customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: 'info'
    }
  },
  underlineError: {
    "&:after": {
      borderColor: dangerColor
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor
    }
  },
  labelRoot: {
    ...defaultFont,
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857"
  },
  labelRootError: {
    color: dangerColor
  },
  labelRootSuccess: {
    color: successColor
  },
  feedback: {
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: "0",
    display: "block",
    width: "24px",
    height: "0",
    textAlign: "center",
    pointerEvents: "none"
  },
  marginTop: {
    marginTop: "0px"
  },
  formControl: {
    paddingBottom: "10px",
    margin: "0 0 0 0",
    position: "relative"
  }

};

export default customInputStyle;
