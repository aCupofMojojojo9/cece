import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import content from "../content/donate.json";

export default function DonateSection() {
  return (
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
          height: { md: 'auto' },
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
          <Typography variant="h2" color={'white'} fontWeight={100} mb={2} textAlign="left" sx={{ fontStyle: 'italic' }}>{content.quotePrefix}
<span style={{color: 'rgb(255, 222, 89)', fontWeight: '700'}}> {content.quoteHighlight}</span></Typography>
          <Typography paragraph color="white">{content.body}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" sx={{backgroundColor: 'rgb(255, 222, 89)', color: 'black', width: '200px', fontWeight: 700, mb: 1}} href={content.donateUrl} target="_blank">{content.buttonLabel}</Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Typography variant="caption" color="white">{content.disclaimer}</Typography>
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
            image={content.image}
            alt="Children"
            sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', minHeight: 220 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
