import img1 from './Copmenen/images/Album 1.png'
import img2 from './Copmenen/images/Album 2.png'
import img3 from './Copmenen/images/Album 3.png'
import './App.css';
import Proudouct from './Copmenen/Proudouct';
import Modal from './Copmenen/Modal';

function App() {


  const allproudcts=[

{id:1,name:'mohammad', price:30 , imges:img1},
{id:2,name:'ali', price:105 , imges:img2},
{id:3,name:'acer', price:90 , imges:img3},

  ]
  return (
    <div  className=' flex flex-wrap  justify-center '>
    
    <Proudouct {...allproudcts[0]} >
      <button>  off(50%)   </button>
       </Proudouct>
    <Proudouct {...allproudcts[1]} > </Proudouct>
    <Proudouct {...allproudcts[2]} > </Proudouct>

    <Modal> 
              
    <h1 className='  text-center'>  hello   </h1> </Modal>
    </div>
 
  );
}

export default App;
