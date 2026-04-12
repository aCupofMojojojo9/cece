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
import content from "../content/home.json";

const iconMap: Record<string, React.ReactNode> = {
  school: <SchoolIcon sx={{ fontSize: 50, color: '#003D7A' }} />,
  groups: <GroupsIcon sx={{ fontSize: 50, color: '#003D7A' }} />,
  volunteer: <VolunteerActivismIcon sx={{ fontSize: 50, color: '#003D7A' }} />,
  book: <AutoStoriesIcon sx={{ fontSize: 50, color: '#003D7A' }} />,
};

export default function HomeContent() {
  return (
    <Container maxWidth="xl" sx={{ pt: 4, pl: { xs: 0, sm: 0 }, pr: { xs: 0, sm: 0 } }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" fontWeight={700} mt={2} mb={1} color="primary">
          {content.hero.headingLine1}<br />{content.hero.headingLine2}
        </Typography>
        <Typography variant="h5" color="text.secondary">{content.hero.subheading}</Typography>
      </Box>

        <CardMedia
          component="img"
          image={content.hero.image}
          alt="Students"
          sx={{
            width: "100%",
            height: { xs: 180, sm: 270, md: 470 },
            objectFit: "cover"
          }}
        />
        <SectionWithImage
          image={content.intro.image}
          alt="Students"
          title={content.intro.title}
          bgColor="rgb(3, 104, 57)"
          textColor="white"
        >
          <Typography paragraph color="white">{content.intro.paragraph1}</Typography>
          <Typography paragraph color="white">{content.intro.paragraph2}</Typography>
          <Typography paragraph color="white">{content.intro.paragraph3}</Typography>
        </SectionWithImage>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={3} color="primary">
            {content.whatWeDo.heading}
          </Typography>
          <Typography variant="h6" textAlign="center" mb={8} color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            {content.whatWeDo.subheading}
          </Typography>

          {/* Our Approach Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" fontWeight={700} mb={4} color="primary">
              {content.whatWeDo.approach.heading}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              {content.whatWeDo.approach.paragraph1}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              {content.whatWeDo.approach.paragraph2}
            </Typography>
          </Box>

          {/* Programs Grid */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" fontWeight={700} mb={4} textAlign="center" color="primary">
              {content.whatWeDo.programs.heading}
            </Typography>
            <Grid container spacing={4}>
              {content.whatWeDo.programs.items.map((program, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Card sx={{ height: '100%', boxShadow: 3, '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                    <CardContent sx={{ textAlign: 'center', py: 4 }}>
                      <Box sx={{ mb: 2 }}>{iconMap[program.iconKey]}</Box>
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
              image={content.whatWeDo.difference.image}
              alt="Children Waving"
              sx={{ width: { xs: '100%', md: '45%' }, height: 'auto', borderRadius: 2, boxShadow: 3 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight={700} mb={3} color="primary">
                {content.whatWeDo.difference.heading}
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {content.whatWeDo.difference.paragraph1}
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {content.whatWeDo.difference.paragraph2}
              </Typography>
            </Box>
          </Box>

          {/* Our Focus Areas */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' }, gap: 4, mb: 8, alignItems: 'center' }}>
            <CardMedia
              component="img"
              image={content.whatWeDo.focusAreas.image}
              alt="Happy students"
              sx={{ width: { xs: '100%', md: '45%' }, height: 'auto', borderRadius: 2, boxShadow: 3 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight={700} mb={3} color="primary">
                {content.whatWeDo.focusAreas.heading}
              </Typography>
              {content.whatWeDo.focusAreas.items.map((area, i) => (
                <Typography key={i} variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  <strong>{area.label}:</strong> {area.text}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>

      <DonateSection />
      <Box>
        <CardMedia
          component="img"
          image={content.bottomImage}
          alt="Children Reading Books"
          sx={{ width: "100%", height: { xs: 180, sm: 270, md: 470 }, objectFit: "cover" }}
        />
      </Box>
    </Container>
  );
}
