import React, { Component } from "react";
import PropTypes from "prop-types";
import { withAlert } from 'react-alert';
import { Grid, Row, Col } from "react-flexbox-grid";
import "./style.css";
import Preguntas from './../Preguntas';

class Botones extends Component {

  constructor(props){
    super(props);
    this.answerTrue = this.answerTrue.bind(this);
    this.answerFalse = this.answerFalse.bind(this);
    this.anotherQuestion = this.anotherQuestion.bind(this);
    this.state = {
      respuesta: null,
      isTrue: null,
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

  anotherQuestion() {
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

  answerTrue() {
    const { respuesta } = this.state;
    this.setState({isTrue: true});
    console.log('state', this.state.isTrue);
    if(respuesta === 'True'){
      console.log('es true');
      alert('Respuesta Correcta')
    }else{
      console.log('es false');
      alert('Respuesta Incorrecta');
    }
    
  }

  answerFalse() {
    const { respuesta } = this.state;
    this.setState({isTrue: false});
    if(respuesta === 'False'){
      console.log('es false');
      alert('Respuesta Correcta')
    }else{
      console.log('es true');
      alert('Respuesta Incorrecta');
    }
  }

  render() {
    const isTrue = this.state.isTrue;
   // const { isTrue } = this.state;
    //const { answerTrue } =this.props;
    //const { answerFalse } =this.props;
    if (isTrue) {
      console.log(isTrue, 'is True');
    } else {
      console.log(isTrue, 'is False');
    }
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

