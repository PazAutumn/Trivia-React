import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./style.css";

class Botones extends Component {

  constructor(props){
    super(props);
    this.answerTrue = this.answerTrue.bind(this);
    this.answerFalse = this.answerFalse.bind(this);
    this.state = {
      respuesta: null,
      isTrue: false,
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
    const { isTrue }= this.state;
    this.setState({isTrue: true});
    console.log('es true');
    { isTrue === respuesta ? <p>True</p> : <p>False</p>}
  }

  answerFalse() {
    const { respuesta } = this.props;
    this.setState({isTrue: false});
    console.log('es false');
  }

  render() {
    const { respuesta } = this.state;
    const { isTrue } = this.state;
    const { answerTrue } =this.props;
    const { answerFalse } =this.props;
    return(
      <div class="botones">
        <Grid>
          <Row>
            <Col xs={6}>
              <input type="button" value="True" onClick={this.answerTrue}/>
            </Col>
            <Col xs={6}>
              <input type="button" value="False" onClick={this.answerFalse}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}



Botones.propTypes = {
  answerTrue: PropTypes.func,
  answerFalse: PropTypes.func,
};

export default Botones;

