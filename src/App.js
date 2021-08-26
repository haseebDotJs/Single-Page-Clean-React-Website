import './App.css';
import Header from './components/Header/Header'
import { Box } from "@material-ui/core"
import Home from './pages/Home/Home'

function App() {

  return (
    <Box >
      <Header />
      <Home/>
    </Box>
  );
}

export default App;
