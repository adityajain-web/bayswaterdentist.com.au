import { Box, Typography } from '@mui/material'
import Styles from '../../styles/PageSectionalHeading.module.css'
const PageSectionalHeading = ({ title, align, variant }) => {
    return (
        <>
            <Box>
                <Typography variant={variant} align={align} className={Styles.heading} gutterBottom>{title}</Typography>
            </Box>
        </>
    )
}

export default PageSectionalHeading