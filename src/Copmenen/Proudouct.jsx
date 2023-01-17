import React from 'react'

function Proudouct(props) {
    if(props.price>100){

        let{imges,name,price}=props
        return (
            <div className='  '>
        <div className=' rounded-3xl bg-slate-500 h-auto  m-2 '>
        <img src={imges}/>
        <h1>{name}</h1>
        <p>${price}</p>
        </div>
        
        
            </div>
          )

    }
return null
}

export default Proudouct