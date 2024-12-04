import React, { useRef, useState } from 'react'
import Input from './Input'
import { TbMapX } from 'react-icons/tb'
const Mealsitemform = (props) => {
  const[validinput,setvalidinput]=useState(true)
  const amountref=useRef()

const submitHandler=(e)=>{
e.preventDefault()
const amount=amountref.current.value
const realAmount=+amount 
 
if(amount.trim().length===0|| amount<1|| amount>5){
  setvalidinput(false)
  return;
}
  
 props.onaddcart(realAmount)
}

  return (
    <>
      <form onSubmit={submitHandler}>
         <Input  ref={amountref}  label="Amount" input={{
            type: "number",
            id: "amount",
            min:'1',
            max: '5',
            step: '1',
            defaultValue:'1'

         }}></Input>
        <button className='rounded-full bg-red-950 text-white font-bold p-2  w-20'> + Add</button>
        {
          !validinput && <p className='text-red-500'>Please enter a valid amount</p>
        }
      </form>
    </>
  )
}

export default Mealsitemform
