import Help from "../models/help.model.js"; 

export const getHelp =  async (req, res) => {
    const {clerkId , email , problem , description } = req.body;

    if(!clerkId ||  !email || !problem || !description){
        return res.status(400).json({ message: "All fields are required" })
    }

    const newHelp = new Help({ 
        clerkId , email , problem , description
    })

    if(newHelp){
       
        await newHelp.save();

        res.status(201).json({
            clerkId , email , problem , description
         })
    }
}