import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
// import UserList from "./components/UserList.jsx";
// import RegistrationForm from "./components/RegistrationForm.jsx";
// import Login from "./components/Login.jsx";
// import Sidebar from "./components/Sidebar.jsx";
// import Topbar from "./components/Topbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardLayout from "./components/layouts/DashboardLayout.jsx";
import MainLayout from "./components/layouts/MainLayout.jsx";
import Login from "./components/Login.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import UserList from "./components/UserList.jsx";

import About from "./pages/About.jsx";

// const Layout = () => {
//   const location = useLocation();
//   const isDashboard = location.pathname === '/dashboard';

//   return (
//     <div className="d-flex">
//       {isDashboard && <Sidebar />}
//       <div className="flex-grow-1">
//         {isDashboard ? <Topbar /> : <Navbar />}
//         <div className="container-fluid mt-4">
   
//         </div>
//         {!isDashboard && <Footer />}
//       </div>
//     </div>
//   );
// };

function App() {
  return (
    <Router>
      <Routes>
        <Route path="dashboard/*" element={<DashboardLayout />}>
          <Route path="*" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/contact" element={<MainLayout />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="/login" element={<MainLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/register" element={<MainLayout />}>
          <Route index element={<RegistrationForm />} />
        </Route>
        <Route path="/user" element={<MainLayout />}>
          <Route index element={<UserList />} />
        </Route>
        <Route path="/about" element={<MainLayout />}>
          <Route index element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
