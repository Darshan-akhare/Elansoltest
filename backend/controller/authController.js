import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const registerUser = async (req, res) => {
    try {
        const { name, dob, email, password } = req.body;
    
        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'Email already exists' });
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new user
        const newUser = new User({
          name,
          dob,
          email,
          password: hashedPassword
        });
    
        // Save the user to the database
        await newUser.save();
    
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        console.error('Registration failed', error);
        res.status(500).json({ message: 'Registration failed' });
      }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Verify password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
          return res.status(401).json({ message: 'Invalid password' });
        }
    
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'Sup3rs#cr3tk3y', { expiresIn: '1h' });
    
        res.status(200).json({ token, user: { name: user.name, email: user.email } });
      } catch (error) {
        console.error('Login failed', error);
        res.status(500).json({ message: 'Login failed' });
      }
};