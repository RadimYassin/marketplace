import React, {  useState } from 'react'
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
function Img({id,data}) {
const [index,setIndex]=useState(1)

console.log(data);
const addOne=()=>{
    if(id){
        setIndex(index+1)
    }

    if (index == data.length-2 ) {
      setIndex(1)
    }


}

const lessOne=()=>{
    if (id) {
         setIndex(index-1)
    }
    if (index==1 ) {
        setIndex(data.length-2)
      }
  
   

 }
console.log(index);
  return (
    <div className='col1'>
        <AiOutlineLeft onClick={lessOne}>-</AiOutlineLeft>
        {
          index  && <img src={`https://i.dummyjson.com/data/products/${id}/${index}.jpg`} alt="imge" /> 
        }
        
        <AiOutlineRight onClick={addOne}>+</AiOutlineRight>
        
    </div>
  )
}

export default Img
