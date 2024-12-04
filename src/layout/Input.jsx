import React from 'react'

const Input = React.forwardRef((props,ref) => {
  return (
    <>
      <div className='flex space-x-2 font-bold'>
        <label>{props.label}</label>
        <input ref={ref} className='flex items-center justify-center pl-2' {...props.input} />
      </div>
    </>
  )
})

export default Input
