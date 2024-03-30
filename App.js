import Navbar from "./component/Navbar";
import  Footer from "./component/Footer";
import Home from "./component/page/Home"
import ExercisesDetal from './component/page/ExercisesDetal'
// import {Box} from '@mui/material/Box'
import Box   from '@mui/material/Box';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
<Box>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/" element={<ExercisesDetal/>}/>
</Routes>
<Footer/>
</Box>

</div>
  );
}

export default App;
