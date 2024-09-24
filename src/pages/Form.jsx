import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Typography } from "@mui/material";

export default function Form() {
  return (
    <Container sx={{ minHeight:"100vh", display:"grid", justifyContent:"center", alignContent:"center" }}>
      <Box maxWidth={600} p={5} borderRadius={3} boxShadow={3}>
        <Typography variant="h5">Contact Us</Typography>
        <FormControl component={"form"} display={"flex"} sx={{
          flexDirection:"row",
          flexWrap:"wrap",
          gap: 2
        }}>
          <TextField label="First Name *" variant="outlined" sx={{ flexBasis:"48%"}} />
          <TextField label="Last Name *" variant="outlined" sx={{ flexBasis:"48%"}} />
          <TextField fullWidth label="Email Address *" variant="outlined" sx={{ borderRadius: 2 }}/>
          <FormControl fullWidth>
            <FormLabel component={"legend"}>Query Type *</FormLabel>
            <FormGroup sx={{ border:1, display: "flex", flexDirection:"row", flexWrap: "nowrap", gap: 2 }}>
              <FormControlLabel control={<Checkbox/>} label="General Enquiry" sx={{ m:0, flexBasis:"50%" ,border:1, borderRadius: 2}}/>
              <FormControlLabel control={<Checkbox/>} label="Support Request" sx={{ m:0, flexBasis:"50%" ,border:1, borderRadius: 2}}/>
            </FormGroup>
          </FormControl>
          <TextField fullWidth multiline label="Message *" variant="outlined" rows={4} sx={{ borderRadius: 2 }}/>
          <FormControlLabel required control={<Checkbox/>} label="I consent to being concated by the team *" />
          <Button fullWidth variant="contained" sx={{ borderRadius: 2 }}>Submit</Button>
        </FormControl>
      </Box>
    </Container>
  )
}
