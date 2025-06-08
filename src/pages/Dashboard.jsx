import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { Stack } from '@mui/material'
import { db } from '../firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import CreateBlogCard from '../components/CreateBlogCard'
import EditBlogCard from '../components/EditBlogCard'

const Dashboard = () => {
  const [bId , setBId] = useState("")
  const [data, setData] = useState([]);
  const [editBlogState, setEditBlogState] = useState(false)

  const eidtBlogHandler = async (blogId) => {
    console.log("blogId", blogId)
    setBId(blogId)
  }
  
  



  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const documents = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setData(documents);
      // console.log("data" ,data)
    } catch (err) {
      console.log("err", err)
    }
  };

  useEffect(() => {
    fetchData();
  });


  return (
    <>
      <Navbar />
      <Stack margin={4} flex={1} justifyContent={"center"} flexWrap={"wrap"} alignItems={"center"} flexDirection={"row"} gap={{ xs: 2, sm: 3, md: 4 }}>
        {
          data.map((item)=>{
            return(
              bId === item.id ? <EditBlogCard setBId = {setBId} key={item.id} item ={item} /> : <Card key={item.id} data={item} eidtBlogHandler={eidtBlogHandler}  />
            )
          })
        }
      </Stack>

    </>
  )
}

export default Dashboard
