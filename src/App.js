
import './App.css';
import { Story } from './Assets/Story/Story';
import CardComponent from './CardComponent/CardComponent';
import GoogleComponent from './GoogleComponent/GoogleComponent';
import Hero from './HeroComponent/Hero';
import TopNavbar from './TopNavbar/TopNavbar';
import StarIcon from '@mui/icons-material/Star';



function App() {
  return (
    <div className="App">
      <div className='app-container'>
      <span ><StarIcon /></span>
    <span><TopNavbar /></span> 
    <span><StarIcon /></span>
    
      </div>
      <Hero />
      <GoogleComponent />
      <CardComponent />
      <Story />
    </div>
  );
}

export default App;
