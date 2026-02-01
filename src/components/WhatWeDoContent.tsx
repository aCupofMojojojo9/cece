"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function WhatWeDoContent() {
  const programs = [
    {
      icon: <SchoolIcon sx={{ fontSize: 50, color: '#003D7A' }} />,
      title: 'Educational Resources',
      description: 'We provide schools with essential learning materials, books, and supplies to ensure students have the tools they need to succeed.'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 50, color: '#003D7A' }} />,
      title: 'Community Partnerships',
      description: 'We work closely with local communities, school administrators, and education leaders to create sustainable, long-term solutions.'
    },
    {
      icon: <VolunteerActivismIcon sx={{ fontSize: 50, color: '#003D7A' }} />,
      title: 'Direct Funding',
      description: 'We provide financial support to schools for infrastructure improvements, teacher salaries, and program development.'
    },
    {
      icon: <AutoStoriesIcon sx={{ fontSize: 50, color: '#003D7A' }} />,
      title: 'Capacity Building',
      description: 'We support teacher training and professional development to enhance the quality of education delivered to students.'
    }
  ];

  return (
    <>
      <Box>
        {/* Hero Image */}
        <CardMedia
          component="img"
          image="/cece/photos/kids-reading.jpeg"
          alt="What We Do"
          sx={{
            width: "100%",
            height: { xs: 350, sm: 450, md: 600 },
            objectFit: "cover",
            objectPosition: "center 45%"
          }}
        />

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={3} color="primary">
            What We Do
          </Typography>
          <Typography variant="h6" textAlign="center" mb={8} color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Empowering communities through education and creating lasting change for children in Liberia
          </Typography>

          {/* Our Approach Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" fontWeight={700} mb={4} color="primary">
              Our Approach
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              At CECE&apos;s Dream, we believe that sustainable change comes from working hand-in-hand with the communities we serve. 
              Our approach is built on three core principles: partnership, sustainability, and impact. We don&apos;t just provide 
              one-time assistance; we build lasting relationships and create programs that will continue to benefit children 
              and communities for years to come.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Our founder, David Ziama, maintains direct connections with schools and community leaders in Liberia, ensuring 
              that our resources reach those who need them most. Through regular communication and on-the-ground visits, we 
              assess needs, measure impact, and adapt our programs to best serve each unique community.
            </Typography>
          </Box>

          {/* Programs Grid */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" fontWeight={700} mb={4} textAlign="center" color="primary">
              Our Programs
            </Typography>
            <Grid container spacing={4}>
              {programs.map((program, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Card sx={{ height: '100%', boxShadow: 3, '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                    <CardContent sx={{ textAlign: 'center', py: 4 }}>
                      <Box sx={{ mb: 2 }}>
                        {program.icon}
                      </Box>
                      <Typography variant="h5" fontWeight={700} mb={2} color="primary">
                        {program.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {program.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Impact Section with Image */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 8, alignItems: 'center' }}>
            <CardMedia
              component="img"
              image="/cece/photos/liberia-children.jpg"
              alt="Children in Liberia"
              sx={{
                width: { xs: '100%', md: '45%' },
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight={700} mb={3} color="primary">
                Making a Real Difference
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Every donation, every volunteer hour, and every partnership we build translates directly into improved 
                educational opportunities for children in Liberia. We work with multiple schools, providing support that 
                ranges from basic supplies to comprehensive infrastructure improvements.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Our upcoming initiatives include David Ziama&apos;s trip to Liberia in March 2026, where he will personally 
                meet with school principals and administrators, assess current needs, and deliver funding to support 
                ongoing educational programs. This hands-on approach ensures transparency and maximizes the impact of 
                every dollar donated.
              </Typography>
            </Box>
          </Box>

          {/* Focus Areas Section with Image */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' }, gap: 4, mb: 8, alignItems: 'center' }}>
            <CardMedia
              component="img"
              image="/cece/photos/kids-smiling.jpg"
              alt="Happy students"
              sx={{
                width: { xs: '100%', md: '45%' },
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight={700} mb={3} color="primary">
                Our Focus Areas
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                <strong>Primary Education:</strong> We prioritize early childhood and primary education, recognizing that 
                a strong foundation is essential for lifelong learning and success.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                <strong>Teacher Support:</strong> Quality education requires quality teachers. We provide resources and 
                support to help educators deliver the best possible learning experiences.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                <strong>Infrastructure:</strong> Safe, well-equipped learning environments are crucial. We fund repairs, 
                improvements, and essential infrastructure projects to create spaces where children can thrive.
              </Typography>
            </Box>
          </Box>
        </Container>

        {/* Call to Action */}
        <Box sx={{ backgroundColor: 'rgb(190, 34, 47)', width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'column',
                md: 'row',
              },
              '@media (max-width:1107px)': {
                flexDirection: 'column',
              },
              alignItems: 'stretch',
              gap: 4,
              p: '5%',
              width: '100%',
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: '55%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                '@media (max-width:1107px)': {
                  width: '100%',
                },
              }}
            >
              <Typography variant="h2" color={'white'} fontWeight={100} mb={2} textAlign="left" sx={{ fontStyle: 'italic' }}>
                With a passionate community behind us, <span style={{color: 'rgb(255, 222, 89)', fontWeight: '700'}}>remarkable things become possible.</span>
              </Typography>
              <Typography paragraph color="white">
                Thank you for supporting CECE Dream. Your generosity makes our mission possible. Whether you&apos;d like to give once, contribute monthly, or sponsor a child, click the button below to get started. Every gift makes a difference.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" sx={{backgroundColor: 'rgb(255, 222, 89)', color: 'black', width: '200px', fontWeight: 700, mb: 1}} href="https://donorbox.org/cece-790449" target="_blank">Donate today</Button>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant="caption" color="white">CECE is a 501(c)(3) nonprofit organization and all donations are tax-deductible.</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: '100%', md: '45%' },
                flexShrink: 0,
                display: 'flex',
                alignItems: 'stretch',
                '@media (max-width:1107px)': {
                  width: '100%',
                },
              }}
            >
              <CardMedia
                component="img"
                image="/cece/photos/kids-smiling.jpg"
                alt="Children"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', minHeight: 220 }}
              />
            </Box>
          </Box>
        </Box>

        <Box>
          <CardMedia
            component="img"
            image="https://cecesdream.org/_assets/media/68d5836d0cf8c4943ec17ad96ddc2547.jpg"
            alt="Children Reading Books"
            sx={{ 
              width: "100%",
              height: { xs: 180, sm: 270, md: 470 },
              objectFit: "cover"
            }}
          />
        </Box>
      </Box>
    </>
  );
}
