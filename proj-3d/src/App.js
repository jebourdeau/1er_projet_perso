import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Product3D from './Pages/Product3D';
import Comment from './Pages/Comment';
import Description from './Pages/Description';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/comment" element = {<Comment />} />
          <Route path = "/product" element = {<Product3D />} />
          <Route path = "/descritpion" element = {<Description />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
