import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { ReactNode } from "react";

interface StackedImageSectionProps {
  image: string;
  alt: string;
  title: string;
  children: ReactNode;
}

export default function StackedImageSection({ image, alt, title, children }: StackedImageSectionProps) {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CardMedia
        component="img"
        image={image}
        alt={alt}
        sx={{ width: '80%', height: '50%', objectFit: 'cover', minHeight: 220 }}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
          marginTop: 2,
        }}
      >
        <Typography variant="h4" color="primary" fontWeight={700} mb={2} mt={1} textAlign="center">{title}</Typography>
        {children}
      </Box>
    </Box>
  );
}
