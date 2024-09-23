import { Box, Button, Grid2, Typography } from "@mui/material";

export default function HomeGridElement({ icon, title, text }) {
  return (
    <Grid2 flexGrow={1} p={3} mb={3} sx={{
        boxShadow: "3",
        borderRadius: "10px",
        display: "flex",
        width: "300px",
        flexWrap: "wrap",
        flexDirection: "column",
        position: "relative"
    }}>
        {icon}

        <Typography my={3} variant="h6" fontWeight={"bold"}>{title}</Typography>
        <Typography mb={3} flexGrow={1} variant="body1" color="textSecondary">{text}</Typography>
        <Button disableTouchRipple disableElevation disableFocusRipple disableRipple color="primary" sx={{
            px: 0,
            alignSelf: "start",
            textTransform: "none"
        }}>Get Started</Button>
    </Grid2>
  )
}
