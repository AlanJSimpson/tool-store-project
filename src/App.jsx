import { ThemeProvider } from '@mui/material';
import Home from './page/home/Home';
import theme from './theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
