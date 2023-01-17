import img1 from './Copmenen/images/Album 1.png'
import './App.css';
import Proudouct from './Copmenen/Proudouct';

function App() {
  return (
    <div  className=' flex flex-wrap  justify-center '>
    
    <Proudouct name="ali"  title="aliajaliada;ja;;da"  price={120} imges={img1} />
    <Proudouct name="ali"  title="aliajaliada;ja;;da"  price={120} imges={img1} />
    <Proudouct name="ali"  title="aliajaliada;ja;;da"  price={120} imges={img1} />
    <Proudouct name="ali"  title="aliajaliada;ja;;da"  price={120} imges={img1} />
    <Proudouct name="ali"  title="aliajaliada;ja;;da"  price={120} imges={img1} />
    <Proudouct name="ali"  title="aliajaliada;ja;;da"  price={120} imges={img1} />
    </div>
 
  );
}

export default App;
