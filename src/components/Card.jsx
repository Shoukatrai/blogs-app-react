import { Button, Stack, Typography } from "@mui/material"
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react"
import { db } from "../firebase";
import CreateBlogCard from "./CreateBlogCard";

const Card = ({ data, eidtBlogHandler }) => {
    const [loginUser, setLoginUser] = useState();

    useEffect(() => {
        const uid = localStorage.getItem("userId");
        setLoginUser(uid === data.userId);
    }, [data.userId]);

   


    const deleteBlogHandler = async (blogId) => {
        console.log("deleteBlogHandler", blogId)
        try {
            const deletBlog = await deleteDoc(doc(db, "blogs", blogId));
            console.log("deletBlog", deletBlog)
        } catch (error) {
            console.log("error", error)
        }

    }
    return (
        <>
            <Stack bgcolor={"blueviolet"} padding={5} borderRadius={10} flex={"flex"} justifyContent={"space-between"} gap={2} >
                
              
                
                <Typography variant="h4" >
                    {data?.title}
                </Typography>

                <Typography
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        maxHeight: '4.5em',
                        minHeight: '4.5em',
                    }}
                >
                    {data?.desc}
                </Typography>


                <Typography>
                    Written By: {data?.author}
                </Typography>

                <Stack flex={"flex"} flexDirection={"row"} justifyItems={"end"} gap={2} >
                    <Button variant="outlined" sx={{ color: "white" }} >See More</Button>
                    {
                        loginUser && <>
                            <Button variant="contained" onClick={() => {
                                eidtBlogHandler(data?.id)
                            }} >Edit</Button>
                            <Button variant="contained" onClick={() => {
                                deleteBlogHandler(data?.id)
                            }} >Delete</Button>
                        </>
                    }
                </Stack>
            </Stack>
        </>
    )
}

export default Card