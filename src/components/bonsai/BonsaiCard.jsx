import { Box, Button, Card, CardActions, CardContent, Divider, List, Typography } from "@mui/material";
import BonsaiListItem from "./BonsaiListItem";


export default function BonsaiCard({ title, price, characteristics }) {


  return (
    <Card variant="outlined" sx={{ flexGrow: 1, minWidth: "500px", p: 5 }}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h6">{title}</Typography>
            <Box display={"flex"} gap={1}>
              <Typography color="#4c4d5f" variant="h6" fontWeight={400}>$</Typography>
              <Typography color="#4c4d5f" variant="h3">{price}</Typography>
              <Typography color="#4c4d5f" variant="h6" fontWeight={400} alignSelf={"end"}>/MONTH</Typography>
            </Box>
            <Divider sx={{ border: 1, borderColor:"#00b289", my: 3 }}/>
            <List dense>
                {
                    characteristics.map((characteristic, index) => <BonsaiListItem title={characteristic} key={index}/>)
                }
            </List>
          </CardContent>
          <CardActions>
             <Button variant="contained" sx={{ width: "100%", py: 2, fontWeight: 700 }}>START FREE</Button>
          </CardActions>
    </Card>
  )
}
