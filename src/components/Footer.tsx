'use client';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import content from "../content/footer.json";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box component="footer" sx={{ background: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          px: { xs: '8%', md: '10%' },
          py: { xs: 6, md: 7 },
          gap: { xs: 5, md: 0 },
        }}
      >
        {/* Left — Logo + mission blurb */}
        <Box
          sx={{
            flex: '0 0 auto',
            width: { xs: '100%', md: '40%' },
            pr: { md: 6 },
            textAlign: { xs: 'center', md: 'left' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          <CardMedia
            component="img"
            image="/cece/site-photos/cece-logo-white-text.png"
            alt="CECE's Dream Logo"
            sx={{ height: 'auto', width: { xs: 150, md: 170 }, objectFit: 'contain', mb: 2.5 }}
          />
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, maxWidth: 340 }}>
            {content.social.description}
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, borderColor: 'rgba(255,255,255,0.15)' }} />

        {/* Right — contact + social */}
        <Box
          sx={{
            flex: 1,
            pl: { md: 6 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 5, sm: 6 },
            justifyContent: { sm: 'flex-start', md: 'space-around' },
            width: { xs: '100%', md: 'auto' },
          }}
        >
          {/* Contact info */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.5)', letterSpacing: 2, fontWeight: 700, display: 'block', mb: 2 }}>
              {content.contact.heading}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: { xs: 'center', sm: 'flex-start' }, mb: 1.5 }}>
              <LocationOnIcon sx={{ mr: 1, color: 'rgba(255,255,255,0.55)', fontSize: 18, mt: '2px' }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>{content.contact.address}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              <EmailIcon sx={{ mr: 1, color: 'rgba(255,255,255,0.55)', fontSize: 18 }} />
              <Typography
                component="a"
                href={`mailto:${content.contact.email}`}
                variant="body2"
                sx={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', '&:hover': { color: 'white', textDecoration: 'underline' } }}
              >
                {content.contact.email}
              </Typography>
            </Box>
          </Box>

          {/* Follow us */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.5)', letterSpacing: 2, fontWeight: 700, display: 'block', mb: 2 }}>
              {content.social.heading}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, gap: 1.5 }}>
              <IconButton
                component="a"
                href={content.social.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{ width: 42, height: 42, background: '#1877F3', borderRadius: 1.5, '&:hover': { background: '#1877F3', opacity: 0.85 } }}
              >
                <svg width="20" height="20" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.67 56V30.5h8.55l1.28-9.93h-9.83v-6.35c0-2.87.8-4.83 4.92-4.83h5.26V.37A70.5 70.5 0 0 0 35.2 0c-7.58 0-12.77 4.63-12.77 13.13v7.33h-8.58V30.5h8.58V56h9.24z" fill="#fff"/>
                </svg>
              </IconButton>
              <IconButton
                component="a"
                href={content.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{ width: 42, height: 42, background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', borderRadius: 1.5, '&:hover': { opacity: 0.85 } }}
              >
                <InstagramIcon sx={{ color: '#fff', fontSize: 24 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Copyright bar — year is hardcoded to avoid SSR hydration mismatch */}
      <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.12)', textAlign: 'center', py: 2 }}>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
          © 2026 CECE&apos;s Dream. All rights reserved. CECE is a registered 501(c)(3) nonprofit organization.
        </Typography>
      </Box>
    </Box>
  );
}
