import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import MenuIcon from '@mui/icons-material/Menu';

export default function Bonsai() {

  // TODO: https://www.frontendpractice.com/projects/bonsai

  return (
    <div>
      <AppBar position="static" sx={{
        boxShadow: "none",
        bgcolor: "#0001"
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LocalFloristIcon color="primary" sx={{display: { xs: "none", md: "flex" }, mr: 1}}/>
            <Typography color="primary" variant="h6" noWrap component="a" href="#" sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: "bold", // bold = 700
              textDecoration: "none"
            }}>bonsai</Typography>

            {/* Mobile View */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large">
                 <MenuIcon/>
              </IconButton>
            </Box>

            <LocalFloristIcon color="primary" sx={{display: { xs: "flex", md: "none" }, mr: 1}}/>
            <Typography color="primary" variant="h5" noWrap component="a" href="#" sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: "bold", // bold = 700
              textDecoration: "none"
            }}>bonsai</Typography>
            
            {/* End Mobile View */}

            <Box sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
              pr: 13,
              gap: 2
            }}>
                <Button>Product</Button>
                <Button>Templates</Button>
                <Button>Pricing</Button>
                <Button>Reviews</Button>
            </Box>

            <Box display={"flex"} gap={2}>
              <Button variant="outlined" disableElevation sx={{ border: 2 }}>LOG IN</Button>
              <Button variant="contained" disableElevation sx={{ border: 1, borderColor: "#00b289" }}>START FREE</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
