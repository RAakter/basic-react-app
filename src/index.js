import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const name = "Rezowana Akter";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth() + 1;
const yearName = date.getFullYear();
const root = ReactDOM.createRoot(document.getElementById('root'));

// const headingStyle = {
//   backgroundColor: "purple",
//   color: "white",
//   textAlign: "center",
//   padding: "15px"
// }

root.render(
  <div>
    <h1 className="headingStyle largeText">Todo App</h1>
    <div className='card'>
      <p className='cardTitle'>{name}</p>
      <p className='cardDes'>Started on: {dateName + "/0" +monthName+ "/" + yearName}</p>
      <p className='cardFooter'>{name}</p>
    </div>
  </div>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
