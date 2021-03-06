import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PDFPage from './components/pdfPage/PDFPage';
import AboutUs from './page/aboutUs/AboutUs';
import Contact from './page/contactUs/Contact';
import Home from './page/home/Home';
import Reconditioning from './page/reconditioning/Reconditioning';
import Recycling from './page/recycling/Recycling';
import theme from './theme.js';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='quem-somos' element={<AboutUs />} />
          <Route path='sustentabilidade/reciclagem' element={<Recycling />} />
          <Route
            path='sustentabilidade/recondicionamento'
            element={<Reconditioning />}
          />
          <Route path='contato' element={<Contact />} />
          <Route path='catalogo' element={<PDFPage />}></Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
