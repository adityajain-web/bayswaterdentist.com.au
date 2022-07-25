import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const TNC = () => {
    return (
        <>
            <Typography><Link href="/terms-and-conditions">
                <a style={{fontSize:"1.1rem", fontWeight:600, color:"var(--navy)"}}><sup>*</sup>Terms and Conditions apply</a>
            </Link></Typography>
        </>
    )
}

export default TNC