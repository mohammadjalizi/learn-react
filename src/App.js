import img1 from './Copmenen/images/Album 1.png'
import img2 from './Copmenen/images/Album 2.png'
import img3 from './Copmenen/images/Album 3.png'
import './App.css';
import Proudouct from './Copmenen/Proudouct';
import Modal from './Copmenen/Modal';
import React from 'react';

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
  alert("ok")
}
keydownhendler(){

  console.log("shood")
}
     

    render() {  
      return (
        <div  className='  '>
    <h1 onClick={this.clickhandel}>{this.code}</h1>
    <input type="text" onKeyDown={this.keydownhendler}   className="  bg-gray-800  text-red-600 " ></input>
        <Proudouct {...this.state.users[0]}/ >
   

          <Proudouct {...this.state.users[0]} > </Proudouct>
          <Proudouct {...this.state.users[0]} > </Proudouct>
  
        <Modal> 
                  
        <h1 className='  text-center'>  hello   </h1> </Modal>
        </div>
    
      );
    }
  
  

  }
export default App

// 


