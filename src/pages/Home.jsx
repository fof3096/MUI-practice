import { AppBar, Box, Button, Container, Grid2, styled, Toolbar, Typography } from "@mui/material";
import HomeGridElement from "../components/HomeGridElement";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import GrainIcon from '@mui/icons-material/Grain';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const iconStyles = {
    borderRadius: "100%",
    backgroundImage: "linear-gradient(to top, rgba(0,178,137,1) 0%, rgba(0,255,196,1) 100%)",
    height: "40px",
    width: "40px",
    p: 1,
    color: "white",
    position: "absolute",
    top: -15,
    fontSize: "medium"
}

export default function Home() {

    const HomeImg = styled('img')(() => ({
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "cover",
        borderEndStartRadius: "190px",
        borderEndEndRadius: "190px",
        borderStartStartRadius: "190px",
        borderStartEndRadius: "190px",
    }));

    // TODO: https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q
  return (
    <Container maxWidth={"lg"}>
        <AppBar position="static" sx={{ boxShadow: "none", bgcolor: "#0000"}}>
            <Container disableGutters>
                <Toolbar disableGutters>
                    <Typography fontWeight={"bold"} color="textPrimary" flexGrow={1} variant="h5">skilled</Typography>
                    <Button disableElevation variant="contained" sx={{ borderRadius: 5, textTransform: "none", bgcolor: "black" }}>Get Started</Button>
                </Toolbar>
            </Container>
        </AppBar>
        
        <Container disableGutters sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap:2 }}>
            <Box maxWidth={400} sx={{ bgcolor: "#0000", display:"flex", flexWrap:"wrap", alignContent: "center", gap: 3 }}>
                <Typography variant="h3" fontWeight={"bold"}>Maximize skill, minimize budget</Typography>
                <Typography color="textSecondary" variant="body1">Our modern courses acriss a range of in-demand skills will give you the knowledge you need to live the life you want.</Typography>
                <Button size="large" disableElevation variant="contained" sx={{ borderRadius: 5, textTransform: "none", backgroundImage: "linear-gradient(to top, rgba(0,178,137,1) 0%, rgba(0,255,196,1) 100%)" }}>Get Started</Button>
            </Box>
            
            <Box width={"30%"}>
                <HomeImg src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Learning" />
            </Box>
        </Container>

        <Grid2 mt={8} spacing={3} container>
            <Grid2 flexGrow={1} p={3} pr={6} mb={3} sx={{
                boxShadow: "3",
                backgroundImage: "linear-gradient(to top, rgba(0,178,137,1) 0%, rgba(0,255,196,1) 100%)",
                borderRadius: "10px",
                width: "300px",
            }}>
                <Typography mt={3} color="white" variant="h4" fontWeight={"bold"}>Check out our most popular courses!</Typography>
            </Grid2>

            <HomeGridElement icon={<DirectionsRunIcon sx={iconStyles}/>} title={"Animation"} text={"Learn the latest animation techniques to create stunning motion design and captivate your audience."}/>
            <HomeGridElement icon={<ArchitectureIcon sx={iconStyles}/>} title={"Design"} text={"Create beautiful, usable interfaces to help shape the future of how the web looks."}/>
            <HomeGridElement icon={<PhotoCameraIcon sx={iconStyles}/>} title={"Photography"} text={"Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."}/>
            <HomeGridElement icon={<GrainIcon sx={iconStyles}/>} title={"Crypto"} text={"All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."}/>
            <HomeGridElement icon={<ShoppingBagIcon sx={iconStyles}/>} title={"Business"} text={"A step-by-step playbook to help you start, scale, and sustain your business without outside investment."}/>
        </Grid2>

        
    </Container>
  )







}
