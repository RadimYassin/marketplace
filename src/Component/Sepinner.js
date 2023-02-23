import React from 'react'

import {ThreeDots } from  'react-loader-spinner'
export default function Sepinner() {
  return (
    <ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color=" rgb(25, 143, 183)" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
/>
  )
}
