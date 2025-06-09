import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './link.module.css';

const Navbar = () => {
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.clear()
        navigate("/")
    }
    return (
        <>
            <Stack
                flex={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                margin={"10px"}
                alignItems={"center"}
            >
                <Typography variant='h4' fontWeight="bold">
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                        <Typography component="span" color='blue'>Blogs</Typography>
                        <Typography component="span" color='red'>App</Typography>
                    </Link>
                </Typography>

                <Stack
                    flex={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    fontSize={"20px" }
                    gap={"15px"}
                    alignItems={"center"}
                >
                    <Link to="/dashboard" className={styles.link} >Home</Link>
                    <Link to="/myBlogs" className={styles.link} >My Blogs</Link>
                    <Link to="/createBlog" className={styles.link} >Create Blog</Link>
                    <Link className={styles.link} >Profile</Link>
                </Stack>

                <Button variant='contained' onClick={logOut} sx={{ mt: { xs: 2, sm: 0 } }}>LogOut</Button>
            </Stack>
        </>
    )
}

export default Navbar
