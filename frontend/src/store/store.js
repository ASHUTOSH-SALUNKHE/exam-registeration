import axios from "axios";
import {create} from "zustand"
import { axiosInstance } from "../lib/axios";
import {toast} from 'react-hot-toast';


export const useAuthStore = create((set,get) => ({
  authUser:null,
  loader :false,
  isexamRegistered :false,
  profileData:null,
  helpData:null,

  formdata: async(data) =>{
      try {
        set( { loader:true })
          const res = await axiosInstance.post('/register',data);
          set({authUser:res.data})
          toast.success("Form Submitted Successfully")
          window.location.reload()
      } catch (error) {
          set({authUser:null}) 
          console.log("ERROR:", error);
          toast.error("Can not submit Exam form , TRY AGAIN :)")
      }finally {
        set( { loader:false })
      }
  },

  examRegistered: async(clerkId) =>{
    try {
      set( { loader:true })
        const res = await axiosInstance.get(`/examRegistered/${clerkId}`);
        set({isexamRegistered:res.data.registered})
        
    } catch (error) {
        
        toast.error("")
    }finally {
      set( { loader:false })
    }
  },

  profile: async(clerkId) =>{
    try {
      set( { loader:true })
        const res = await axiosInstance.get(`/profileData/${clerkId}`);
        set({profileData:res.data})
    } catch (error) {
        console.log("ERROR:", error);
        toast.error("Can not get the profile")
    }finally {
      set( { loader:false })
    }
  },

  help: async(data) =>{
    try {
      set( { loader:true })
        const res = await axiosInstance.post('/gethelp',data);
        set({helpData:res.data})
        toast.success("Help Submitted Successfully")

    } catch (error) {
        set({helpData:null}) 
        console.log("ERROR:", error);
        toast.error("ERROR !!!")
    }finally {
      set( { loader:false })
    }
  }

}));
