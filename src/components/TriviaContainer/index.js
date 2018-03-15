import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./index.css";
import Titulo from "./Titulo";
import Preguntas from "./Preguntas";
import Botones from "./Botones";
import Score from "./Score";



const TriviaContainer = () => (
      <div class="Contenedor">
        <Grid>
          <Row>
            <Col xs={12}>
              <Titulo />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Preguntas>
              </Preguntas>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Score />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Botones />
            </Col>
          </Row>
        </Grid>
      </div>
  )


TriviaContainer.propTypes = {

};

export default TriviaContainer;
