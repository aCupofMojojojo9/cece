import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003366", // Deep blue for accents
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffd600", // Yellow accent
      contrastText: "#003366",
    },
    background: {
      default: "#fff", // White background
      paper: "#fff",
    },
    text: {
      primary: "#003366", // Header/nav text
      secondary: "#222", // Body text
    },
  },
  typography: {
    fontFamily: [
      'Montserrat', 'Arial', 'Helvetica', 'sans-serif'
    ].join(','),
    h1: { fontWeight: 800, fontSize: '2.8rem', color: '#222', textAlign: 'center', letterSpacing: 1 },
    h2: { fontWeight: 700, fontSize: '2.2rem', color: '#222', textAlign: 'center', letterSpacing: 0.5 },
    h3: { fontWeight: 700, fontSize: '1.8rem', color: '#222', textAlign: 'center' },
    h4: { fontWeight: 700, fontSize: '1.4rem', color: '#222' },
    h5: { fontWeight: 700, fontSize: '1.1rem', color: '#222' },
    h6: { fontWeight: 700, fontSize: '1rem', color: '#222' },
    body1: { fontSize: '1.15rem', color: '#222', lineHeight: 1.7 },
    body2: { fontSize: '1rem', color: '#555', lineHeight: 1.6 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#003366',
          boxShadow: 'none',
          borderBottom: '1px solid #eee',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 64,
          justifyContent: 'center',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          fontWeight: 700,
          textTransform: 'none',
          padding: '10px 28px',
          fontSize: '1.1rem',
          color: '#003366',
        },
        text: {
          color: '#003366',
          fontWeight: 700,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: { color: '#222', fontWeight: 800 },
        h2: { color: '#222', fontWeight: 700 },
        h3: { color: '#222', fontWeight: 700 },
        h4: { color: '#222', fontWeight: 700 },
        h5: { color: '#222', fontWeight: 700 },
        h6: { color: '#222', fontWeight: 700 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
