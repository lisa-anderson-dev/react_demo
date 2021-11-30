import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
//import AppH1 from './App_h1';
import FuncComponent from './component/TodoContainerFunc';
import ClassComponent from './component/TodoContainer';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <FuncComponent />
    <ClassComponent />
    <App />
    {/*<AppH1 />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
