const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
      await mongoose.connect('mongodb+srv://chatbot78:chatbot78@cluster0.6jtqcjl.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };

  module.exports = dbConnection;