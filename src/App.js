
import './App.css';


import React from 'react';
import Conter from './Copmenen/couter/Conter';

    class  App extends  React.Component {

 
 constructor (props){

super(props)
this.state={

  users:[
    {id:1,name:'mohammad',},
    {id:2,name:'ali', },
    {id:3,name:'acer', },
  ]
}

this.code=25

//  setTimeout(() => {
//   this.setState({

//     users:[
//       {id:1,name:'s90kart',},
//       {id:2,name:'nissan',},
//       {id:3,name:'pardo',},
//     ]
//   })
//  }, 5000);
//  setTimeout(() => {
//   this.setState({

//     users:[
//       {id:1,name:'s90kart', price:30 , imges:img1},
//       {id:2,name:'nissan', price:105 , imges:img2},
//       {id:3,name:'pardo', price:90 , imges:img3},
//     ]
//   })
//  }, 5000);

 }
 clickhandel (){
console.log(this)
  this.cod=40
}
keydownhendler(){

  console.log("shood")
}
     

    render() {  
      return (
        <div  className='  '>
 
  
   <Conter/>
        </div>
    
      );
    }
  
  

  }
export default App

// 


