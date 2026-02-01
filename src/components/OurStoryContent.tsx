"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';

export default function OurStoryContent() {
  return (
    <>
      <Box>
        {/* Hero Image */}
        <CardMedia
          component="img"
          image="/cece/photos/kids-smiling.jpg"
          alt="CECE's Dream Story"
          sx={{
            width: "100%",
            height: { xs: 250, sm: 350, md: 500 },
            objectFit: "cover",
            objectPosition: "center 30%"
          }}
        />

        {/* Story Content */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={6} color="primary">
            Our Story
          </Typography>

          {/* Main Story */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h5" fontWeight={700} mb={3} color="primary">
              How It All Began
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              CECE&apos;s Dream was born from a deeply personal journey and a vision to transform education in underserved communities. 
              Founded by David Ziama, our organization represents the culmination of years of dedication to community empowerment 
              and educational excellence. David&apos;s own experiences growing up in Liberia and witnessing the transformative power of 
              education inspired him to create an organization that could bridge the gap between aspiration and opportunity.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              The name &quot;CECE&quot; stands for Community Empowerment and Childhood Education – two pillars that form the foundation of 
              everything we do. We believe that education is not just about books and classrooms; it&apos;s about empowering entire 
              communities to break cycles of poverty and create lasting change for future generations.
            </Typography>
          </Box>

          {/* Image Section 1 */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 8, alignItems: 'center' }}>
            <CardMedia
              component="img"
              image="/cece/photos/kids-reading.jpg"
              alt="Children reading"
              sx={{
                width: { xs: '100%', md: '50%' },
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" fontWeight={700} mb={2} color="primary">
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                We are committed to providing educational resources, support, and opportunities to children in Liberia and beyond. 
                Through strategic partnerships with local schools and community leaders, we work to ensure that every child has 
                access to quality education, regardless of their circumstances.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Our approach is holistic – we don&apos;t just provide funding; we build relationships, foster community engagement, 
                and create sustainable programs that will continue to benefit children for years to come.
              </Typography>
            </Box>
          </Box>

          {/* Image Section 2 */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' }, gap: 4, mb: 8, alignItems: 'center' }}>
            <CardMedia
              component="img"
              image="/cece/photos/liberia-children.jpg"
              alt="Children in Liberia"
              sx={{
                width: { xs: '100%', md: '50%' },
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" fontWeight={700} mb={2} color="primary">
                Our Impact
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Since our founding, we&apos;ve been dedicated to making a measurable difference in the lives of children and their communities. 
                We work directly with schools in Liberia, providing essential resources, funding for infrastructure improvements, 
                and support for teachers and administrators.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Our board of dedicated volunteers brings together diverse expertise in education, technology, finance, and community 
                development. Together, we&apos;re building a future where every child has the opportunity to pursue their dreams through education.
              </Typography>
            </Box>
          </Box>

          {/* Vision Statement */}
          <Box sx={{ textAlign: 'center', py: 6, px: 4, background: 'rgba(0, 61, 122, 0.05)', borderRadius: 3 }}>
            <Typography variant="h5" fontWeight={700} mb={3} color="primary">
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, fontStyle: 'italic', maxWidth: 800, mx: 'auto' }}>
              &quot;We envision a world where every child, regardless of their circumstances, has access to quality education 
              and the opportunity to build a brighter future. Through community empowerment and strategic partnerships, 
              we&apos;re turning this vision into reality, one classroom at a time.&quot;
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
