import { Box, Container, Stack, styled, Switch, Toolbar, Typography } from "@mui/material";
import BonsaiCard from "./BonsaiCard";

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


export default function BonsaiPlansPricing() {
  return (
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
  )
}
