const {createTheme} = require("@mui/material");
let theme = createTheme({
    palette: {
        mode: 'light',
        orangebg: {
            main: '#ff9f00',
        },
        white: {
            main: '#ffffff'
        },
        tonalOffset: 0,
    }

});
export default theme
