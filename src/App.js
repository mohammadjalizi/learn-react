
import './App.css';
import User from './Copmenen/user/User';

import React from 'react';
import Conter from './Copmenen/couter/Conter';
import Temp from './Copmenen/temps/Temp';
import Navbar from './Copmenen/navbar/Navbar';
import Frome from './Copmenen/Frome/Frome';
import Project1 from './project/form/Project1';
import Ticket from './project/TIcket/Ticket';
import Usersli from './Copmenen/user/Usersli';
import Booklist from './project/Booklist/Booklist';
import Shop from './project/Shoping/shop';
export  class  App extends  React.Component {

 
 constructor (props){

super(props)
this.state={

  users:[
    {id:1,name:'mohammad', age:20},
    {id:2,name:'ali',age:33 },
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
        <div    className='  '>

          <Frome/>
          
      {this.state.users.map(item=>(
<div key={item.id}> 
<User {...item}/>
 </div>
      ))}
          <Navbar/>
        
 { this.state.age>18 ?  <Conter/> :   <Temp/>}
 
<Project1/>
<Ticket/>
<ul>

<Usersli/>

</ul>
<hr/>
<Booklist/>
<Shop/>
        </div>
    
      );
    }
  
  

  }
export default App

// 


