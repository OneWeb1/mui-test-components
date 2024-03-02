import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'
import HomePage from "./pages/HomePage";

function App() {
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 400,
            md: 960,
            lg: 1200,
            xl: 1920
        }
    }
})

  return (
           <ThemeProvider theme={theme}>
               <HomePage/>
           </ThemeProvider>
  )
}

export default App
