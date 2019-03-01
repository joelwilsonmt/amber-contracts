import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "../../components/CustomButtons/Button.jsx";
import ServiceAgreement from "./ServiceAgreement.jsx";
import RainyDay from "./RainyDay.jsx"
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import routes from "../../routes.js";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Service Contract
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              This contract allows you enter into a service agreement with
              another party. The person performing the service creates the
              contract. Once it’s deployed the person receiving the service will
              add funds to the contract. Once the work is completed, both
              parties will finalize the contract, via your dashboards and funds
              will be released.
            </Typography>
          </ExpansionPanelDetails>

          <NavLink to="/ServiceAgreement" component={ServiceAgreement}>
            <Button
              variant="outlined"
              size="medium"
              color="warning"
              className={classes.centered}
            >
              Create This Contract
            </Button>
          </NavLink>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Rainy Day Contract
            </Typography>
            <Typography className={classes.secondaryHeading} />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              This contract allows you to hold money for a rainy day in which
              ever city you specify. Once the weather report shows that it’s
              raining, the money is transferred into your account and you are
              free to enjoy your rainy day.
            </Typography>
          </ExpansionPanelDetails>
          <NavLink to="/RainyDay" component={RainyDay}>
          <Button
            variant="outlined"
            size="medium"
            color="warning"
            justify="center"
            className={classes.centered}
          >
            Create This Contract
          </Button>
          </NavLink>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledExpansionPanels);
