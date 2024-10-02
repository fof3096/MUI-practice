import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BonsaiFrequentlyAskedQuestions() {
  return (
    <Container maxWidth={"md"} sx={{ mt: 10, display: "flex", flexDirection: "column" }}>
        <Typography variant='h5' color='primary' alignSelf={"center"}>Frequently Asked Questions</Typography>
        <Accordion disableGutters elevation={0} sx={{ boxShadow: "none" }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls='panel1-content'
                id='panel1-header'
                sx={{ border: 0 }}
            >
                How does the 14 day free trial work?
            </AccordionSummary >
            <AccordionDetails sx={{ border: 0 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quos fuga ad nemo dignissimos officia architecto omnis hic corrupti excepturi nobis, dolores eaque eveniet tempore corporis? Sequi ratione optio facilis.
            </AccordionDetails>
        </Accordion>

        <Accordion disableGutters elevation={0} sx={{ boxShadow: "none", ":before": {display:"none"} }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls='panel2-content'
                id='panel2-header'
            >
                Can I change plans anytime?
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quos fuga ad nemo dignissimos officia architecto omnis hic corrupti excepturi nobis, dolores eaque eveniet tempore corporis? Sequi ratione optio facilis.
            </AccordionDetails>
        </Accordion>

        <Accordion disableGutters elevation={0} sx={{ boxShadow: "none", ":before": {display:"none"} }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls='panel3-content'
                id='panel3-header'
            >
                How do I pause my Bonsai subsciption?
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quos fuga ad nemo dignissimos officia architecto omnis hic corrupti excepturi nobis, dolores eaque eveniet tempore corporis? Sequi ratione optio facilis.
            </AccordionDetails>
        </Accordion>

        <Accordion disableGutters elevation={0} sx={{ boxShadow: "none", ":before": {display:"none"} }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls='panel4-content'
                id='panel4-header'
            >
                What is your refund polity?
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quos fuga ad nemo dignissimos officia architecto omnis hic corrupti excepturi nobis, dolores eaque eveniet tempore corporis? Sequi ratione optio facilis.
            </AccordionDetails>
        </Accordion>
    </Container>
  )
}
