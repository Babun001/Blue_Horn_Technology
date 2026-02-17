import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";
import { useSplitText } from "./hook/useSplitText";
import useScrollReveal from "./hook/useScrollReveal";

function App() {
  useSplitText();
  useScrollReveal();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
