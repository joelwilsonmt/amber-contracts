import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import web3 from "./../../utils/web3.js";

import avatar from "assets/img/faces/marc.jpg";
console.log(web3.eth);
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
  }
};

const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_depositor",
        type: "address"
      }
    ],
    name: "creator",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_newEscrow",
        type: "address"
      }
    ],
    name: "NewContract",
    type: "event"
  }
];

class CreateContract extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const Contract = new web3.eth.Contract(abi);
    console.log("contract, ", Contract);
  };
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <form onSubmit={this.handleSubmit}>
              <Card>
                <CardHeader color="primary">
                  <h4>Add a New Escrow Contract</h4>
                  <p>Fill in the payor's public ETH address here</p>
                </CardHeader>
                <CardBody>
                  <label>
                    Payor's ETH Address:
                    <input
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                </CardBody>
                <CardFooter>
                  <input type="submit" value="Submit" />
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default CreateContract;
