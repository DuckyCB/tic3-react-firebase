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
const theme = createTheme({
    palette: {
        mode: 'dark',
    }
});
export default theme
