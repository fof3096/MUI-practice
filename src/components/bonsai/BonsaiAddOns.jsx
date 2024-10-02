import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function BonsaiAddOns() {
  /* 
    *Remember
      Stack is ideal for one-dimensional layouts, while Grid is preferable when you need both vertical and horizontal arrangement.
  */
  return (
    <Container sx={{ mt:10, display: "flex", flexDirection: "column" }}>
        <Typography alignSelf={"center"} variant="h5">Super charge your work with add-ons</Typography>
        <Stack mt={6} spacing={2}>
          <Paper variant="outlined" sx={{ display: "flex", alignItems: "center", p: 4 }}>
            <Box flexGrow={1}>
              <Typography variant="h6">Collaborators</Typography>
              <Typography color="textSecondary" variant="body2">Invite other users to specific projects for limited access and funcionality.</Typography>
            </Box>
            <Typography variant="h4">Free</Typography>
          </Paper>

          <Paper variant="outlined" sx={{ display: "flex", alignItems: "center", p: 4 }}>
            <Box flexGrow={1}>
              <Typography variant="h6">Partners</Typography>
              <Typography color="textSecondary" variant="body2">Invite other users for full account and company management.</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Typography variant="h4">$9</Typography>
              <Typography variant="caption">/MONTH</Typography>
            </Box>
          </Paper>

          <Paper variant="outlined" sx={{ display: "flex", alignItems: "center", p: 4 }}>
            <Box flexGrow={1}>
              <Typography variant="h6">Bonsai Tax</Typography>
              <Typography color="textSecondary" variant="body2">Track expenses, identify write-offs, and estimate quarterly taxes easily.</Typography>
              <Button size="small" endIcon={<ChevronRightIcon />} sx={{ px: 0 }}>LEARN MORE</Button>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Typography variant="h4">$10</Typography>
              <Typography variant="caption">/MONTH</Typography>
            </Box>
          </Paper>
        </Stack>
      </Container>
  )
}
