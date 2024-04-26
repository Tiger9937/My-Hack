import React, { useState } from 'react'
import Appwrite from '../../Appwrite/Auth'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import {Login} from '../../redux/AuthSlice'


function singup() {
    const [error,setError]=useState()
    const Navigate = useNavigate()
    const Dispatch = useDispatch()

    try {
        
    } catch (error) {
        setError(error.message)
    }
  return (
    <div>singup</div>
  )
}

export default singup