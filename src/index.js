import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

class Root extends Component {
  render () {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    )
  }
}

render(<Root />, document.getElementById('root'))

ReactDOM.render(
<App />,
document.getElementById('root'));
registerServiceWorker();
