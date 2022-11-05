import { Avatar, Box, Card, Skeleton, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";


// These are the properties that each instance of a blog must have.
export interface Blog {
    author: string,
    datePublished: string,
    title: string,
    contents: any,
    avatarUrl: string
}



export default function BlogView(props: Blog) {

    const [loading, setLoading] = useState(true)

    return (
        <Box width='full'>



            <Typography variant="h6" textAlign='left' fontWeight='medium'>
                {props.title}
                {
                    loading ? (
                    ): (<Avatar />)
                }
            </Typography>


            <Typography component={'div'} paddingTop={3} fontWeight='regular' variant="body" display='block'>


                {
                    loading ? (<Stack spacing={1} direction='column'>



                        <Typography variant="body">
                            <Skeleton />
                        </Typography>

                        <Typography variant="body">
                            <Skeleton />
                        </Typography>

                        <Typography variant="body">
                            <Skeleton />
                        </Typography>

                        <Typography variant="body">
                            <Skeleton />
                        </Typography>

                        <Typography variant="body">
                            <Skeleton />
                        </Typography>
                    </Stack>
                    ) : props.contents;
                }
            </Typography>

            <Card className="px-2 flex space-x-1.5 pt-3 bg-white shadow-sm rounded-lg ">


                {loading ? (
                    <Stack spacing={1} direction='row'>
                        <Skeleton variant="circular  className='w-10 h-10' />
                    <Skeleton variant="text" className='w-1/2' />
                        <Typography variant="subtitle2" >
                            <Skeleton variant="text" />
                        </Typography>
                        <Typography variant="subtitle2">
                            <Skeleton variant="text" />
                        </Typography>

                    </Stack>
                ) : (

                    <>
                        <Avatar src={props.} />
                        <div className="flex-col pb-4">
                            
                            
                            <Typography variant='subtitle2'>{props.author}</Typography>
                            
                            
                            <Typography display='block' variant="caption">
                                {props.datePublished}
                            </Typography>


                        </div>

                    </>
                )}
            </Card>
        </Box>
    )
}