import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './page/aboutUs/AboutUs';
import Home from './page/home/Home';
import Recycling from './page/recycling/Recycling';
import theme from './theme.js';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='recycling' element={<Recycling />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
