import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ReactElement } from "react";

const teamMembers = [
	{
		name: "David Ziama",
		role: "Founder, Board Member",
		image: "/cece/david-ziama.png",
		bio: "David is passionate about education and community empowerment. He has worked in various nonprofit roles and is dedicated to helping underserved youth.",
		social: ["instagram", "facebook", "linkedin"],
	},
	{
		name: "Peter Lazarz",
		role: "Board Member",
		image: "/cece/peter-lazarz.png",
		bio: "Peter brings over 20 years of experience in the tech industry, focusing on software development and project management.",
		social: ["instagram", "facebook", "linkedin"],
	},
	{
		name: "Tera Palozola",
		role: "Board Member",
		image: "/cece/tera-palozola.png",
		bio: "Tera is a dedicated advocate for mental health awareness and has been instrumental in various community outreach programs.",
		social: ["instagram", "facebook", "linkedin"],
	},
	{
		name: "Sandra Bruxvoort",
		role: "Board Member",
		image: "/cece/sandra-bruxvoort.png",
		bio: "Sandra has a background in finance and administration, with a passion for helping nonprofits achieve their financial goals.",
		social: ["instagram", "facebook", "linkedin"],
	},
	{
		name: "Jared Vanlandingham",
		role: "Board Member",
		image: "/cece/jared-vanlandingham.jpg",
		bio: "Jared is a community leader with a focus on youth mentorship and development programs.",
		social: ["instagram", "facebook", "linkedin"],
	},
	{
		name: "Ashley Steyer",
		role: "Board Member",
		image: "/cece/ashley-steyer.png",
		bio: "Ashley is passionate about education and has been involved in various teaching and curriculum development initiatives.",
		social: ["instagram", "facebook", "linkedin"],
	},
	{
		name: "Michael Taylor",
		role: "Board Member",
		image: "/cece/michael-taylor.png",
		bio: "Michael has a diverse background in business and technology, with a strong commitment to community service.",
		social: ["instagram", "facebook", "linkedin"],
	},
	{
		name: "Jenny Waddle",
		role: "Board Member",
		image: "/cece/jenny-waddle.png",
		bio: "Jenny has a diverse background in business and technology, with a strong commitment to community service.",
		social: ["instagram", "facebook", "linkedin"],
	},
];

const socialIcons: Record<string, ReactElement> = {
	instagram: <InstagramIcon fontSize="medium" sx={{ color: "#E1306C" }} />,
	facebook: <FacebookIcon fontSize="medium" sx={{ color: "#1877F3" }} />,
	linkedin: <LinkedInIcon fontSize="medium" sx={{ color: "#0A66C2" }} />,
};

export default function TeamSection() {
	return (
    <>
      <Box>
        <CardMedia
          component="img"
          image="/cece/kids-in-classroom.jpg"
          alt="Children Reading Books"
          sx={{ width: "100%",
          height: { xs: 180, sm: 270, md: 470 },
          objectFit: "cover"}}
        />
      </Box>
      <Box sx={{ mt: 8, mb: 8, px: "15%" }}>
        <Typography
          variant="h1"
          color="primary"
          fontWeight={700}
          mb={4}
          textAlign="center"
        >
          Meet Our Team
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {teamMembers.map((member, idx) => (
            <>
              <Box
                key={member.name}
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: idx % 2 === 0 ? "row" : "row-reverse",
                  },
                  alignItems: "center",
                  gap: 4,
                  py: 4,
                }}
              >
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    width: 180,
                    height: 180,
                    borderRadius: '50%',
                    objectFit: "cover",
                    boxShadow: 2,
                    mb: { xs: 2, md: 0 },
                  }}
                />
                <Box
                  sx={{
                    flex: 1,
                    px: { xs: 0, md: 4 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    mb={1}
                    textTransform="uppercase"
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    mb={2}
                  >
                    {member.role}
                  </Typography>
                  <Typography variant="body1" mb={2}>
                    {member.bio}
                  </Typography>
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    {member.social.map((type) => (
                      <IconButton
                        key={type}
                        size="small"
                        aria-label={type}
                      >
                        {socialIcons[type]}
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </Box>
              {idx < teamMembers.length - 1 && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    py: 2,
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      height: 2,
                      background: "#eee",
                    }}
                  />
                  <CardMedia
                    component="img"
                    image="/cece/cece-logo.png"
                    alt="divider"
                    sx={{
                      width: 60,
                      height: 40,
                      objectFit: "cover",
                      mx: 2,
                      borderRadius: 2,
                    }}
                  />
                  <Box
                    sx={{
                      flex: 1,
                      height: 2,
                      background: "#eee",
                    }}
                  />
                </Box>
              )}
            </>
          ))}
        </Box>
      </Box>
    </>
	);
}
