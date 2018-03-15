import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./style.css";

const Botones = () => (
  <div className="botones">
    <Grid>
      <Row>
        <Col xs={6}>
          <input type="button" value="True"/>
        </Col>
        <Col xs={6}>
          <input type="button" value="False"/>
        </Col>
      </Row>
    </Grid>
  </div>
);

Botones.propTypes = {};

export default Botones;