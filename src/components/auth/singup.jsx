import React, { useState } from 'react'
import Appwrite from '../../Appwrite/Auth'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import {Login} from '../../redux/AuthSlice'
import Input from '../Common/input'
import Button from '../Common/Button'

function singup() {
    const [error,setError]=useState()
    const Navigate = useNavigate()
    const Dispatch = useDispatch()
    const {register,handleSubmit} = useForm()

    const singup = async(data)=>{
      setError("")
      try {
        const userData = await Appwrite.creactAcount(data) 
        if (userData) {
          const userData = await authService.getCurrentUser()
          if(userData) Dispatch(Login(userData));
              Navigate("/")
        }
      } catch (error) {
        setError(error.message)
        console.log(data)
      }
    }
    
  return (
    <div 
    style={{height:"30rem", width:"rem", background:"#62616161" }}
    >
      <form onClick={handleSubmit(singup)}>
        
        {/* Apptest1234 */}
      <Input type="email"
          Lebel="Email: "
          placeholder='enter email'
          {...register("email",{required: true,
            validate: { matchPatern: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Email address must be a valid address plese enter "}
          })
        }
        />
        <Input
        type="text"
        Lebel="name:"
        placeholder="enter your name"
        {
          ...register("name",{
            required: true
          })
        }
        />
        <Input type="password"
          Lebel="Password: "
          placeholder=' enter password  '
          {...register("password",{required: true,})}
        />

        <Button
          type="submit"
          className="w-full"
        > Singup</Button>
      </form>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
    </div>
  )
}

export default singup