import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Landing_page from './Components/Landing_page/Landing_page';
import Video_part from './Components/Video_part/Video_part';
import Tokennomics from './Components/Tokennomics/Tokennomics';
import Footer from './Components/Footer/Footer';
import P2p from './Components/P2p/P2p';
import Transcation from './Components/Transcation/Transcation';
import Secure_page from './Components/Secure_page/Secure_page';


function App() {
  return (
    <div className="App">
    <Header/>
    <Landing_page/>
    <Secure_page/>
    <P2p/>
    <Transcation/>
    <Video_part/>
    <Tokennomics/>
    <Footer/>
    
    </div>
  );
}

export default App;
