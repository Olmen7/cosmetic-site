import "./App.css";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/contact/Contact";
import { Footer } from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import { Navbar } from "./components/Navbar";
import { ThankYou } from "./pages/thanks/ThankYou";
import { Home2 } from "./pages/home2/Home2";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
