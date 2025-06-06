import { Button, Stack, Typography } from "@mui/material"
import { useState, useEffect } from "react"

const Card = ({ data }) => {
    const [loginUser, setLoginUser] = useState();
    
   useEffect(() => {
    const uid = localStorage.getItem("userId");
    setLoginUser(uid === data.userId);
}, [data.userId]);



    return (
        <>
            <Stack
                flex={1}
                width={{ xs: '95%', sm: '70%', md: '45%', lg: '30%', xl: '18%' }}
                minWidth={220}
                maxWidth={370}
                minHeight={280}
                maxHeight={400}
                bgcolor={"red"}
                padding={{ xs: '10px', sm: '16px', md: '24px' }}
                gap={2}
                borderRadius={"10px"}
                alignItems={"center"}
                boxShadow={{ xs: 1, sm: 2, md: 3 }}
                justifyContent={"space-between"}
            >
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

                    <Button>See More</Button>
                {
                    loginUser && <>
                        <Button variant="outlined" >Edit</Button>
                        <Button variant="outlined">Delete</Button>
                    </> 
                }



            </Stack>
        </>
    )
}

export default Card