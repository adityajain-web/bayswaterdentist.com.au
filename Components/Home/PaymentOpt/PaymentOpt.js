import { Container, Grid, Box } from '@mui/material'
import React from 'react'
import { SectionalHeading, PaymentOptComp } from '../../components'

const PaymentOpt = () => {
    return (
        <>
            <Container maxWidth="xxl" className="py-md-5">
                <Grid container>
                    <Grid item xs={12} md={10} className="mx-auto">
                        <Box>
                            <SectionalHeading variant={'subtitle1'} align="center" title="FLEXIBLE PAYMENT" />
                            <Box>
                                <PaymentOptComp />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default PaymentOpt