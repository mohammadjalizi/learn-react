
import './App.css';


import React from 'react';
import Conter from './Copmenen/couter/Conter';
import Temp from './Copmenen/temps/Temp';
import Navbar from './Copmenen/navbar/Navbar';
    class  App extends  React.Component {

 
 constructor (props){

super(props)
this.state={

  users:[
    {id:1,name:'mohammad',},
    {id:2,name:'ali', },
    {id:3,name:'acer', },
  ],
  age:19
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

     

    render() {  
//       if(this.state.age >20){

//         return (
//           <div>
// <Temp/>

//           </div>
//         )
//       }else{

//      return (
// <>
// errow
// </>

//      )
//       }

// let erroemasage=null

// if(this.state.age <18){
// erroemasage=<h1>no youre welcome</h1>
  
// }else{
// erroemasage=<h1> welcome page me </h1>

// }
      return (
        <div  className='  '>
          <Navbar/>
 { this.state.age>18 ?  <Conter/> :   <Temp/>}
 

        </div>
    
      );
    }
  
  

  }
export default App

// 


