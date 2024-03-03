import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import routes from './routes'
import './App.css'


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
                    <Router>
                        <Routes>
                            {routes.map(route => <Route path={route.path} element={route.element}/> )}
                        </Routes>
                    </Router>
               </ThemeProvider>
      )
}

export default App
