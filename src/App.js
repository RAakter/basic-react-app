import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './Components/Card';

function App() {
    return <div>
      <h1 className='headingStyle'>Todo App</h1>
      <Card titleTxt="My Card 1" desText="First Description"/>
      <Card titleTxt="My Card 2" desText="Second Description"/>
      <Card titleTxt="My Card 3" desText="Third Description"/>
    </div>
}

export default App;
