import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './page/aboutUs/AboutUs';
import Home from './page/home/Home';
import theme from './theme.js';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='aboutus' element={<AboutUs />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
