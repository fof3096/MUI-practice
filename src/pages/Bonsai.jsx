import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, styled, Switch, Toolbar, Typography } from "@mui/material";
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import BonsaiCard from "../components/bonsai/BonsaiCard";


const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 24,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 21, /* Tamaño del ⏺ al hacer click*/
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(16px)', /* Posicion del ⏺ */
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 20,
    height: 20,
    borderRadius: "100%",
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 30 / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255,255,255,.35)',
    }),
  },
}));


export default function Bonsai() {

  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorEl2, setAnchorEl2] = useState(null)
  
  const open = Boolean(anchorEl)
  const open2 = Boolean(anchorEl2)

  // TODO: https://www.frontendpractice.com/projects/bonsai


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
    <div>
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

      <Container sx={{ mt:10 }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5">Plans & Pricing</Typography>
          <Stack position={"relative"} direction="row" spacing={3} sx={{ alignItems: 'end' }}>
            <Typography variant="caption" fontWeight={"bold"} color="primary" position={"absolute"} bottom={40} right={0}>2 MONTHS FREE!</Typography>
            <Typography variant="body2">MONTHLY</Typography>
            <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
            <Typography variant="body2">YEARLY</Typography>
          </Stack>
        </Toolbar>
        <Box mt={5} display={"flex"} gap={4}>
          <BonsaiCard title={"Workflow"} price={19} characteristics={["Unlimited Clients & Projects", "Proposals", "Contracts", "Invoicing & Payments", "Client CRM", "Project Management", "Task & Time Tracking", "iOS, Android, Chrome, & Mac Apps"]}/>
          <BonsaiCard title={"Workflow Plus"} price={29} characteristics={["Everything in Workflow, plus...", "White-labelled client experience", "Client forms and questionnaires", "Workflow automations", "Subcontracting (client-mode)", "Calendly Integration", "Client portal", "Priority support"]}/>
        </Box>
      </Container>
    </div>
  )
}
