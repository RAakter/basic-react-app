
const name = "Rezowana Akter";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth() + 1;
const yearName = date.getFullYear();

function Card(props){
    const {titleTxt, desText} = props;
    return <div className='card'>
      <p className='cardTitle'>{titleTxt}</p>
      <p className='cardDes'>{desText}</p>
      <p className='cardDes'>Started on: {dateName + "/0" +monthName+ "/" + yearName}</p>
    
    {/* <p className='cardTitle'>{name}</p>
    <p className='cardDes'>Started on: {dateName + "/0" +monthName+ "/" + yearName}</p>
    <p className='cardFooter'>{name}</p> */}
  </div>
 }

 export default Card;