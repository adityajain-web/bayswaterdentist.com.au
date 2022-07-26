import { Box } from "@mui/material"
import Image from 'next/image';
import InterestFreePlans from '../../public/InterestFree/InterestFree.jpg'
import Styles from '../../styles/interestFree/interestFree.module.css';

const InterestFree = () => {
  return (
    <>
    <Box style={{width:"100%", position:"relative"}}>
        <Image src={InterestFreePlans} alt="payment Plans for Bayswater" className={Styles.image}  />
    </Box>
    </>
  )
}

export default InterestFree