import "./App.css";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/contact/Contact";
import { Footer } from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import { Navbar } from "./components/Navbar";
import { ThankYou } from "./pages/thanks/ThankYou";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
