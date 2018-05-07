// React
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import Root from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
