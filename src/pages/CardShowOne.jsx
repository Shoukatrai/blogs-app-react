import { Button, Stack, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const CardShowOne = () => {
    const [loginUser, setLoginUser] = useState();
    const [bId, setBId] = useState("")

    const [data, setData] = useState([])
    const params = useParams()
    console.log("params", params)
    const getBlog = async () => {

        try {

            const docRef = doc(db, "blogs", params.id);
            const docSnap = await getDoc(docRef);
            // console.log("docSnap" , docSnap.data())
            setData(docSnap.data())

        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        getBlog()
    }, []);

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

    const eidtBlogHandler = async (blogId) => {
        setBId(params.id)
        console.log("blogId", bId)
    }
    return (

        <>
            <Navbar />
            <Stack
                bgcolor={"blueviolet"}
                padding={5}
                borderRadius={10}
                flex={"flex"}
                justifyContent={"space-between"}
                gap={2}
                minWidth={"100%"}
                textOverflow={"hidden"}
            >



                <Typography variant="h4" >
                    {data?.title}
                </Typography>

                <Typography
                    sx={{
                        textWrap: "wrap"
                    }}
                >
                    {data?.desc}
                </Typography>


                <Typography>
                    Written By: {data?.author}
                </Typography>

                <Stack flex={"flex"} flexDirection={"row"} justifyItems={"end"} gap={2} >
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
                </Stack >
            </Stack>
        </>
    )
}

export default CardShowOne