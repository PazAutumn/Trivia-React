import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./style.css";

const Score = () => (
  <div className="score">
    <Grid>
      <Row>
        <Col xs={12}>
          <p>Score Aqui</p>
        </Col>
      </Row>
    </Grid>
  </div>
);

Score.propTypes = {};

export default Score;