import { Fullscreen, Style } from '@mui/icons-material'
import { Box, Button, CircularProgress, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { Bounce, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import CreateBlogCard from '../components/CreateBlogCard'

const CreateBlog = () => {
    return (
        <>
            <Navbar />
           <CreateBlogCard />

        </>
    )
}

export default CreateBlog
