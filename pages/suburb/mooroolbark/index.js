import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Head from "next/head"
import { useEffect, useState } from "react"
import { CommonHero, PageSectionalHeading } from "../../../Components/components"
import { CheckCircleOutline } from '@mui/icons-material'

const Mooroolbark = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
    <Head>
      
    </Head>
    </>
  )
}

export default Mooroolbark