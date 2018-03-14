import React, { Component } from 'react';
import PropTypes from 'prop-types';

ccomponentWillMount() {
    fetch('https://opentdb.com/api.php?amount=10&category=11&type=boolean')
      .then((response) => {
        return response.json()
        console.log(response);
      })
      .then((videos) => {
        this.setState({ videos: videos })
      })
  }

export default TriviaApi;