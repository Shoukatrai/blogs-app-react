import { Fullscreen, Style } from '@mui/icons-material'
import { Box, Button, CircularProgress, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { Bounce, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [desc, setDesc] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const createBlogHandler = async () => {


        console.log("title", title)
        console.log("author", author)
        console.log("desc", desc)
        const userId = localStorage.getItem("userId")
        console.log("userId", userId)

        const saveObj = {
            title,
            author,
            desc,
            createdAt: Date.now(),
            userId
        }
        try {
            setIsLoading(true)
            const blog = await addDoc(collection(db, "blogs"), saveObj);
            console.log("Document written with ID: ", blog);
            setIsLoading(false)
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
            navigate("/dashboard")
            
        } catch (error) {
            console.log("error", error)
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
            <Navbar />
            <Stack flex={"flex"} justifyContent={"center"} alignItems={"center"}
                sx={{

                }}
            >


                <Stack flex={"flex"} gap={3} alignItems={"center"} sx={
                    {
                        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        padding: "20px",
                        width: "50%"
                    }
                } >


                    <Typography variant='h4'>
                        Create Blog
                    </Typography>
                    <TextField fullWidth label="Blog Title" required variant="outlined"
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                    <TextField fullWidth label="Blog Author" required variant="outlined"
                        onChange={(e) => {
                            setAuthor(e.target.value)
                        }}
                    />
                    <TextareaAutosize
                        maxRows={5}
                        onChange={(e) => {
                            setDesc(e.target.value)
                        }}
                        aria-label='minimum height'
                        placeholder="Write Blog Desc"

                        style={{ width: "100%", height: "20%", outline: "blue", padding: "5px" }}

                    />
                    <Button variant='contained' onClick={createBlogHandler} >
                        {
                            isLoading && <CircularProgress color='white' size={"25px"} />
                        }

                        Create Blog </Button>
                </Stack>


            </Stack>

        </>
    )
}

export default CreateBlog
