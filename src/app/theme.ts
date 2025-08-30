import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Deep blue
    },
    secondary: {
      main: "#ffeb3b", // Soft yellow accent
    },
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },
    text: {
      primary: "#171717",
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: [
      'Segoe UI', 'Arial', 'Helvetica', 'sans-serif'
    ].join(','),
    h1: { fontWeight: 700, fontSize: '2.5rem', color: '#1976d2' },
    h2: { fontWeight: 700, fontSize: '2rem', color: '#1976d2' },
    h3: { fontWeight: 700, fontSize: '1.75rem', color: '#1976d2' },
    h4: { fontWeight: 700, fontSize: '1.5rem', color: '#1976d2' },
    h5: { fontWeight: 700, fontSize: '1.25rem', color: '#1976d2' },
    h6: { fontWeight: 700, fontSize: '1rem', color: '#1976d2' },
    body1: { fontSize: '1.1rem', color: '#171717' },
    body2: { fontSize: '1rem', color: '#555' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: '#1976d2',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1976d2',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
