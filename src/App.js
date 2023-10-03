import './App.css';
import Navbar from './Component/Navbar';
import SectionOne from './Component/SectionOne';
import Custom from './Component/Custom';
import Power from './Component/Power';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SectionOne/>
      <Custom/>
      <Power/>
    </div>
  );
}

export default App;
