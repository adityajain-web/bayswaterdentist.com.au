import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const MediaObject = ({ mediaTitle, mediaText, mediaImage, mediaImageAlt, navlink, anchor, link }) => {
    return (
        <>
            <Box className="media">
                <Box className={`mr-3 d-flex justify-content-center align-items-center circle p-1`} style={{height:"4rem", width:"4rem", backgroundColor:"#117295", borderRadius:"50%",}}>
                <Image src={mediaImage} alt={mediaImageAlt} className="img-fluid" />
                </Box>
                <Box className='media-body'>
                    <Typography variant="h5" className='mt-0' gutterBottom>{navlink ? <Link href={link}>
                        <a className="text-decoration-none" style={{color:"#117295"}}>{mediaTitle}</a>
                    </Link> : anchor ? <a href={link}>{mediaTitle}</a> : mediaTitle}</Typography>
                    <Typography>{mediaText}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default MediaObject