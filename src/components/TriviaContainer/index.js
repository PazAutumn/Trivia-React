import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./index.css";
import Titulo from "./Titulo";
import Preguntas from "./Preguntas";

const TriviaContainer = () => (
  <div className="Contenedor">
    <Grid>
      <Row>
        <Col xs={12}>
          <Preguntas />
        </Col>
      </Row>
    </Grid>
  </div>
);

TriviaContainer.propTypes = {};

export default TriviaContainer;