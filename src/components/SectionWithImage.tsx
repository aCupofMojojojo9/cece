import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { ReactNode } from "react";

interface SectionWithImageProps {
  image: string;
  alt: string;
  title: string;
  children: ReactNode;
  bgColor?: string;
}

export default function SectionWithImage({ image, alt, title, children, bgColor }: SectionWithImageProps) {
  return (
    <Box sx={{ backgroundColor: bgColor || 'transparent', width: '100%' }}>
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
            image={image}
            alt={alt}
            sx={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 220 }}
          />
        </Box>
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
          <Typography variant="h4" color="primary" fontWeight={700} mb={2}>{title}</Typography>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
