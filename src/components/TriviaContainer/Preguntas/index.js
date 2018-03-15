import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./style.css";

const Preguntas = () => (
  <div className="questions">
    <Grid>
      <Row>
        <Col xs={12}>
          <p># Preguntas Aqui</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p>Preguntas Aqui</p>
        </Col>
      </Row>
    </Grid>
  </div>
);

Preguntas.propTypes = {};

export default Preguntas;