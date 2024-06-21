import Community from "./Pages/Community";
import Contact from "./Pages/Contact";
import Hero from "./Pages/Hero";
import Login from "./Pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Resources from "./Pages/Resources";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
