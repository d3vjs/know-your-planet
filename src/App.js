import logo from './logo.svg';
import './App.css';
import MainContainer from './MainContainer/MainContainer';
import ThemeProvider from './ThemeProvider/ThemeProvider';
import Navbar from './Navbar/Navbar';

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
