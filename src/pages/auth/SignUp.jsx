import { Button, CircularProgress, Stack, TextField, Typography } from '@mui/material'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase.js'
import { Bounce, toast } from 'react-toastify'

const SignUp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumbe] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const signupHandler = async () => {
    console.log("email", email)
    console.log("password", password)
    console.log("fullName", fullName)
    console.log("phoneNumber", phoneNumber)

    try {
      setIsLoading(true)
      const user = await createUserWithEmailAndPassword(auth, email, password)
      toast.success('Sign Up Successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setIsLoading(false)
      navigate("/")
    } catch (error) {
      setIsLoading(false)
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }



  }

  return (
    <>
      <Stack flex={"flex"} justifyContent={"center"} gap={3} alignItems={"center"} sx={{
        minHeight: "100vh",
        textAlign: "center"
      }} >
        <Stack gap={5}
          p={"30px"}
          sx={{
            width: "50%",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }} >
          <Typography variant="h2" sx={{ color: "blue" }} >Sign Up</Typography>
          <TextField label="Full Name" required variant="outlined" onChange={(e) => {
            setFullName(e.target.value)
          }} />
          <TextField label="Phone Number" required variant="outlined" onChange={(e) => {
            setPhoneNumbe(e.target.value)
          }} />
          <TextField label="Email Address " required variant="outlined" onChange={(e) => {
            setEmail(e.target.value)
          }} />
          <TextField label="Password" variant="outlined" type='password' required onChange={(e) => {
            setPassword(e.target.value)
          }} />
          <Typography variant="body2">
            Don't have an account? <Link to="/">Login</Link>
          </Typography>
          <Button variant='contained' onClick={signupHandler} sx={{
            display: "flex",
            gap: 3,
          }} >
            {
              isLoading && <CircularProgress color='white' size={"25px"} />
            }
            Sign Up</Button>
        </Stack>
      </Stack>

    </>
  )
}

export default SignUp

