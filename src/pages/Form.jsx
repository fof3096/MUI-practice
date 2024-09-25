import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormLabel, RadioGroup, TextField, Typography, Radio } from "@mui/material";

export default function Form() {
  return (
    <Container sx={{ minHeight:"100vh", display:"grid", justifyContent:"center", alignContent:"center" }}>
      <Box maxWidth={600} p={5} borderRadius={3} boxShadow={3}>
        <Typography variant="h5" mb={3}>Contact Us</Typography>
        <FormControl component={"form"} display={"flex"} sx={{
          flexDirection:"row",
          flexWrap:"wrap",
          gap: 2
        }}>
          <TextField required label="First Name" variant="outlined" sx={{ flexBasis:"48%"}} />
          <TextField required label="Last Name" variant="outlined" sx={{ flexBasis:"48%"}} />
          <TextField fullWidth required label="Email Address" variant="outlined" sx={{ borderRadius: 2 }}/>
          <FormControl required fullWidth>
            <FormLabel component={"legend"}>Query Type</FormLabel>
            <RadioGroup defaultValue={"General Enquiry"} sx={{ display: "flex", flexDirection:"row", flexWrap: "nowrap", gap: 2 }}>
              <FormControlLabel value={"General Enquiry"} control={<Radio/>} label="General Enquiry" sx={{ m:0, flexBasis:"50%" ,border:1, borderColor: "#c4c4c4", borderRadius: 2}}/>
              <FormControlLabel value={"Support Request"} control={<Radio/>} label="Support Request" sx={{ m:0, flexBasis:"50%" ,border:1, borderColor: "#c4c4c4", borderRadius: 2}}/>
            </RadioGroup>
          </FormControl>
          <TextField fullWidth multiline label="Message" variant="outlined" rows={4} sx={{ borderRadius: 2 }}/>
          <FormControlLabel required control={<Checkbox/>} label="I consent to being concated by the team" />
          <Button fullWidth type="submit" variant="contained" sx={{ borderRadius: 2 }}>Submit</Button>
        </FormControl>
      </Box>
    </Container>
  )
}
