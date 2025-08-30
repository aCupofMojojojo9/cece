import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactPage() {
  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', my: 6, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h4" color="primary" fontWeight={700} mb={3} textAlign="center">Contact Us</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Name" name="name" required fullWidth />
        <TextField label="Email" name="email" type="email" required fullWidth />
        <TextField label="Message" name="message" multiline rows={4} required fullWidth />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Send</Button>
      </Box>
    </Box>
  );
}
