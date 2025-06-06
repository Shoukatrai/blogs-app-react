import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { Stack } from '@mui/material';

const MyBlogs = () => {
    const [data, setData] = useState([])


    const fetchData = async () => {
        try {
            const uid = localStorage.getItem("userId")
            const q = query(collection(db, "blogs"), where("userId", "==", uid));

            const querySnapshot = await getDocs(q);
            const documents = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setData(documents)
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <>
            <Navbar />
            <Stack margin={4} flex={1} justifyContent={"center"} flexWrap={"wrap"} alignItems={"center"} flexDirection={"row"} gap={{ xs: 2, sm: 3, md: 4 }}>

                {data.map(item => (
                    <Card key={item.id} data={item} />
                ))}
            </Stack>
        </>
    )
}

export default MyBlogs
