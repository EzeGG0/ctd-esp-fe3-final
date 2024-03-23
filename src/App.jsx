
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route } from "react-router-dom";
import Home from "./Routes/Home";
import { Routes } from "react-router-dom";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { ContextProvider } from "./Components/utils/global.context";



function App() {
  return (
      <div className="App">
        <>
            <ContextProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="contact" element={<Contact />}/>
                    <Route path="/favs" element={<Favs />} />
                    <Route path="/details" element={<Detail />} />
                  </Routes>
                  <Navbar/>
                  <Footer/>
                </BrowserRouter>
            </ContextProvider>
        </>
      </div>
  );
}

export default App;
