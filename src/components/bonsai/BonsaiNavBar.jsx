import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from "react";

export default function BonsaiNavBar() {

  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorEl2, setAnchorEl2] = useState(null)
  
  const open = Boolean(anchorEl)
  const open2 = Boolean(anchorEl2)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClose2 = () => {
    setAnchorEl2(null)
  }

  return (
    <AppBar position="static" sx={{
        boxShadow: "none",
        bgcolor: "transparent"
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
                <Button
                  disableRipple
                  onClick={handleClick}
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  Product {open ? <ExpandLess /> : <ExpandMore />}
                </Button>
                <Menu
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem>Product1</MenuItem>
                  <MenuItem>Product2</MenuItem>
                  <MenuItem>Product3</MenuItem>
                </Menu>


                <Button
                  disableRipple
                  onClick={handleClick2}
                  aria-controls={open2 ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open2 ? 'true' : undefined}
                >
                  Templates {open2 ? <ExpandLess /> : <ExpandMore />}
                </Button>
                <Menu
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl2}
                  open={open2}
                  onClose={handleClose2}
                >
                  <MenuItem>Template1</MenuItem>
                  <MenuItem>Template2</MenuItem>
                </Menu>

                <Button disableRipple>Pricing</Button>

                <Button disableRipple>Reviews</Button>
            </Box>

            <Box display={"flex"} gap={2}>
              <Button variant="outlined" disableElevation sx={{ border: 2 }}>LOG IN</Button>
              <Button variant="contained" disableElevation sx={{ border: 1, borderColor: "#00b289" }}>START FREE</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  )
}
