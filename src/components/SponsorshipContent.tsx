"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import content from '../content/sponsorship.json';

export default function SponsorshipContent() {
  const photos = content.gallery.photos;
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  const goTo = useCallback((index: number) => {
    const next = (index + photos.length) % photos.length;
    setPrev(current);
    setCurrent(next);
    setTimeout(() => setPrev(null), 700);
  }, [current, photos.length]);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <>
      {/* Full-bleed hero slideshow with text overlay */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '70vw', sm: '60vw', md: '70vh' },
          minHeight: { xs: 320, sm: 450, md: 520 },
          maxHeight: { md: 760 },
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        {/* Previous photo (fades out) — blurred backdrop */}
        {prev !== null && (
          <>
            <Box
              component="img"
              src={photos[prev]}
              alt=""
              sx={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 25%',
                filter: 'blur(18px) brightness(0.55) saturate(1.2)',
                transform: 'scale(1.08)',
                opacity: 0,
                transition: 'opacity 0.7s ease',
              }}
            />
            <Box
              component="img"
              src={photos[prev]}
              alt=""
              sx={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'contain',
                opacity: 0,
                transition: 'opacity 0.7s ease',
              }}
            />
          </>
        )}

        {/* Current photo — blurred backdrop fills the frame */}
        <Box
          component="img"
          src={photos[current]}
          alt=""
          sx={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 25%',
            filter: 'blur(18px) brightness(0.55) saturate(1.2)',
            transform: 'scale(1.08)',
            opacity: 1,
            transition: 'opacity 0.7s ease',
          }}
        />

        {/* Current photo — sharp, fully visible, contained */}
        <Box
          component="img"
          src={photos[current]}
          alt=""
          sx={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'contain',
            opacity: 1,
            transition: 'opacity 0.7s ease',
          }}
        />

        {/* Dark gradient overlay */}
        <Box
          sx={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.35) 100%)',
          }}
        />

        {/* Heading text */}
        <Box
          sx={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            pb: { xs: 5, md: 7 },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{
              color: 'white',
              textShadow: '2px 2px 12px rgba(0,0,0,0.7)',
              fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
            }}
          >
            {content.hero.heading}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.88)',
              mt: 1.5,
              fontSize: { xs: '1rem', md: '1.15rem' },
              textShadow: '1px 1px 6px rgba(0,0,0,0.6)',
            }}
          >
            {content.hero.subheading}
          </Typography>
        </Box>

        {/* Prev arrow */}
        <IconButton
          onClick={() => goTo(current - 1)}
          sx={{
            position: 'absolute', left: { xs: 8, md: 20 }, top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: 'white',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.65)' },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        {/* Next arrow */}
        <IconButton
          onClick={() => goTo(current + 1)}
          sx={{
            position: 'absolute', right: { xs: 8, md: 20 }, top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: 'white',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.65)' },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>

        {/* Dot indicators */}
        <Box
          sx={{
            position: 'absolute', bottom: 16, left: 0, right: 0,
            display: 'flex', justifyContent: 'center', gap: 1,
          }}
        >
          {photos.map((_, i) => (
            <Box
              key={i}
              onClick={() => goTo(i)}
              sx={{
                width: i === current ? 20 : 7,
                height: 7,
                borderRadius: '4px',
                backgroundColor: i === current ? 'rgb(255,222,89)' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Box>

      {/* About section */}
      <Box sx={{ background: 'rgb(3, 104, 57)', py: { xs: 7, md: 10 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} color="white" mb={3}>
            {content.about.heading}
          </Typography>
          <Typography
            variant="body1"
            color="rgba(255,255,255,0.9)"
            sx={{ fontSize: '1.1rem', lineHeight: 1.9, mb: 2 }}
          >
            {content.about.body}
          </Typography>
          {content.about.body2 && (
            <Typography
              variant="body1"
              color="rgba(255,255,255,0.9)"
              sx={{ fontSize: '1.1rem', lineHeight: 1.9 }}
            >
              {content.about.body2}
            </Typography>
          )}
        </Container>
      </Box>

      {/* Donate CTA */}
      <Box sx={{ backgroundColor: 'rgb(190, 34, 47)', py: { xs: 7, md: 10 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            fontWeight={700}
            color="white"
            mb={2}
            sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}
          >
            {content.cta.heading}
          </Typography>
          <Typography
            variant="body1"
            color="rgba(255,255,255,0.9)"
            mb={4}
            sx={{ fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 600, mx: 'auto' }}
          >
            {content.cta.body}
          </Typography>
          <Button
            variant="contained"
            href={content.donateUrl}
            target="_blank"
            sx={{
              backgroundColor: 'rgb(255,222,89)',
              color: 'black',
              fontWeight: 700,
              px: 5,
              py: 1.5,
              fontSize: '1rem',
              borderRadius: 2,
              '&:hover': { backgroundColor: 'rgb(255,210,50)' },
            }}
          >
            {content.cta.buttonLabel}
          </Button>
          <Typography variant="caption" display="block" color="rgba(255,255,255,0.7)" mt={2}>
            {content.cta.disclaimer}
          </Typography>
        </Container>
      </Box>
    </>
  );
}
