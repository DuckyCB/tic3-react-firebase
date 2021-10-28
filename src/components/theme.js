// import { extendTheme } from "@chakra-ui/react"
//
// const config = {
// 	initialColorMode: "dark",
// 	useSystemColorMode: false,
// }
//
// const theme = extendTheme({ config })
//
// export default theme

const {createTheme} = require("@mui/material");
let theme = createTheme({
    palette: {
        mode: 'dark',
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
