import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary:{
            main: '#1565C0'
        },
        secondary: {
            main: '#00838F'
        },
        error: {
            main: red.A400
        }
    }
})