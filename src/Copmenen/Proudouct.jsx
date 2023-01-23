import React from 'react'

function Proudouct({imges,name,price,children}) {
 state={
users:[
{id:1, name:muna ,}

]

 }
        // let{imges,name,price}=props
        return (
            <div className='  '>
        <div className=' rounded-3xl bg-slate-500 h-auto  m-2 '>
        <img src={imges}/>
        <h1>{name}</h1>
        <p>${price}</p>
        {children}
        </div>
        
        
            </div>
          )

    }
   



export default Proudouct



// 




