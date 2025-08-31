import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const teamMembers = [
  {
    name: "David Ziama",
    role: "Founder, Board Member",
    image: "https://cecesdream.org/_assets/media/9acf0da9b0691086f9d57e40f415946e.png",
    bio: "David is passionate about education and community empowerment. He has worked in various nonprofit roles and is dedicated to helping underserved youth.",
    social: [],
  },
  {
    name: "Peter Lazarz",
    role: "Board Member",
    image: "https://cecesdream.org/_assets/media/2cf5b63e92c299dd3b0a5e489b28a8fc.png",
    bio: "Peter brings over 20 years of experience in the tech industry, focusing on software development and project management.",
    social: [],
  },
  {
    name: "Tera Palozola",
    role: "Board Member",
    image: "https://cecesdream.org/_assets/media/7757d5cf2c47e8f2c1ce45a98097c075.png",
    bio: "Tera is a dedicated advocate for mental health awareness and has been instrumental in various community outreach programs.",
    social: [],
  },
  {
    name: "Sandra Bruxvoort",
    role: "Board Member",
    image: "https://cecesdream.org/_assets/media/8ac1cfc58787c21c301e969971811503.png",
    bio: "Sandra has a background in finance and administration, with a passion for helping nonprofits achieve their financial goals.",
    social: [],
  },
  {
    name: "Jared Vanlandingham",
    role: "Board Member",
    image: "https://cecesdream.org/_assets/media/0961a7f962bf7493e16a7d5f7f508dfe.jpg",
    bio: "Jared is a community leader with a focus on youth mentorship and development programs.",
    social: [],
  },
  {
    name: "Ashley Steyer",
    role: "Board Member",
    image: "https://cecesdream.org/_assets/media/80b0655f53c3845c0bcccd4155e4f35d.png",
    bio: "Ashley is passionate about education and has been involved in various teaching and curriculum development initiatives.",
    social: [],
  },
  {
    name: "Michael Taylor",
    role: "Board Member",
    image: "https://cecesdream.org/_assets/media/838b30c39ace4f7b9b84674e687d543d.png",
    bio: "Michael has a diverse background in business and technology, with a strong commitment to community service.",
    social: [],
  },
];

export default function TeamSection() {
  return (
    <Box sx={{ mt: 8, mb: 8, px: { xs: 2, md: 8 } }}>
      <Typography variant="h3" color="primary" fontWeight={700} mb={4} textAlign="center">
        Meet Our Team
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {teamMembers.map((member, idx) => (
          <Box
            key={member.name}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: idx % 2 === 0 ? "row" : "row-reverse" },
              alignItems: "center",
              gap: 4,
              py: 4,
              borderBottom: "1px solid #eee",
            }}
          >
            <CardMedia
              component="img"
              image={member.image}
              alt={member.name}
              sx={{
                width: 180,
                height: 180,
                borderRadius: 3,
                objectFit: "cover",
                boxShadow: 2,
                mb: { xs: 2, md: 0 },
              }}
            />
            <Box sx={{ flex: 1, px: { xs: 0, md: 4 }, textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="h5" fontWeight={700} mb={1} textTransform="uppercase">
                {member.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" mb={2}>
                {member.role}
              </Typography>
              <Typography variant="body1" mb={2}>
                {member.bio}
              </Typography>
              {/* Social icons can be added here if needed */}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
