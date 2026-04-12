"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SectionWithImage from "./SectionWithImage";
import DonateSection from "./DonateSection";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

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

export default function HomeContent() {
  return (
    <Container maxWidth="xl" sx={{ pt: 4, pl: { xs: 0, sm: 0 }, pr: { xs: 0, sm: 0 } }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" fontWeight={700} mt={2} mb={1} color="primary">Empowering dreams.<br />Building futures.</Typography>
        <Typography variant="h5" color="text.secondary">A nonprofit organization</Typography>
      </Box>

        <CardMedia
          component="img"
          image="/cece/photos/kids-running.jpg"
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
              At Cece&apos;s Dream, we believe that sustainable change comes from working hand-in-hand with the communities we serve.
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

          {/* Making a Real Difference */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 8, alignItems: 'center' }}>
            <CardMedia
              component="img"
              image="/cece/photos/kids-waving.jpg"
              alt="Children Waving"
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

          {/* Our Focus Areas */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' }, gap: 4, mb: 8, alignItems: 'center' }}>
            <CardMedia
              component="img"
              image="/cece/photos/kids-in-doorway.jpg"
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
