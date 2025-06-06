import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { Stack } from '@mui/material'
import { db } from '../firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'

const Dashboard = () => {
  const [data, setData] = useState([]);
 
 

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const documents = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setData(documents);
    } catch (err) {
      console.log("err" , err)
    } 
  };

   useEffect(() => {
    fetchData();
  });


  return (
    <div>
      <Navbar />
      <Stack margin={4} flex={1} justifyContent={"center"} flexWrap={"wrap"} alignItems={"center"} flexDirection={"row"} gap={{ xs: 2, sm: 3, md: 4 }}>
        
        {data.map(item => (       
            <Card key={item.id} data={item} />           
        ))}
      </Stack>

    </div>
  )
}

export default Dashboard
