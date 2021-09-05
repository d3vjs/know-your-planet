import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <ThemeProvider>
      <MainContainer>
                <Navbar />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
