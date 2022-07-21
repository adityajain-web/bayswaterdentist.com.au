import { Box, Typography } from "@mui/material"

const SectionalHeading = ({variant, align, title}) => {
  return (
    <>
    <Box>
        <Typography className="sectionalTitle" variant={variant} align={align} gutterBottom>{title}</Typography>
    </Box>
    </>
  )
}

export default SectionalHeading