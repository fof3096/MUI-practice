import { Box, Button, Container, Typography } from '@mui/material'

export default function BonsaiCallToAction() {
  return (
    <Container maxWidth={"md"} disableGutters sx={{ mt:10, display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: "rgb(242, 250, 255)", px: 7, py: 10}}>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Typography variant='h4' component={"p"}>It's <Typography variant='h4' color='primary' component={"span"}>your</Typography> business.</Typography>
            <Typography variant='h4' component={"p"}>We're here to help it grow.</Typography>
        </Box>
        <Button disableElevation variant='contained' size='large' sx={{ px: 5, py: 2, fontWeight: "bold" }}>START FREE</Button>
    </Container>
  )
}
