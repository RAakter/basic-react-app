import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './Components/Card';
import Data from './data.json'

function App() {
  // console.log(Data);
  let items = [];

  // for(let x=0; x<Data.length; x++){
  //   items.push( <Card titleTxt={Data[x].title} desText={Data[x].desc}/>)
  // }

  //data mapping
   items = Data.map((item, index)=> <Card key={index} titleTxt={item.title} desText={item.desc}/>)
    return <div>
      <h1 className='headingStyle'>Todo App</h1>
      {/* <Card titleTxt="My Card 1" desText="First Description"/>
      <Card titleTxt="My Card 2" desText="Second Description"/>
      <Card titleTxt="My Card 3" desText="Third Description"/> */}
      {items}
    </div>
}

export default App;
