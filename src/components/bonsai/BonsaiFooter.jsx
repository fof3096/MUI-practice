import { Container, Grid2 } from '@mui/material'
import BonsaiFooterListContainer from './BonsaiFooterListContainer'

export default function BonsaiFooter() {
  return (
    <Container disableGutters maxWidth="xl" component={"footer"} sx={{ my: 20 }}>
        <Grid2 container spacing={3} justifyContent="space-around">
            <BonsaiFooterListContainer title={"PRODUCT"} listItems={[
                {href: "#", title: "Proposals"},
                {href: "#", title: "Contracts"},
                {href: "#", title: "Invoicing"},
                {href: "#", title: "Client CRM"},
                {href: "#", title: "Time Tracking"},
                {href: "#", title: "Task Tracking"},
                {href: "#", title: "Forms"},
                {href: "#", title: "Accounting"},
                {href: "#", title: "Bonsai Tax"},
                {href: "#", title: "Bonsai Cash"},
                {href: "#", title: "Pricing", color: "primary", styles:{ mt: 2 }},
                {href: "#", title: "Bonsai Reviews"}
            ]}/>

          <BonsaiFooterListContainer title={"FREE RESOURCES"} listItems={[
                { href: "#", title: "Freelance Resources"},
                { href: "#", title: "Freelance Blog by Bonsai"},
                { href: "#", title: "How to Write a Contract"},
                { href: "#", title: "Online Signature Maker"},
                { href: "#", title: "Self-Employed Taxes Hub"},
                { href: "#", title: "Self-Employed Tax Calculator"},
                { href: "#", title: "Self-Employed Tax Deductions"},
                { href: "#", title: "Templates", styles:{ fontWeight: "bold", mt: 2 }},
                { href: "#", title: "Invoice Templates"},
                { href: "#", title: "Proposal Templates"},
                { href: "#", title: "Contract Templates"},
                { href: "#", title: "Agreement Templates"},
                { href: "#", title: "Scope of Work Templates"},
                { href: "#", title: "Quote Templates"},
                { href: "#", title: "Credit Note Templates"},
                { href: "#", title: "Estimate Templates"}
            ]}/>

          <BonsaiFooterListContainer title={"BONSAI"} listItems={[
                { href: "#", title: "About"},
                { href: "#", title: "Careers"},
                { href: "#", title: "Support"},
                { href: "#", title: "LinkedIn"},
                { href: "#", title: "Twitter"},
                { href: "#", title: "Privacy Policy"},
                { href: "#", title: "Legal"},
                { href: "#", title: "Affiliates", styles:{ mt: 2 }},
                { href: "#", title: "Write for Us"},
                { href: "#", title: "Comparisons", styles:{ mt: 2 }}
            ]}/>
      </Grid2>
    </Container>
  )
}
