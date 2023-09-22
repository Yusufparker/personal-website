import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import Contact from "./pages/Contact";
import ChatBot from "./pages/ChatBot";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar content={<Home />} />} />
          <Route path="/experiences" element={<Navbar content={<Experiences />} />} />
          <Route path="/projects"  element={<Navbar content={<Projects/>} />} />
          <Route path="/projects/:idProject"  element={<Navbar content={<SingleProject/>} />} />
          <Route path="/contact"  element={<Navbar content={<Contact />} />} />
          <Route path="/bot"  element={<Navbar content={<ChatBot />} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
