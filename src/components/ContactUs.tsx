import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CardMedia from '@mui/material/CardMedia';

export default function ContactUs() {
  return (
          <><Box>
      <CardMedia
        component="img"
        image="/cece/photos/kids-smiles.jpg"
        alt="Children Reading Books"
        sx={{
          width: "100%",
          height: { xs: 180, sm: 270, md: 470 },
          objectFit: "cover",
          objectPosition: "center 25%"
        }} />
    </Box><Box sx={{ maxWidth: 1100, mx: 'auto', mt: 8, mb: 8, p: { xs: 2, md: 4 }, background: '#fff', borderRadius: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 6, mb: 8 }}>
          <Box sx={{ flex: 1, textAlign: 'center', maxWidth: 400 }}>
            <IconButton disabled sx={{ background: 'rgb(190, 34, 47)', mb: 2, '&.Mui-disabled': { background: 'rgb(190, 34, 47)', opacity: 1 } }} size="large">
              <ChatIcon sx={{ color: '#fff', fontSize: 40 }} />
            </IconButton>
            <Typography variant="h5" fontWeight={700} mb={1}>Questions or Want to Get Involved?</Typography>
            <Typography variant="body1" fontWeight={700} color="text.secondary">Fill out the form below</Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center', maxWidth: 400 }}>
            <IconButton disabled sx={{ background: 'rgb(190, 34, 47)', mb: 2, '&.Mui-disabled': { background: 'rgb(190, 34, 47)', opacity: 1 } }} size="large">
              <VolunteerActivismIcon sx={{ color: '#fff', fontSize: 40 }} />
            </IconButton>
            <Typography variant="h5" fontWeight={700} mb={1}>Need Donation Info?</Typography>
            <Button variant="text" color="primary" href="https://donorbox.org/cece-790449" target="_blank" sx={{ fontWeight: 700 }}>Click for Donation Page</Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, mt: 4 }}>
          <Box sx={{ flex: 1, minWidth: 280 }}>
            <Typography variant="h5" fontWeight={700} mb={2}>Send Us a Message!</Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              We&apos;d love to hear from you! Share your questions or interest in getting involved, and we&apos;ll respond promptly.
            </Typography>
            <Typography variant="body1" color="primary" fontWeight={700} mb={2}>
              Follow us on Social Media
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <IconButton component="a" href="https://www.facebook.com/cecesdreamnonprofit" target="_blank" rel="noopener noreferrer" sx={{ width: 56, height: 56, background: '#1877F3', borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover': { background: '#1877F3', opacity: 0.9 } }}>
                <svg width="48" height="48" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.67 56V30.5h8.55l1.28-9.93h-9.83v-6.35c0-2.87.8-4.83 4.92-4.83h5.26V.37A70.5 70.5 0 0 0 35.2 0c-7.58 0-12.77 4.63-12.77 13.13v7.33h-8.58V30.5h8.58V56h9.24z" fill="#fff"/>
                </svg>
              </IconButton>
              <IconButton sx={{ display: 'none', width: 56, height: 56, background: '#0A66C2', borderRadius: 1.5, '&:hover': { background: '#0A66C2', opacity: 0.9 } }}><LinkedInIcon sx={{ color: '#fff', fontSize: 44 }} /></IconButton>
              <IconButton component="a" href="https://www.instagram.com/cecesdreamnonprofit" target="_blank" rel="noopener noreferrer" sx={{ width: 56, height: 56, background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', borderRadius: 1.5, '&:hover': { opacity: 0.9 } }}><InstagramIcon sx={{ color: '#fff', fontSize: 44 }} /></IconButton>
              <IconButton sx={{ display: 'none', width: 56, height: 56, background: '#FF0000', borderRadius: 1.5, '&:hover': { background: '#FF0000', opacity: 0.9 } }}><YouTubeIcon sx={{ color: '#fff', fontSize: 44 }} /></IconButton>
            </Box>
          </Box>
          <Box component="form" sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
              <TextField label="Full Name" required variant="outlined" fullWidth />
              <TextField label="Email" required variant="outlined" fullWidth />
            </Box>
            <TextField label="Message" required variant="outlined" fullWidth multiline minRows={5} />
            <Box sx={{ textAlign: 'right', mt: 2 }}>
              <Button variant="contained" sx={{ px: 4, py: 1.5, fontWeight: 700, backgroundColor: 'rgb(190, 34, 47)', color: 'white', '&:hover': { backgroundColor: 'rgb(170, 30, 42)' } }}>
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Box></>
  );
}
