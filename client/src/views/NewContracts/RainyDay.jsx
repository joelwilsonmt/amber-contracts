import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelView from "./ExpansionPanelView.jsx";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { NavLink } from "react-router-dom";
import routes from "../../routes.js";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  textField: {
    marginLeft: "0",
    marginRight: "0",
  },
  dense: {
    marginTop: 16,
}
};

class RainyDay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="danger">
                <h4>Rainy Day Contract</h4>
                <p>Create New</p>
              </CardHeader>
              <CardBody>
               I, (input public key from database) am going to deposit
               <br/>
               <TextField
                     id="ETH"
                     label="Ether"
                     margin="normal"
                     variant="outlined"
                     InputProps={{
                     startAdornment: <InputAdornment position="start">Ξ</InputAdornment>,
                   }}/>
                   <br/>
                   into this contract.
                   <br/>
                   <br/>
                   <br/>
                   When it rains in
                   <br/>
               <TextField
                     id="Location"
                     label="Location"
                     margin="normal"
                     variant="outlined"
                   />
              <br/>
              The money will be released from the contract into my account.


              </CardBody>
              <CardFooter>
                <Button color="danger">Deploy Contract</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(RainyDay);
