import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CardMedia from '@mui/material/CardMedia';

export default function ContactUs() {
  return (
    <Box sx={{ maxWidth: 1100, mx: 'auto', mt: 8, mb: 8, p: { xs: 2, md: 4 }, background: '#fff', borderRadius: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 4, mb: 6 }}>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <IconButton sx={{ background: 'rgb(190, 34, 47)', mb: 2 }} size="large">
            <EmailIcon sx={{ color: '#fff', fontSize: 40 }} />
          </IconButton>
          <Typography variant="h5" fontWeight={700} mb={1}>Have Questions?</Typography>
          <Typography variant="body1" color="primary" fontWeight={700}>info@cecesdream.org</Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <IconButton sx={{ background: 'rgb(190, 34, 47)', mb: 2 }} size="large">
            <ChatIcon sx={{ color: '#fff', fontSize: 40 }} />
          </IconButton>
          <Typography variant="h5" fontWeight={700} mb={1}>Want to Talk with Us?</Typography>
          <Typography variant="body1" fontWeight={700}>Use the Form Below</Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <IconButton sx={{ background: 'rgb(190, 34, 47)', mb: 2 }} size="large">
            <AccountBalanceWalletIcon sx={{ color: '#fff', fontSize: 40 }} />
          </IconButton>
          <Typography variant="h5" fontWeight={700} mb={1}>Need Donation Info?</Typography>
          <Button variant="text" color="primary" href="https://donorbox.org/cece-790449" target="_blank" sx={{ fontWeight: 700 }}>Click for Donation Page</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
        <Box sx={{ flex: 1, height: 2, background: '#eee' }} />
        <CardMedia
          component="img"
          image="/cece/photos/cece-logo.png"
          alt="divider"
          sx={{
            width: 80,
            height: 40,
            objectFit: "cover",
            mx: 1,
            borderRadius: 1,
          }}
        />
        <Box sx={{ flex: 1, height: 2, background: '#eee' }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mt: 4 }}>
        <Box sx={{ flex: 1, minWidth: 280 }}>
          <Typography variant="h5" fontWeight={700} mb={2}>Send Us a Message!</Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            Do not hesitate to contact us. We will reply back to you as soon as possible.
          </Typography>
          <Typography variant="body1" color="primary" fontWeight={700} mb={2}>
            Join us on our Social Channels
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <IconButton component="a" href="https://www.facebook.com/cecesdreamnonprofit" target="_blank" rel="noopener noreferrer" size="large" sx={{ background: '#1877F3', '&:hover': { background: '#1877F3' }, '&:active': { background: '#1877F3' } }}><FacebookIcon sx={{ color: '#fff' }} /></IconButton>
            <IconButton size="large" sx={{ background: '#0A66C2', '&:hover': { background: '#0A66C2' }, '&:active': { background: '#0A66C2' } }}><LinkedInIcon sx={{ color: '#fff' }} /></IconButton>
            <IconButton component="a" href="https://www.instagram.com/cecesdreamnonprofit" target="_blank" rel="noopener noreferrer" size="large" sx={{ background: '#E1306C', '&:hover': { background: '#E1306C' }, '&:active': { background: '#E1306C' } }}><InstagramIcon sx={{ color: '#fff' }} /></IconButton>
            <IconButton size="large" sx={{ background: '#FF0000', '&:hover': { background: '#FF0000' }, '&:active': { background: '#FF0000' } }}><YouTubeIcon sx={{ color: '#fff' }} /></IconButton>
          </Box>
        </Box>
        <Box component="form" sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
            <TextField label="Full Name" required variant="outlined" fullWidth />
            <TextField label="Email" required variant="outlined" fullWidth />
            <TextField label="Subject" required variant="outlined" fullWidth />
          </Box>
          <TextField label="Message" required variant="outlined" fullWidth multiline minRows={5} sx={{ mt: 2 }} />
          <Box sx={{ textAlign: 'right', mt: 2 }}>
            <Button variant="contained" sx={{ px: 4, py: 1, fontWeight: 700, backgroundColor: 'rgb(255, 222, 89)', color: 'black', }}>
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
