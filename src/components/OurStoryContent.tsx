"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import content from '../content/our-story.json';

export default function OurStoryContent() {
  return (
    <>
      <Box>
        {/* Hero Image */}
        <CardMedia
          component="img"
          image={content.hero.image}
          alt="CECE's Dream Story"
          sx={{
            width: "100%",
            height: { xs: 250, sm: 350, md: 500 },
            objectFit: "cover",
            objectPosition: "center 40%"
          }}
        />

        {/* Story Content */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={6} color="primary">
            {content.heading}
          </Typography>

          {/* How It All Began */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h5" fontWeight={700} mb={3} color="primary">
              {content.howItBegan.heading}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              {content.howItBegan.paragraph1}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              {content.howItBegan.paragraph2}
            </Typography>
          </Box>

          {/* Mission with Image */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 8, alignItems: 'center' }}>
            <CardMedia
              component="img"
              image={content.howItBegan.image}
              alt="Children reading"
              sx={{ width: { xs: '100%', md: '50%' }, height: 'auto', borderRadius: 2, boxShadow: 3 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" fontWeight={700} mb={2} color="primary">
                {content.mission.heading}
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {content.mission.paragraph1}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {content.mission.paragraph2}
              </Typography>
            </Box>
          </Box>

          {/* Impact with Image */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' }, gap: 4, mb: 8, alignItems: 'center' }}>
            <CardMedia
              component="img"
              image={content.impact.image}
              alt="Children in Liberia"
              sx={{ width: { xs: '100%', md: '50%' }, height: 'auto', borderRadius: 2, boxShadow: 3 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" fontWeight={700} mb={2} color="primary">
                {content.impact.heading}
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {content.impact.paragraph1}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {content.impact.paragraph2}
              </Typography>
            </Box>
          </Box>

          {/* Vision Statement */}
          <Box sx={{ textAlign: 'center', py: 6, px: 4, background: 'rgba(0, 61, 122, 0.05)', borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={700} mb={3} color="primary">
              {content.vision.heading}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, fontStyle: 'italic', maxWidth: 800, mx: 'auto' }}>
              {content.vision.quote}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

