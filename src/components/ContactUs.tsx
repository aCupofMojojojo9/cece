"use client";

import React, { useState } from 'react';
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardMedia from '@mui/material/CardMedia';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required')
});

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      
      try {
        // Web3Forms - Get your free access key at https://web3forms.com
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: 'YOUR_ACCESS_KEY_HERE', // Get from https://web3forms.com
            name: `${values.firstName} ${values.lastName}`,
            email: values.email,
            message: values.message,
            subject: 'New Contact Form Submission from CECE Website'
          })
        });

        const data = await response.json();
        
        if (data.success) {
          setIsSubmitted(true);
          formik.resetForm();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Email send failed:', error);
        alert('Failed to send message. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  });

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
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 1, position: 'relative' }}>
            {isSubmitted && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(255, 255, 255, 0.98)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                  zIndex: 10,
                  p: 4
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 80, color: 'rgb(76, 175, 80)', mb: 2 }} />
                <Typography variant="h5" fontWeight={700} color="rgb(76, 175, 80)" mb={1}>
                  Message Sent!
                </Typography>
                <Typography variant="body1" color="text.secondary" textAlign="center">
                  Thank you for reaching out. We&apos;ll be in touch soon!
                </Typography>
              </Box>
            )}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <TextField 
                  label="First Name" 
                  required 
                  variant="outlined" 
                  fullWidth
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Typography 
                  variant="caption" 
                  color="error" 
                  sx={{ 
                    mt: 0.5, 
                    display: 'block',
                    minHeight: '16px',
                    visibility: formik.touched.firstName && formik.errors.firstName ? 'visible' : 'hidden'
                  }}
                >
                  {formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : '\u00A0'}
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <TextField 
                  label="Last Name" 
                  required 
                  variant="outlined" 
                  fullWidth
                  id="lastName"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Typography 
                  variant="caption" 
                  color="error" 
                  sx={{ 
                    mt: 0.5, 
                    display: 'block',
                    minHeight: '16px',
                    visibility: formik.touched.lastName && formik.errors.lastName ? 'visible' : 'hidden'
                  }}
                >
                  {formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : '\u00A0'}
                </Typography>
              </Box>
            </Box>
            <Box>
              <TextField 
                label="Email" 
                required 
                variant="outlined" 
                fullWidth
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Typography 
                variant="caption" 
                color="error" 
                sx={{ 
                  mt: 0.5, 
                  display: 'block',
                  minHeight: '16px',
                  visibility: formik.touched.email && formik.errors.email ? 'visible' : 'hidden'
                }}
              >
                {formik.touched.email && formik.errors.email ? formik.errors.email : '\u00A0'}
              </Typography>
            </Box>
            <Box>
              <TextField 
                label="Message" 
                required 
                variant="outlined" 
                fullWidth 
                multiline 
                minRows={5}
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Typography 
                variant="caption" 
                color="error" 
                sx={{ 
                  mt: 0.5, 
                  display: 'block',
                  minHeight: '16px',
                  visibility: formik.touched.message && formik.errors.message ? 'visible' : 'hidden'
                }}
              >
                {formik.touched.message && formik.errors.message ? formik.errors.message : '\u00A0'}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'right', mt: 2 }}>
              <Button 
                type="submit"
                variant="outlined" 
                color="primary"
                disabled={isSubmitting}
                sx={{ px: 4, py: 1.5, fontWeight: 700 }}
              >
                {isSubmitting ? 'Sending...' : 'Contact Us'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box></>
  );
}
