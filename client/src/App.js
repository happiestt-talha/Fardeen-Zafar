import './App.css';
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './utils/theme';
import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

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
          <Navbar />
          <Portfolio />
          <Home />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
