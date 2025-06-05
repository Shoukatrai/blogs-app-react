import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Stack flex={"flex"} justifyContent={"center"} gap={3} alignItems={"center"} sx={{
        minHeight: "100vh",
        textAlign:"center"
      }} >
        <Stack gap={5}
        p={"30px"}
        sx={{
          width: "50%",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        }} >
        <Typography variant="h2" sx={{ color: "blue" }} >Login</Typography>
        <TextField label="Email Address " required variant="outlined" />
        <TextField label="Password" variant="outlined" required />
        <Typography variant="body2">
          Don't have an account? <Link  to="/signup">Signup</Link>
        </Typography>
        <Button variant='contained' >Login</Button>
      </Stack>
      </Stack>

    </div>
  )
}

export default Login
