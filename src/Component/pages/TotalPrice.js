import React from 'react'
import { useSelector } from 'react-redux'

export default function TotalPrice() {
    let total=0
    const TotalFinal=useSelector(state=>state.TotalFinal)
    for (let i = 0; i < TotalFinal.length; i++) {
          total+=TotalFinal[i].some
        
    }
   
  return (
    <div>
        total: {total} $
    </div>
  )
}
