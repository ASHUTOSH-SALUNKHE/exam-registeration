import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser, SignInButton, SignUpButton , useClerk } from "@clerk/clerk-react"; // Clerk hooks
import three_dash from "../assets/three_dash.png";
import exit_icon from "../assets/exit_icon.png";

function Navbar2() {
    const [clicked, setClicked] = useState(false);
    const { isSignedIn, isLoaded } = useUser(); // Ensure Clerk is fully loaded
    const { signOut } = useClerk(); 

    const openMenu = () => {
        setClicked(!clicked);
    };

    return (
        <div>
            <div className="bg-base-100 z-40 backdrop-blur-lg lg-base-100/80 mt-14 xl:mt-19 border-b min-h-5 bg-amber-100 p-2 fixed w-full top-6">
                <div className="flex justify-between items-center">

                    {/* Show nothing until Clerk is loaded */}
                    {!isLoaded ? (
                        <span>Loading...</span>
                    ) : (
                        <>
                            {/* Show Register only if user is NOT signed in */}
                            
                                <Link to="/register" className="bg-amber-200 rounded-2xl p-1 px-3 text-center">
                                    Register Now
                                </Link>
                            

                            <div className="hidden md:flex md:gap-10 xl:p-2">
                                {isSignedIn ? (
                                    <>
                                        <Link to="/" className="underline">Home</Link>
                                        <Link to="/profile" className="underline">Profile</Link>
                                        <Link to="/helpdesk" className="underline">Help Desk</Link>
                                        <div onClick={() => signOut(() => window.location.href = "/")} className="underline cursor-pointer">
                                             Logout
                                        </div>
                                    </>
                                ) : (
                                    <>  
                                        <Link to="/" className="underline">Home</Link>
                                        <SignInButton>
                                            <button className="underline cursor-pointer">Sign In</button>
                                        </SignInButton>
                                        <SignUpButton>
                                            <button className="underline cursor-pointer">Sign Up</button>
                                        </SignUpButton>
                                    </>
                                )}
                            </div>
                        </>
                    )}

                    {/* Mobile Menu Button */}
                    <div className="md:hidden" onClick={openMenu}>
                        {clicked ? (
                            <img src={exit_icon} className="w-5" alt="Close Menu" />
                        ) : (
                            <img src={three_dash} className="w-5" alt="Open Menu" />
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {clicked && isLoaded && (
                <div className="border fixed right-0 top-32 p-3 px-8 bg-amber-50 rounded-2xl z-20">
                    {isSignedIn ? (
                        <>
                            <Link to="/"> <div className="px-5 py-2 font-semibold hover:bg-amber-100">Home</div></Link>
                            <Link to="/profile"> <div className="px-5 py-2 font-semibold hover:bg-amber-100">Profile</div></Link>
                            <Link to="/helpdesk"> <div className="px-5 py-2 font-semibold hover:bg-amber-100">Help Desk</div></Link>
                            <div onClick={() => signOut(() => window.location.href = "/")} className="px-5 py-2 font-semibold hover:bg-red-100 cursor-pointer">
                                Logout
                            </div>
                        </>
                    ) : (
                        <>  
                            
                            <Link to="/" className="px-5 py-2 relative   font-semibold hover:bg-amber-100">Home</Link>
                            
                            <SignInButton>
                                <div className="px-5 py-2 font-semibold hover:bg-amber-100 cursor-pointer">Sign In</div>
                            </SignInButton>
                            <SignUpButton>
                                <div className="px-5 py-2 font-semibold hover:bg-amber-100 cursor-pointer">Sign Up</div>
                            </SignUpButton>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default Navbar2;

