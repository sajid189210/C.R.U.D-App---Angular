import userModel, { IUser } from "../../models/user.model";


export const saveUser = async (req: Request, res: Response) => {
    // try {
    //     const { username, email, password } = req.body;

    //     // Check if all required fields are provided
    //     if (!username || !email || !password) {
    //         return res.status(400).json({ message: "Missing required fields." });
    //     }

    //     // Check if the user already exists by email
    //     const existingUser = await userModel.findOne({ email });
    //     if (existingUser) {
    //         return res.status(400).json({ message: "User already exists." });
    //     }

    //     // Create a new user instance with the hashed password
    //     const newUser = new userModel({
    //         username,
    //         email,
    //         password, // Store the hashed password
    //     });

    //     // Save the new user to the database
    //     await newUser.save();

    //     // Respond with success
    //     res.status(201).json({
    //         message: 'User registered successfully',
    //         user: {
    //             username: newUser.username,
    //             email: newUser.email,
    //         },
    //     });
    // } catch (error) {
    //     // Pass errors to the error handler
    //     next(error); // This will go to your error handling middleware
    // }

}