"use client"
import React, { useState } from 'react'
import Header from './Components/header'
import Card from './Components/card'

const page = () => {
  const [first, setfirst] = useState("second")
  
  return (
    <>
      <Header/>
      <Card/>
    </>
  )
}

export default page