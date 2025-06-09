import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
  const {Component} = props
  const navigate = useNavigate()
  useEffect(()=>{
    const loginUser = localStorage.getItem("userId");
    if(!loginUser){
        navigate("/")   
    }
  })
    return (
    <div>
       <Component />
    </div>
  )
}

export default Protected
