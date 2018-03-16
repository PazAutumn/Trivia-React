import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./style.css";

class Preguntas extends Component {

  constructor() {
    super();
    this.answerTrue = this.answerTrue.bind(this);
    this.answerFalse = this.answerFalse.bind(this);
    this.state = {
      questions: null,
      anotherQuestions: null,
      respuesta: null,
      isTrue: null,
      click: false
    }
  }

  componentWillMount() {
      fetch('https://opentdb.com/api.php?amount=10&category=11&type=boolean')
      .then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        let random = Math.round(Math.random()*9);
        console.log('random', random);
        let currentQuestion = data.results[random];
        console.log(currentQuestion);
        let questions = currentQuestion.question;
        /*console.log('pregunta de questions', questions);*/
        let respuesta = currentQuestion.correct_answer;
        console.log('pregunta', questions, 'respuesta correcta', respuesta);
        this.setState({questions})
        this.setState({respuesta});
        this.setState({random});
      })
    }

    anotherQuestion() {
      fetch('https://opentdb.com/api.php?amount=10&category=11&type=boolean')
      .then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        let random = Math.round(Math.random()*9);
        console.log('random', random);
        let currentQuestion = data.results[random];
        console.log(currentQuestion);
        let anotherQuestions = currentQuestion.question;
        /*console.log('pregunta de questions', questions);*/
        let respuesta = currentQuestion.correct_answer;
        console.log('pregunta', anotherQuestions, 'respuesta correcta', respuesta);
        this.setState({anotherQuestions})
        this.setState({respuesta});
        this.setState({random});
      })
    }

    answerTrue() {
    const { respuesta } = this.state;
    console.log('state', this.state.respuesta);
    this.setState({isTrue: true});
    this.setState({click:true});
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
    this.setState({click:true});
    if(respuesta === 'False'){
      console.log('es false');
      alert('Respuesta Correcta')
    }else{
      console.log('es true');
      alert('Respuesta Incorrecta');
    }
  }

  render() {
    /*console.log('Render');*/
    const { questions } = this.state;
    const { anotherQuestions } =this.state;
    const { respuesta } = this.state;
    const { click } = this.state;
    const { anotherQuestion } = this.props;
    return(
      <div className="questions-cont">
        <Grid>
          <Row>
            <Col xs={12}>
            { click === true ? <p>{anotherQuestions}</p> :
              <p>{questions}</p>
            }
            </Col>
          </Row>
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

Preguntas.propTypes = {
  respuesta: PropTypes.string,
  answerTrue: PropTypes.func,
  answerFalse: PropTypes.func,
  anotherQuestion: PropTypes.func,
};

export default Preguntas;