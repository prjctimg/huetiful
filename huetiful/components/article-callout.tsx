import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function ArticleCallout() {

    return (<>
        <Card className="px-2 py-4 flex-col bg-slate-50 shadow-md">

            {/* Topic */}
            <Typography className='text-gray-600' variant="subtitle">Hues</Typography>

            {/* Title of article */}
            <Typography fontFamily={'Poppins'} fontWeight='semibold' variant="h6">Applying hue shifts in web design.</Typography>



            {/* Summary of article and related graphic */}
            <CardContent>
                <Typography variant='body' fontFamily={'Poppins'}>
                    In this article we explore the definition of hues and how they can be applied in creating beautiful palettes.
                </Typography>

                <div className='flex space-x-3  pt-4'>
                    <Avatar />
                    {/* Name of author */}
                    <div className="flex-col">
                        <Typography classNam fontFamily={'Poppins'} variant='body2'>Dean Tarisai</Typography>
                        {/*  */}
                        <Typography className='pt-1 ' fontFamily={'Poppins'} variant='caption'>September 4,2001</Typography>


                    </div>

                </div>

            </CardContent>


        </Card>

    </>)
}