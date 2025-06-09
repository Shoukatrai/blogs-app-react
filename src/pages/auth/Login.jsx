import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { Bounce, toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()


  const loginHandler = async () => {
    try {
      setIsLoading(true)
      const user = await signInWithEmailAndPassword(auth, email, password)
    
      setIsLoading(false)
      toast.success('Login Successful!', {
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

      localStorage.setItem("userId", user.user.uid)


      navigate("/dashboard")
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
    <div>
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

          <Typography variant="h2" sx={{ color: "blue" }} >Login</Typography>

          <TextField label="Email Address " required variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />



          <TextField label="Password" variant="outlined" required type='password'
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />

          <Typography variant="body2">
            Don't have an account? <Link to="/signup">Signup</Link>
          </Typography>
          <Button variant='contained' onClick={loginHandler} sx={
            {display :'flex' , gap: "15px"}
          } >
            {
              isLoading && <CircularProgress color='white' size={"20px"} />
            }
            Login</Button>
        </Stack>
      </Stack>

    </div>
  )
}


export default Login
