import React, { useEffect, useState } from 'react'

function Img({id,data}) {
const [index,setIndex]=useState(1)

console.log(data);
const add=()=>{
    if(id){
        setIndex(index+1)
    }

    if (index == data.length-2 ) {
      setIndex(1)
    }


}

const ne=()=>{
    if (id) {
         setIndex(index-1)
    }
    if (index==1 ) {
        setIndex(data.length-2)
      }
  
   

 }
console.log(index);
  return (
    <div>
        <button onClick={add}>-</button>
        {
          index  && <img src={`https://i.dummyjson.com/data/products/${id}/${index}.jpg`} alt="imge" /> 
        }
        
        <button onClick={ne}>+</button>
        
    </div>
  )
}

export default Img
