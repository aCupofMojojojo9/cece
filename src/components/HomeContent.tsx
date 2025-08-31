"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import SectionWithImage from "./SectionWithImage";
import StackedImageSection from "./StackedImageSection";
import DonateSection from "./DonateSection";

export default function HomeContent() {
  return (
    <Container maxWidth="xl" sx={{ pt: 4, pb: 4, pl: { xs: 0, sm: 0 }, pr: { xs: 0, sm: 0 } }}>

      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" fontWeight={700} mt={2} mb={1} color="primary">Empowering dreams.<br />Building futures.</Typography>
        <Typography variant="h5" color="text.secondary">A nonprofit organization</Typography>
      </Box>

      <CardMedia
        component="img"
        image="https://cecesdream.org/_assets/media/14378b6fe8412e01c9a561382e310811.jpg"
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

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" color="primary" fontWeight={700} mb={4} textAlign="center">Meet Our Team</Typography>
        <Grid container columns={12} spacing={4} justifyContent="center">
          <Grid size={{xs: 12, sm: 6, md: 2}}>
            <Box textAlign="center">
              <CardMedia
                component="img"
                image="https://cecesdream.org/_assets/media/9acf0da9b0691086f9d57e40f415946e.png"
                alt="David Ziama"
                sx={{ width: 120, height: 120, borderRadius: '50%', mx: 'auto', objectFit: 'cover' }}
              />
              <Typography variant="h6">David Ziama</Typography>
              <Typography variant="body2" color="text.secondary">Founder, Board Member</Typography>
            </Box>
          </Grid>
          <Grid size={{xs: 12, sm:6, md: 2}}>
            <Box textAlign="center">
              <CardMedia
                component="img"
                image="https://cecesdream.org/_assets/media/2cf5b63e92c299dd3b0a5e489b28a8fc.png"
                alt="Peter Lazarz"
                sx={{ width: 120, height: 120, borderRadius: '50%', mx: 'auto', objectFit: 'cover' }}
              />
              <Typography variant="h6">Peter Lazarz</Typography>
              <Typography variant="body2" color="text.secondary">Board Member</Typography>
            </Box>
          </Grid>
          <Grid size={{xs: 12, sm:6, md: 2}}>
            <Box textAlign="center">
              <CardMedia
                component="img"
                image="https://cecesdream.org/_assets/media/7757d5cf2c47e8f2c1ce45a98097c075.png"
                alt="Tera Palozola"
                sx={{ width: 120, height: 120, borderRadius: '50%', mx: 'auto', objectFit: 'cover' }}
              />
              <Typography variant="h6">Tera Palozola</Typography>
              <Typography variant="body2" color="text.secondary">Board Member</Typography>
            </Box>
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 2}}>
            <Box textAlign="center">
              <CardMedia
                component="img"
                image="https://cecesdream.org/_assets/media/8ac1cfc58787c21c301e969971811503.png"
                alt="Sandra Bruxvoort"
                sx={{ width: 120, height: 120, borderRadius: '50%', mx: 'auto', objectFit: 'cover' }}
              />
              <Typography variant="h6">Sandra Bruxvoort</Typography>
              <Typography variant="body2" color="text.secondary">Board Member</Typography>
            </Box>
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 2}}>
            <Box textAlign="center">
              <CardMedia
                component="img"
                image="https://cecesdream.org/_assets/media/0961a7f962bf7493e16a7d5f7f508dfe.jpg"
                alt="Jared Vanlandingham"
                sx={{ width: 120, height: 120, borderRadius: '50%', mx: 'auto', objectFit: 'cover' }}
              />
              <Typography variant="h6">Jared Vanlandingham</Typography>
              <Typography variant="body2" color="text.secondary">Board Member</Typography>
            </Box>
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 2}}>
            <Box textAlign="center">
              <CardMedia
                component="img"
                image="https://cecesdream.org/_assets/media/80b0655f53c3845c0bcccd4155e4f35d.png"
                alt="Ashley Steyer"
                sx={{ width: 120, height: 120, borderRadius: '50%', mx: 'auto', objectFit: 'cover' }}
              />
              <Typography variant="h6">Ashley Steyer</Typography>
              <Typography variant="body2" color="text.secondary">Board Member</Typography>
            </Box>
          </Grid>
          <Grid size={{xs: 12, sm:6, md: 2}}>
            <Box textAlign="center">
              <CardMedia
                component="img"
                image="https://cecesdream.org/_assets/media/838b30c39ace4f7b9b84674e687d543d.png"
                alt="Michael Taylor"
                sx={{ width: 120, height: 120, borderRadius: '50%', mx: 'auto', objectFit: 'cover' }}
              />
              <Typography variant="h6">Michael Taylor</Typography>
              <Typography variant="body2" color="text.secondary">Board Member</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ textAlign: 'center', mt: 8, mb: 8 }}>
        <Typography variant="h4" color="primary" fontWeight={700} mb={2}>Contact Us</Typography>
        <Typography>Kansas City, MO, USA<br />+1 816 800 1474<br />cece@cecesdream.org<br />cecesdream.org</Typography>
      </Box>

      <Box component="footer" sx={{ textAlign: 'center', py: 4, background: '#f5f5f5', color: '#555', fontSize: '1rem', mt: 8 }}>
        <Typography>© 2025 Community Empowerment & Childhood Education</Typography>
      </Box>
    </Container>
  );
}
