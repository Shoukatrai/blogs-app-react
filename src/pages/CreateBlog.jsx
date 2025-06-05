import { Fullscreen, Style } from '@mui/icons-material'
import { Box, Button, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

const CreateBlog = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [desc, setDesc] = useState("")

    const createBlogHandler = async () => {
        console.log("title", title)
        console.log("author", author)
        console.log("desc", desc)
        const saveObj = {
            title,
            author,
            desc,
            createdAt: Date.now()
        }
        try {
            const blog = await addDoc(collection(db, "blogs"), saveObj);
            console.log("Document written with ID: ", blog.id);
        } catch (error) {
            console.log("error" , error)
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
                    <Button variant='contained' onClick={createBlogHandler} > Create Blog </Button>
                </Stack>


            </Stack>

        </>
    )
}

export default CreateBlog
