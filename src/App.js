import './App.css';
import Header from './components/Header/Header'
import { Box } from "@material-ui/core"
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <Box style={{ overflowX: "hidden" }}>
      <Header />
      <Home />
      <Footer />
    </Box>
  );
}

export default App;
