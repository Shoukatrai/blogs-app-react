import { Box, Button, CircularProgress, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import { doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { Bounce, toast } from 'react-toastify'

const EditBlogCard = ({ item , setBId}) => {
    // console.log("item" , item)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [desc, setDesc] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const saveBlogHandler = async () => {
        // setTitle(item?.title)
        // setAuthor(item?.author)
        // setDesc(item?.desc)
        // console.log("title", title)
        // console.log("author", author)
        // console.log("desc", desc)
        // const userId = localStorage.getItem("userId")
        // console.log("userId", userId)

        const saveObj = {
            title,
            author,
            desc,
            createdAt: Date.now(),
            userId :item.userId
        }
        try {
            setIsLoading(true)

            const washingtonRef = doc(db, "blogs", item.id);
            const editBlog =  await updateDoc(washingtonRef, saveObj);
            setIsLoading(false)
            toast.success('Blog Updated Successfully!', {
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
            setBId("")
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
        <div>
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
                        Edit Blog
                    </Typography>
                    <TextField fullWidth label="Blog Title" required variant="outlined"
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        value={title}
                    />
                    <TextField fullWidth label="Blog Author" required variant="outlined"
                        onChange={(e) => {
                            setAuthor(e.target.value)
                        }}
                        value={author}
                    />
                    <TextareaAutosize
                        maxRows={5}
                        onChange={(e) => {
                            setDesc(e.target.value)
                        }}
                        aria-label='minimum height'
                        placeholder="Write Blog Desc"

                        style={{ width: "100%", height: "20%", outline: "blue", padding: "5px" }}
                        value={desc}
                    />
                    <Button variant='contained' onClick={saveBlogHandler} >
                        {
                            isLoading && <CircularProgress color='white' size={"25px"} />
                        }

                        Save Blog </Button>
                </Stack>


            </Stack>
        </div>
    )
}

export default EditBlogCard
