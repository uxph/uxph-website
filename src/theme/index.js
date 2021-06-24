import { createMuiTheme } from "@material-ui/core/styles";

const uxphTheme = createMuiTheme({
  // Typography
  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    body1: {
      color: "#6c757d",
    },

    h1: {
      fontWeight: 700,
      color: "#495057",
      fontSize: "3rem",
    },

    h2: {
      fontWeight: 700,
      color: "#495057",
      fontSize: "2rem",
    },

    h3: {
      fontWeight: 700,
      color: "#495057",
      fontSize: "1.5rem",
    },

    h4: {
      fontWeight: 700,
      color: "#495057",
      fontSize: "1.125rem",
    },

    h5: {
      fontWeight: 700,
      color: "#495057",
    },

    h6: {
      fontWeight: 700,
      color: "#495057",
    },

    overline: {
      color: "#828282",
      fontWeight: 500,
    },
  },

  // Colors
  palette: {
    primary: {
      main: "#4B68FE",
      light: "#6A83FF",
    },

    success: {
      main: "#1B9959",
      light: "#C8F1CA",
    },

    error: {
      main: "#D94949",
      light: "#FFE3E1",
    },

    warning: {
      main: "#F3852A",
      light: "#FAE3B8",
    },

    info: {
      main: "#607D8B",
      light: "#D9E7EE",
    },

    // Miscellaneous Colors
    blue: {
      primary: "#255ED6",
      secondary: "#C8DAFF",
    },

    red: {
      primary: "#D94949",
      secondary: "#FFE3E1",
    },

    orange: {
      primary: "#F3852A",
      secondary: "#FAE3B8",
    },

    green: {
      primary: "#1B9959",
      secondary: "#C8F1CA",
    },

    sleet: {
      primary: "#607D8B",
      secondary: "#D9E7EE",
    },

    purple: {
      primary: "#9F62DB",
      secondary: "#8637D0",
    },
  },

  // Component overrides
  overrides: {
    // todo: fill this up with component overrides
  },
});

export default uxphTheme;
