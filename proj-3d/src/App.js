import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Product3D from './Pages/Product3D';
import Comment from './Pages/Comment';
import Description from './Pages/Description';
import Footer from './Components/Footer';
import Informatique from './Pages/Informatique';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/comment" element = {<Comment />} />
          <Route path = "/product" element = {<Product3D />} />
          <Route path = "/descritpion" element = {<Description />} />
          <Route path = "/info" element = {<Informatique />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
