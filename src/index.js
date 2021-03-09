import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Imagefeed from './Imagefeed';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="wholediv">
    <div className="heading">
      Photo Feed
    </div>
    <Imagefeed />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
