import { useState , useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAuthStore } from "../store/store";
import { useUser } from "@clerk/clerk-react";

function HelpdeskPage() {
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [description, setDescription] = useState("");
  const [clerkId, setClerkId] = useState("");

  const { help } = useAuthStore();
  const { user } = useUser();

  // Assign clerkId when user is available
  useEffect(() => {
    if (user?.id) {
      setClerkId(user.id);
    }
  }, [user?.id]);

  const validateForm = () => {
    if (!email) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!problem) {
      toast.error("Write the problem");
      return false;
    }
    if (problem.trim().length < 10) {
      toast.error("Problem length should be greater than 10");
      return false;
    }
    if (!description) {
      toast.error("Write the description");
      return false;
    }
    if (description.trim().length < 150) {
      toast.error("Description length should be greater than 150");
      return false;
    }
    return true; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; 

    await help({ clerkId, email, problem, description });

    // Clear form fields after submission
    setEmail("");
    setProblem("");
    setDescription("");
  };
  return (
    <div className="flex justify-center items-center py-5 bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Helpdesk Support</h2>

        <div className="space-y-6">
          {/* Email & Problem in one line */}
          <div className="flex flex-col space-y-4 sm:space-x-4">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 p-3 w-full border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your Problem (One Line)"
              className="flex-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400 mt-2 sm:mt-0"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
            />
          </div>

          {/* Problem Description */}
          <textarea
            placeholder="Describe your problem in detail..."
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Emergency Contact */}
          <p className="text-gray-600 text-sm">
            📞 For urgent assistance, call: <span className="font-semibold text-blue-600">9999999999</span>
          </p>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpdeskPage;
