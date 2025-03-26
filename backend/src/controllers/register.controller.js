import cloudinary from "cloudinary";
import User from "../models/register.model.js"; 



export const register =  async (req, res) => {
  const { firstName,middleName,lastName,address,state,district,pincode,certificate10,certificate12,profilePic,casteCertificate,idCard,payment,clerkId } = req.body;

  
    try{

      let certificate10Url, certificate12Url, profilePicUrl , casteCertificateUrl ,idCardUrl ,paymentUrl;

      if(!firstName|| !middleName || !lastName || !certificate10 || !certificate12 || !profilePic || !casteCertificate || !idCard || !address || !state || !district || !pincode || !payment || !clerkId){
        return res.status(400).json({ message: "All fields are required" })
      }

      if (certificate10) {
        const uploadResponse = await cloudinary.uploader.upload(certificate10);
        certificate10Url = uploadResponse.secure_url;
      }

      if (certificate12) {
        const uploadResponse = await cloudinary.uploader.upload(certificate12);
        certificate12Url = uploadResponse.secure_url;
      }

      if (profilePic) {
        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        profilePicUrl = uploadResponse.secure_url;
      }

      if (casteCertificate) {
        const uploadResponse = await cloudinary.uploader.upload(casteCertificate);
        casteCertificateUrl = uploadResponse.secure_url;
      }

      if (idCard) {
        const uploadResponse = await cloudinary.uploader.upload(idCard);
        idCardUrl = uploadResponse.secure_url;
      }

      if (payment) {
        const uploadResponse = await cloudinary.uploader.upload(payment);
        paymentUrl = uploadResponse.secure_url;
      }

      const newUser = new User({ 
        firstName,middleName,lastName,
        certificate10 :certificate10Url ,
        certificate12 :certificate12Url ,
        profilePic : profilePicUrl,
        casteCertificate : casteCertificateUrl,
        idCard : idCardUrl,
        address,state,district,pincode,
        payment : paymentUrl,
        clerkId
      })
      
   
      if(newUser){
       
          await newUser.save();
          
         

          res.status(201).json({
            firstName: newUser.firstName,
            middleName: newUser.middleName,
            lastName: newUser.lastName,
            address: newUser.address,
            state: newUser.state,
            district: newUser.district,
            pincode: newUser.pincode,
            certificate10: newUser.certificate10,
            certificate12: newUser.certificate12,
            profilePic: newUser.profilePic,
            casteCertificate: newUser.casteCertificate,
            idCard: newUser.idCard,
            payment: newUser.payment,
            clerkId: newUser.clerkId,
          });
      }
      else{
          res.status(400).json({message: "Invalid User Data"});
    }
  } catch (error) {
      
      console.log("Error in Signup controller", error.message);
      res.status(500).json({message: "Internal Server Errorrr"});
  }
};


export const examRegistered = async (req, res) => {
  try {
    const user = await User.findOne({ clerkId: req.params.clerkId });

    if (user) {
      return res.json({ registered: true });
    } else {
      return res.json({ registered: false });
    }
  } catch (error) {
    return res.status(500).json({ error: "Server error", details: error.message });
  }
};

export const profileData = async (req, res) => {
  try {
    const user = await User.findOne({ clerkId: req.params.clerkId });

    if (!user) {
      return res.status(400).json({ message: "User Does Not Exists" })
    }

    res.status(201).json({
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      profilePic: user.profilePic,
      rollNumber: user.rollNumber,
      formApproval :user.formApproval,
      neetRank : user.neetRank ,
      downloadMarksheet : user.downloadMarksheet ,
    });
  } catch (error) {
    return res.status(500).json({ error: "Server error", details: error.message });
  }
};
