import './App.css';
import styled, { ThemeProvider } from 'styled-components'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { theme } from './utils/theme';
import Home from './containers/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

const AppContainer = styled.div`
  max-width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
`
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='*' element={<Home />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
