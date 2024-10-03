import { Link, ListItem } from '@mui/material'

export default function BonsaiFooterListItem({ href, title, color = "textSecondary", styles }) {
  return (
    <ListItem disableGutters><Link color={color} underline="none" href={href} sx={styles}>{title}</Link></ListItem>
  )
}
