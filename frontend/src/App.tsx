import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listing from "pages/Listing";
import Form from "pages/Form";
import Footer from "components/Footer";

function App() {
  return (
    <BrowserRouter> {/*indica que vai ter roteamento de pages */}
      <Navbar /> {/*Toda página por padrão terá o navbar */}
      <Routes>
        <Route path='/' element={<Listing />}/>
        <Route path='/form'> 
          <Route path=':movieId' element={<Form/>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
