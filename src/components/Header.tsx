import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <AppBar position="sticky" color="primary" elevation={2}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Community Empowerment
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} href="#our-story">Our Story</Button>
          <Button color="inherit" component={Link} href="#what-we-do">What We Do</Button>
          <Button color="inherit" component={Link} href="#get-involved">Get Involved</Button>
          <Button color="inherit" component={Link} href="#our-team">Our Team</Button>
          <Button color="inherit" component={Link} href="#contact-us">Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
