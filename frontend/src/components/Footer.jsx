import React from "react";
import { Link } from "react-router-dom";
import { useUser, SignInButton, SignUpButton , useClerk } from "@clerk/clerk-react"; 

const Footer = () => {
  const { isSignedIn, isLoaded } = useUser();
  const { signOut } = useClerk(); 
  return (
    <footer className="bg-gray-900 text-white text-center relative bottom-0">
      <div className = "border-b flex justify-center gap-10 p-2">
        <Link to="/"><div>Home</div></Link>
        {isSignedIn && <Link to="/profile"><div>Profile</div></Link>}
        {isSignedIn && <Link to="/helpdesk"><div>Help Desk</div></Link>}
      </div>

      <div className = "mt-2">
      <p className="text-sm opacity-80">
          Content Owned and Maintained by <strong>National Testing Agency</strong>
        </p>
        <p className="text-sm opacity-80">
          Designed, Developed and Hosted by <strong>National Informatics Centre</strong>, <br />
          Ministry of Electronics & Information Technology, Government of India
        </p>

        {/* Copyright Text */}
        <p className="text-sm opacity-70 mt-2">© 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
