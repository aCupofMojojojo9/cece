"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import SectionWithImage from "./SectionWithImage";
import StackedImageSection from "./StackedImageSection";
import DonateSection from "./DonateSection";

export default function HomeContent() {
  return (
    <Container maxWidth="xl" sx={{ pt: 4, pl: { xs: 0, sm: 0 }, pr: { xs: 0, sm: 0 } }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" fontWeight={700} mt={2} mb={1} color="primary">Empowering dreams.<br />Building futures.</Typography>
        <Typography variant="h5" color="text.secondary">A nonprofit organization</Typography>
      </Box>

        <CardMedia
          component="img"
          image="/cece/kids-running.jpg"
          alt="Students"
          sx={{
            width: "100%",
            height: { xs: 180, sm: 270, md: 470 },
            objectFit: "cover"
          }}
        />
        <SectionWithImage
          image="https://cecesdream.org/_assets/media/fb13521bc705f8f4f715a1d10161a84a.jpg"
          alt="Students"
          title="CECE’s Dream"
          bgColor="rgb(3, 104, 57)"
          textColor="white"
        >
          <Typography paragraph color="white">
            At CECE’s Dream, we believe that education is the key to breaking the cycle of poverty and unlocking a brighter future. We are a nonprofit organization dedicated to providing tuition assistance to students in developing countries who face financial barriers to accessing quality education.
          </Typography>
          <Typography paragraph color="white">
            Our mission is to empower underserved youth by supporting their academic journey - offering not just funding, but also hope, encouragement, and a chance to dream beyond their circumstances. Through partnerships with local schools, communities, and donors around the world, CECE Dream helps students stay in school, pursue higher education, and build the foundation for a better life.
          </Typography>
          <Typography paragraph color="white">
            Every child deserves the opportunity to learn. At CECE Dream, we’re making that dream a reality - one student at a time.
          </Typography>
        </SectionWithImage>
        <Box sx={{ width: '100%' }}>
          <Typography variant="h1" color="primary" fontWeight={700} mb={4} textAlign="center" sx={{ mt: 7 }}>
            What We Do
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 4,
              justifyContent: 'center',
              '@media (max-width:1066px)': {
                flexDirection: 'column',
              },
              paddingTop: '2%',
              paddingLeft: '5%',
              paddingRight: '5%',
              paddingBottom: '5%',
            }}
          >
            <StackedImageSection
              image="https://cecesdream.org/_assets/media/899a07da178291c4f369ba924fc7a90e.jpg"
              alt="Students"
              title="Financial Aid"
            >
              <Typography paragraph>We provide financial assistance for tuition fees, helping students afford a quality higher education - a critical first step to helping disadvantaged communities thrive.</Typography>
            </StackedImageSection>
            <StackedImageSection
              image="https://cecesdream.org/_assets/media/c96566f56b1df185c78e67d21b59eca3.jpg"
              alt="Students"
              title="Educational Resources"
            >
              <Typography paragraph>Whether a student or aspiring business owner, those in need are given the tools and resources to pursue their dreams without the barrier to accessibility.</Typography>
            </StackedImageSection>
          </Box>
      </Box>

      <DonateSection />
      <Box>
        <CardMedia
          component="img"
          image="https://cecesdream.org/_assets/media/68d5836d0cf8c4943ec17ad96ddc2547.jpg"
          alt="Children Reading Books"
          sx={{ width: "100%",
          height: { xs: 180, sm: 270, md: 470 },
          objectFit: "cover"}}
        />
      </Box>
    </Container>
  );
}
