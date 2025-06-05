import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Stack flex={"flex"} justifyContent={"space-between"} flexDirection={"row"} padding={"10px"} alignItems={"center"} >
                <Typography variant='h4' fontWeight={"bold"}  >
                    <Typography variant='span' color='blue' >
                        Blogs
                    </Typography>
                     <Typography variant='span' color='red' >
                        App
                    </Typography>
                </Typography>

                <Stack flex={"flex"} justifyContent={"space-between"} flexDirection={"row"} gap={10} fontSize={20}  >
                    <Link>
                        Home
                    </Link>

                     <Link color='blue'>
                        My Blogs
                    </Link>

                    <Link color='blue' to={"/createBlog"} >
                        Create Blog
                    </Link>

                     <Link color='blue'>
                        Profile
                    </Link>
                </Stack>

                <Button variant='contained' >LogOut</Button>
            </Stack>
        </>
    )
}

export default Navbar
