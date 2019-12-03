import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import configStore from './store/config-store';

const store = configStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));