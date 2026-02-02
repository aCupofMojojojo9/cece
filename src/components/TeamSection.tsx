import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const teamMembers = [
	{
		name: "David Ziama",
		role: "Founder, Board Member",
		image: "/cece/photos/david-ziama.png",
		bio: "David is passionate about education and community empowerment. He has worked in various nonprofit roles and is dedicated to helping underserved youth.",
		linkedInUrl: "https://www.linkedin.com/in/david-ziama-331274b6/",
	},
	{
		name: "Peter Lazarz",
		role: "Board Member",
		image: "/cece/photos/peter-lazarz.png",
		bio: "Peter brings over 20 years of experience in the tech industry, focusing on software development and project management.",
		linkedInUrl: "https://www.linkedin.com/in/peter-lazarz-52997657/",
	},
	{
		name: "Tera Palozola",
		role: "Board Member",
		image: "/cece/photos/tera-palozola.png",
		bio: "Tera is a dedicated advocate for mental health awareness and has been instrumental in various community outreach programs.",
		linkedInUrl: "https://www.linkedin.com/in/terapalozola/",
	},
	{
		name: "Sandra Bruxvoort",
		role: "Board Member",
		image: "/cece/photos/sandra-bruxvoort.png",
		bio: "Sandra has a background in finance and administration, with a passion for helping nonprofits achieve their financial goals.",
		linkedInUrl: "",
	},
	{
		name: "Jared Vanlandingham",
		role: "Board Member",
		image: "/cece/photos/jared-vanlandingham.jpg",
		bio: "Jared is a community leader with a focus on youth mentorship and development programs.",
		linkedInUrl: "https://www.linkedin.com/in/jared-vanlandingham-830a9455/",
	},
	{
		name: "Ashley Steyer",
		role: "Board Member",
		image: "/cece/photos/ashley-steyer.png",
		bio: "Ashley is passionate about education and has been involved in various teaching and curriculum development initiatives.",
		linkedInUrl: "https://www.linkedin.com/in/ashleynsteyer/",
	},
	{
		name: "Michael Taylor",
		role: "Board Member",
		image: "/cece/photos/michael-taylor.png",
		bio: "Michael has a diverse background in business and technology, with a strong commitment to community service.",
		linkedInUrl: "https://www.linkedin.com/in/michaelraytaylor/",
	},
	{
		name: "Jenny Waddle",
		role: "Board Member",
		image: "/cece/photos/jenny-waddle.png",
		bio: "Jenny has a diverse background in business and technology, with a strong commitment to community service.",
		linkedInUrl: "",
	},
];



export default function TeamSection() {
	return (
    <>
      <Box>
        <CardMedia
          component="img"
          image="/cece/photos/kids-in-classroom.jpg"
          alt="Children Reading Books"
          sx={{ width: "100%",
          height: { xs: 180, sm: 270, md: 470 },
          objectPosition: "center 20%",
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
                    textTransform="uppercase"
                    mb={1}
                  >
                    {member.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", md: "flex-start" },
                      gap: 1.5,
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      {member.role}
                    </Typography>
                    {member.linkedInUrl && (
                      <IconButton
                        component="a"
                        href={member.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        sx={{ 
                          width: 32, 
                          height: 32, 
                          background: '#0A66C2', 
                          borderRadius: 1.2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          '&:hover': { background: '#0077B5', transform: 'scale(1.05)', transition: 'all 0.2s' } 
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.268 28H3.156V11.16h5.112V28zM5.71 8.928c-1.636 0-2.964-1.348-2.964-3.008 0-1.66 1.328-3.008 2.964-3.008 1.636 0 2.964 1.348 2.964 3.008 0 1.66-1.328 3.008-2.964 3.008zM29.252 28h-5.1v-8.196c0-1.956-.036-4.472-2.724-4.472-2.728 0-3.148 2.128-3.148 4.328V28h-5.112V11.16h4.908v2.244h.072c.684-1.296 2.352-2.664 4.84-2.664 5.18 0 6.132 3.408 6.132 7.836V28h.132z" fill="#fff"/>
                        </svg>
                      </IconButton>
                    )}
                  </Box>
                  <Typography variant="body1" mb={2}>
                    {member.bio}
                  </Typography>
                </Box>
              </Box>
              {idx < teamMembers.length - 1 && (
                <Box
                  sx={{
                    width: "100%",
                    height: 2,
                    background: "#eee",
                    my: 4,
                  }}
                />
              )}
            </>
          ))}
        </Box>
      </Box>
    </>
	);
}
