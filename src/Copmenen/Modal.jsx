import React from 'react'

function Modal({children}) {
  return (
    <div className=' fixed top-[50%]  w-[60%] bg-orange-700'>
        <div>  <p>
        close
        </p>
{children}
          </div>
        
    </div>
  )
}

export default Modal