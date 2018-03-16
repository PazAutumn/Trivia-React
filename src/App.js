import React, { Component } from "react";
import { withAlert } from "react-alert";
import Logo from "./components/TriviaContainer/Logo/Logo";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Grid, Row, Col } from "react-flexbox-grid";
import firebase, { auth, provider } from "./firebase.js";

import "./App.css";
import TriviaContainer from "./components/TriviaContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      items: [],
      user: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }
  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("items");
    const item = {
      title: this.state.currentItem,
      user: this.state.user.displayName || this.state.user.email
    };
    itemsRef.push(item);
    this.setState({
      currentItem: "",
      username: ""
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="App" />
            </Col>
          </Row>
        </Grid>
        <div className="app">
          <header>
            <div className="wrapper">
              <div className="App-header">
                <Logo />
              </div>
              <div className="Botones">
                {this.state.user ? (
                  <button onClick={this.logout}>Logout</button>
                ) : (
                  <button onClick={this.login}>Log In</button>
                )}
              </div>
            </div>
          </header>
          {this.state.user ? (
            <div>
              <div>
                <div className="user-profile">
                  <img src={this.state.user.photoURL} />
                </div>
                <div className="container">
                  <Row>
                    <Col xs={12}>
                      <TriviaContainer />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          ) : (
            <div className="wrapper">
              <p>You must be logged in to play our awesome game...!!!</p>
            </div>
          )}
        </div>
        <div>
          <div className="container">
            <section className="display-item">
              <div className="wrapper">
                <ul>
                  {this.state.items.map(item => {
                    return (
                      <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>
                          brought by: {item.user}
                          {item.user === this.state.user.displayName ||
                          item.user === this.state.user.email ? (
                            <button onClick={() => this.removeItem(item.id)}>
                              Remove Item
                            </button>
                          ) : null}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
