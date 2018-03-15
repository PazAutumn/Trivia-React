import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./style.css";

const Titulo = Titulo => (
  <div className="App-title">
  <Grid>
      <Row>
        <Col xs={12}>
        <p>Let's Start the Game</p>
        </Col>
      </Row>
    </Grid>
    
  </div>
);

export default Titulo;
