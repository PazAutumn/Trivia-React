import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./style.css";

class Botones extends Component {

  constructor(){
    super();
    this.state = {
      respuesta: null,
    }
  }

  componentWillMount(){
    fetch('https://opentdb.com/api.php?amount=10&category=11&type=boolean')
      .then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        let respuesta = data.results[0].correct_answer;
        console.log(respuesta);
        this.setState({respuesta});
      })
    }

  answerTrue() {
    const { respuesta } = this.state;
    const {  }
  }


  render() {
    return(
      <div class="botones">
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
    )
  }
}



Botones.propTypes = {};

export default Botones;