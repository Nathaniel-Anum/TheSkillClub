import Community from "./Pages/Community";
import Contact from "./Pages/Contact";
import Hero from "./Pages/Hero";
import Login from "./Pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Resources from "./Pages/Resources";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Pages/Sidebar";
import DasboardNav from "./Pages/DashboardNav";
import { useUser } from "./UseUser";

function App() {
  const {user} = useUser()
  console.log(user);
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
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<Sidebar/>}/>
            <Route path="/dashboard" element={<DasboardNav/>}/>
          </Route>
          <Route path="*" element={<h2> Error Page! </h2>} />
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
