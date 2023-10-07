import './App.css';
import Navbar from './Component/Navbar';
import SectionOne from './Component/SectionOne';
import Custom from './Component/Custom';
import Power from './Component/Power';
import PhotoSlider from './Component/PhotoSlider';
import Footer1 from './Component/Footer1';
import Footer2 from './Component/Footer2';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SectionOne/>
      <Custom/>
      <Power/>
      <PhotoSlider/>
      <Footer1/>
      <Footer2/>
    </div>
  );
}

export default App;
