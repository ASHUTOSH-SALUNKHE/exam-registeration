import { useState , useEffect } from "react";
import { axiosInstance } from "../lib/axios"; // Axios setup
import { useAuthStore } from "../store/store"; // Assuming formdata is a function to store the form data
import {toast} from 'react-hot-toast';
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import {useAuth} from "@clerk/clerk-react"
import { useUser } from "@clerk/clerk-react";

export default function RegisterPage() {
  const { formdata , loader , examRegistered , isexamRegistered } = useAuthStore(); // Assuming formdata is used to store data in your store
  const {isSignedIn} = useAuth();
  const { user } = useUser();
  

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
    certificate10: null,
    certificate12: null,
    profilePic: null,
    casteCertificate: null,
    idCard: null,
    payment: null,
    clerkId:null,
  });

  useEffect(() => {
    if (user?.id) {
      examRegistered(user.id);
    }
  }, [user?.id]);

  useEffect(() => {
    if (user?.id) {
      setFormData((prevData) => ({
        ...prevData,
        clerkId: user.id,
      }));
    }
  }, [user]); // Runs only when user changes

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if(!formData.firstName.trim()) return toast.error("First Name Required"), false;
    if(/\s/.test(formData.firstName)) return toast.error("no space in First Name"), false;

    if(!formData.middleName.trim()) return toast.error("Middle Name Required"), false;
    if(/\s/.test(formData.middleName)) return toast.error("no space in Middle Name"), false;

    if(!formData.lastName.trim()) return toast.error("Last Name Required") , false;
    if(/\s/.test(formData.lastName)) return toast.error("no space in Last Name"), false;

    if(!formData.address.trim()) return toast.error("Address Required"), false;
    if(!formData.state.trim()) return toast.error("State Required"), false;
    if(!formData.district.trim()) return toast.error("District Required"), false;
    if(!formData.pincode.trim()) return toast.error("Pincode Required"), false;

    if(!formData.certificate10) return toast.error("10th Completion Certificate Required"), false;
    if(!formData.certificate12) return toast.error("12th Completion Certificate Required"), false
    if(!formData.profilePic) return toast.error("Profile Picture Required"), false;
    if(!formData.casteCertificate) return toast.error("Caste Certificate Required"), false;
    if(!formData.idCard) return toast.error("ID Card Required"), false;
    if(!formData.payment) return toast.error("Payment Required"), false;

    return true;
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
        const base64Image = reader.result;
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: base64Image,
        }));
    };
};

const SubmitForm =  (e) =>{
  e.preventDefault();
  const success = validateForm()

  if(success){
    formdata(formData)
  }

}

  console.log(formData)

  return (
    isSignedIn ? (
      !isexamRegistered ? (
    <div className="p-10 flex flex-col items-center bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" onSubmit = {SubmitForm}>
          
          <div className="flex flex-col col-span-1">
            <label className="text-lg font-semibold text-gray-700">First Name</label>
            <input type="text" name="firstName" className="border p-3 rounded-lg shadow-md" onChange={handleChange} />
          </div>
          
          <div className="flex flex-col col-span-1">
            <label className="text-lg font-semibold text-gray-700">Middle Name</label>
            <input type="text" name="middleName" className="border p-3 rounded-lg shadow-md" onChange={handleChange} />
          </div>
          
          <div className="flex flex-col col-span-1">
            <label className="text-lg font-semibold text-gray-700">Last Name</label>
            <input type="text" name="lastName" className="border p-3 rounded-lg shadow-md" onChange={handleChange} />
          </div>

          <div className="flex flex-col col-span-1">
            <label className="text-lg font-semibold text-gray-700">Address</label>
            <input type="text" name="address" className="border p-3 rounded-lg shadow-md" onChange={handleChange} />
          </div>

          <div className="flex flex-col col-span-1">
            <label className="text-lg font-semibold text-gray-700">State</label>
            <select  
                name="state"
                className="border p-3 rounded-lg shadow-md"
                onChange={handleChange}
                value={formData.state} // Ensuring controlled component
            >
            <option value="">Select State</option>
            {[
                "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
                "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
                "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
                "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
                "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
                "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
                "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep",
                "Puducherry"
            ].map((state) => (
                <option key={state} value={state}>
                {state}
               </option>
            ))}
            </select>
          </div>


          <div className="flex flex-col col-span-1">
            <label className="text-lg font-semibold text-gray-700">District</label>
            <input type="text" name="district" className="border p-3 rounded-lg shadow-md" onChange={handleChange} />
          </div>

          <div className="flex flex-col col-span-1">
            <label className="text-lg font-semibold text-gray-700">Pincode</label>
            <input
              type="text"
              name="pincode"
              className="border p-3 rounded-lg shadow-md"
              onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                  handleChange(e); // Allow input if it's only numbers
                }
              }}
              value={formData.pincode} // Ensure controlled component behavior
              maxLength={6} // Pincode should be 6 digits in India
              placeholder="Enter 6-digit Pincode"
            />
          </div>


          {['certificate10', 'certificate12', 'profilePic', 'casteCertificate', 'idCard', 'payment'].map((field) => (
            <div key={field} className="flex flex-col col-span-1">
              <label className="text-lg font-semibold text-gray-700">{field}</label>
              <input type="file" name={field} className="border p-3 rounded-lg bg-gray-100 shadow-md" onChange={handleFileChange} />
            </div>
          ))}

          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center">
            
            {!loader &&
            <button type="submit" className="w-full md:w-1/2 py-3 bg-blue-500 text-white font-bold rounded-lg">
              Submit
            </button>
            }

            {loader &&
            <div>
              <Loader2 className="fixed top-[50%] left-[50%] h-15 w-15 animate-spin" />
              Submitting Form ...
            </div>
            }
          </div>
        </form>
      </div>
    </div>
      ) : <div className = "absolute top-[50%] left-[50%] translate-x-[-50%] font-bold text-2xl text-center">You have submitted the form Successfully, for any trouble contact us from help desk section</div>
  ) : <div className = "absolute top-[50%] left-[50%] translate-x-[-50%] font-bold text-2xl">You need to login or signup</div>
)
}


