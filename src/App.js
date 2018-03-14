import React, { Component } from "react";
import Logo from "./components/Logo";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Grid, Row, Col } from "react-flexbox-grid";

import "./App.css";
import TriviaContainer from "./components/TriviaContainer";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="App">
                <header className="App-header">
                  <Logo />
                  <h1 className="App-title">Let's Start The Game</h1>
                </header>
              </div>
            </Col>
          </Row>
          <Row>
          <Col xs={12}>
              <div>
                  <TriviaContainer />
              </div>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
