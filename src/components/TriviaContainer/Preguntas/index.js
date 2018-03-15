import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./style.css";

class Preguntas extends Component {

  constructor() {
    super();
    this.state = {
      questions: null,
    }
  }

  componentWillMount() {
      fetch('https://opentdb.com/api.php?amount=10&category=11&type=boolean')
      .then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        let questions = data.results[0].question;
        console.log(questions);
        this.setState({questions});
      })
    }

  render(){
    console.log('Render');
    const { questions } = this.state;
    return(
      <div className="questions-cont">
        <Grid>
          <Row>
            <Col xs={12}>
              <p>{questions}</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

Preguntas.propTypes = {};

export default Preguntas;