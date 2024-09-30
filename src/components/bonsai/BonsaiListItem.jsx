import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

export default function BonsaiListItem({ title }) {
  return (
    <ListItem disableGutters>
        <ListItemIcon sx={{ minWidth:30 }}>
            <CheckIcon color="primary" fontSize="small"/>
        </ListItemIcon>
        <ListItemText>{title}</ListItemText>
    </ListItem>
  )
}
