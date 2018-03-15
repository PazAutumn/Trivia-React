import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TriviaApi extends Component {

  constructor() {
    super();
    this.state = {
      questions: [],
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
      })
      this.setState({questions});
      console.log('state', this.state.questions);
    }

  render(){
    return(

      <div className="question-container">
        {this.state.questions}
      </div>
    )
  }

}
