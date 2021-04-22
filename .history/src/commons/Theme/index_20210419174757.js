import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  color: {
    primary: "red",
    secondary: "#00bcd4",
    error: "#e64a19",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 4,
    backgroundColor: "#7b1fa2",
    textColor: "#ffffff",
    border: "#cccccc",
  },
});

export default theme;
