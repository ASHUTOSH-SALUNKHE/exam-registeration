import { Routes, Route, Navigate} from "react-router-dom"
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/rgpage'
import Navbar1 from "./components/Navbar1"
import Navbar2 from "./components/Navbar2"
import Navbar3 from "./components/Navbar3"
import Footer from "./components/Footer"
import HelpdeskPage from "./pages/HelpdeskPage"
import { Toaster} from 'react-hot-toast';
import {useAuth} from "@clerk/clerk-react"

function App() {
  const {isSignedIn} = useAuth();
  return (
    <div className="flex flex-col min-h-screen">
        
        <Navbar1 />
        <Navbar2 />
        <Navbar3 />

        <div className="flex-grow pt-45 xl:pt-50 bg-blue-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/helpdesk" element={<HelpdeskPage />} />
        </Routes>
      </div>
      

      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
