'use client';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box component="footer" sx={{ background: theme.palette.primary.main, color: theme.palette.primary.contrastText, pt: 6, pb: 2, mt: 8 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'flex-start', gap: 4, px: 2 }}>
        {/* Mission Section */}
        <Box sx={{ flex: 1, minWidth: 220, mb: { xs: 4, md: 0 } }}>
          <Typography variant="h6" fontWeight={700} mb={2} color="secondary.main">Our Mission</Typography>
          <Typography variant="body2">
            CECE Dream provides educational needs to those with no options, breaking the cycle of lost childhoods and giving hope for generations to come.
          </Typography>
        </Box>
        {/* Social Section */}
        <Box sx={{ flex: 1, minWidth: 220, textAlign: 'center', mb: { xs: 4, md: 0 } }}>
          <Typography variant="h6" fontWeight={700} mb={2} color="secondary.main">Get Social With Us</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
            <IconButton size="large" sx={{ background: theme.palette.secondary.main, '&:hover': { background: theme.palette.secondary.dark } }}><FacebookIcon sx={{ color: theme.palette.primary.contrastText }} /></IconButton>
            <IconButton size="large" sx={{ background: theme.palette.secondary.main, '&:hover': { background: theme.palette.secondary.dark } }}><InstagramIcon sx={{ color: theme.palette.primary.contrastText }} /></IconButton>
            <IconButton size="large" sx={{ background: theme.palette.secondary.main, '&:hover': { background: theme.palette.secondary.dark } }}><LinkedInIcon sx={{ color: theme.palette.primary.contrastText }} /></IconButton>
            <IconButton size="large" sx={{ background: theme.palette.secondary.main, '&:hover': { background: theme.palette.secondary.dark } }}><YouTubeIcon sx={{ color: theme.palette.primary.contrastText }} /></IconButton>
          </Box>
          <Typography variant="body2">
            Come be a part of this amazing effort being led by CECE Dream. You will be happy that you did!
          </Typography>
        </Box>
        {/* Contact Section */}
        <Box sx={{ flex: 1, minWidth: 220 }}>
          <Typography variant="h6" fontWeight={700} mb={2} color="secondary.main">Contact CECE Dream</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOnIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
            <Typography variant="body2">Kansas City, MO, USA</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <EmailIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
            <Typography variant="body2">cece@cecesdream.org</Typography>
          </Box>
          <Button variant="contained" color="secondary" href="/donate" sx={{ mt: 2, fontWeight: 700, borderRadius: 2 }}>
            Donate
          </Button>
        </Box>
      </Box>
      <Box sx={{ background: theme.palette.background.paper, color: theme.palette.text.primary, textAlign: 'center', py: 2, mt: 6, fontSize: '1rem', borderRadius: 2 }}>
        CECE is a 501(c)(3) nonprofit organization and all donations are tax-deductible. © 2025 Community Empowerment & Childhood Education
      </Box>
    </Box>
  );
}
