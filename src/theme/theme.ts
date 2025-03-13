import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANSans, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "IRANSans, sans-serif",
    },
    h2: {
      fontFamily: "IRANSans, sans-serif",
    },
    h3: {
      fontFamily: "IRANSans, sans-serif",
    },
    h4: {
      fontFamily: "IRANSans, sans-serif",
    },
    h5: {
      fontFamily: "IRANSans, sans-serif",
    },
    h6: {
      fontFamily: "IRANSans, sans-serif",
    },
    subtitle1: {
      fontFamily: "IRANSans, sans-serif",
    },
    subtitle2: {
      fontFamily: "IRANSans, sans-serif",
    },
    body1: {
      fontFamily: "IRANSans, sans-serif",
    },
    body2: {
      fontFamily: "IRANSans, sans-serif",
    },
    button: {
      fontFamily: "IRANSans, sans-serif",
    },
    caption: {
      fontFamily: "IRANSans, sans-serif",
    },
    overline: {
      fontFamily: "IRANSans, sans-serif",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'IRANSans';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url('/sansfa.ttf') format('ttf');
        }
        @font-face {
          font-family: 'IRANSans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/sansfa.ttf') format('ttf');
        }
        @font-face {
          font-family: 'IRANSans';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url('/sansfa.ttf') format('ttf');
        @font-face {
          font-family: 'IRANSans';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url('/sansfa.ttf') format('ttf');
        }
      `,
    },
  },
});

export default theme;
