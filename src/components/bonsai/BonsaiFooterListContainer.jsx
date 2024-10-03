import { Grid2, List, Typography } from "@mui/material";
import BonsaiFooterListItem from "./BonsaiFooterListItem";


export default function BonsaiFooterListContainer({ title, listItems }) {
  return (
    <Grid2 xs={12} sm={4}>
        <Typography variant="h6" sx={{ mb: 3 }}>{title}</Typography>
        <List>
            {listItems.map((item, index) => (
                <BonsaiFooterListItem key={index} href={item.href} title={item.title} color={item.color} styles={item.styles}/>
            ))}
            
        </List>
    </Grid2>
  )
}
