const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const SECRET_KEY = crypto.randomBytes(32).toString('hex');

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, username });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginController =async (req,res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            res.status(401).send({message:"Invalid Email or password"})
        }
        const validPassword = await bcrypt.compare(password,user.password);
        if(!validPassword){
            res.status(401).send({message:"Invalid password"})
        }
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' })
        res.status(200).send({message:"Logged in successfully",Token:token,status:"200"})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

module.exports = {
    createUser,
    loginController
};
