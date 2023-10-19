import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/main';
import Navbar from './components/navbar/main.jsx'
import Product from './pages/productApp/main';
import SignDialog2 from './components/sign/SignUp';
import Youtube from './pages/productApp/youtube/main';
import Bstation from './pages/productApp/bstation/main';
import Canva from './pages/productApp/canva/main';
import Disney from './pages/productApp/disney/main';
import GetContact from './pages/productApp/Get contact/main';
import Loklok from './pages/productApp/loklok/main';
import Netflix from './pages/productApp/netflix/main';
import Picsart from './pages/productApp/pictart/main';
import Remini from './pages/productApp/remini/main';
import Sportfy from './pages/productApp/spotify/main';
import Viu from './pages/productApp/viu/main';
import WeTv from './pages/productApp/we/main';



function App() {

  return (
    <Router>
      <Navbar/>
      <div className='pt-28'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Product />} />
          <Route path="/signUp" element={<SignDialog2 />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/wetv" element={<WeTv />} />
          <Route path="/viu" element={<Viu />} />
          <Route path="/sportfy" element={<Sportfy />} />
          <Route path="/remini" element={<Remini />} />
          <Route path="/picsart" element={<Picsart />} />
          <Route path="/netflix" element={<Netflix />} />
          <Route path="/loklok" element={<Loklok />} />
          <Route path="/getcontact" element={<GetContact />} />
          <Route path="/disney" element={<Disney />} />
          <Route path="/canva" element={<Canva />} />
          <Route path="/bstation" element={<Bstation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
