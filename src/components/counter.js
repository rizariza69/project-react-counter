import React from "react";
import { Button, Container } from "semantic-ui-react";

export class Counter extends React.Component {
  state = {
    counter: 0
  };

  onClick = value => {
    this.setState({
      counter: this.state.counter + value
    });
  };

  render() {
    const h1Style = {
      fontSize: "100px",
      marginTop: "100px"
    };
    const center = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    };
    const rowButton = {
      display: "flex",
      flexDirection: "row"
    };

    const button = {
      fontSize: "30px",
      marginTop: "20px",
      marginBottom: "20px"
    };

    return (
      <Container>
        <div style={center}>
          <h1 style={h1Style}>{this.state.counter}</h1>
          <div style={rowButton}>
            <Button
              style={button}
              color="yellow"
              onClick={() => this.onClick(1)}
            >
              +
            </Button>
            <Button style={button} color="red" onClick={() => this.onClick(-1)}>
              -
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}
