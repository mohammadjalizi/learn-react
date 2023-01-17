import React from 'react'

function Proudouct(props) {
  return (
    <div className='  '>
<div className=' rounded-3xl bg-slate-500 h-auto  m-2 '>
<img src={props.imges}/>
<h1>{props.name}</h1>
<p>${props.price}</p>
</div>


    </div>
  )
}

export default Proudouct