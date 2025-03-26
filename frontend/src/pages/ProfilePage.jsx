import {React , useEffect} from 'react'
import { useAuthStore } from "../store/store";
import { useUser } from "@clerk/clerk-react";
import {  Loader2 } from "lucide-react";
function ProfilePage() {
  const { formdata , loader , authUser , profile, profileData } = useAuthStore();
  const { user } = useUser();
   
  useEffect(() => {
    const fetchProfile = async () => {
      if (user?.id) {
        await profile(user.id);
      }
    };
  
    // Adding a delay of 30ms before calling fetchProfile
    const timeoutId = setTimeout(() => {
      fetchProfile();
    }, 1);
  
    // Cleanup function to clear timeout if component unmounts
    return () => clearTimeout(timeoutId);
  }, [user?.id, profile]);

  return (

    loader ? (<Loader2 className="fixed top-[50%] left-[50%] h-15 w-15 animate-spin" /> ) :
    profileData ? (
    <div className="flex justify-center mb-5">
    <div className="flex flex-col items-center gap-8 border ml-3 mr-3 max-w-[668px] w-full mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p className="mt-2">Your Profile Information</p>
      </div>

      <div>
        <img
          alt="Profile"
          className="size-32 rounded-full object-cover border-4"
          src={profileData.profilePic}
        />
      </div>

      <div className="space-y-6 w-full max-w-md">
        <div className="space-y-1.5">
          <div className="text-sm text-zinc-400 flex items-center gap-2">
            <div className="w-4 h-4" />
            Full Name
          </div>
          <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{profileData.firstName + " "+profileData.middleName + " "+profileData.lastName || "loading..."}</p>
        </div>

        <div className="mt-6 bg-base-300 rounded-xl p-6 w-full">
          <h2 className="text-lg font-medium mb-4">Candidate Updates</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-zinc-700">
              <span>Form Approval</span>
              <span>{profileData.formApproval || "loading..."}</span>
            </div>
            <div className="flex items-center border-b justify-between py-2">
              <span>Neet Rank</span>
              <span className="text-green-500">{profileData.neetRank || "loading..."}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Download Marksheet</span>
              <span className="text-green-500">{profileData.downloadMarksheet || "loading..."}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    ):<div>You Need To Fill Registeration Form First</div>
  
  );

}

export default ProfilePage;
