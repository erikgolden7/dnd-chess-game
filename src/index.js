import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import './index.css';

ReactDOM.render(
  <Board knightPosition={[7, 4]} />,
  document.getElementById('root')
);
