const axios = require('axios');
const { response } = require('express');

const newsHeadlines = async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b8bb9e3bf5234ef79c31f0b7fe83115d`);
    
    // Check if the response contains data
    if (response && response.data) {
      res.status(200).json(response.data);
    } else {
      res.status(404).json({ error: 'No data found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const HeadlinesTechcrunch =async (req,res) => {
   try{
      const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b8bb9e3bf5234ef79c31f0b7fe83115d")
       if(response && response.data){
        res.status(200).json(response.data)
       }else{
        res.status(404).json({ error: 'No data found' });
       }
   }catch(error){
     console.log("Error:" + error)
   }
}

const AppleHeadlines = async (req,res) => {
  try{
   const response = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2024-01-15&to=2024-01-15&sortBy=popularity&apiKey=b8bb9e3bf5234ef79c31f0b7fe83115d")
    if(response && response.data){
      res.status(200).json(response.data)
    }else{
      res.status(404).json({error:"Some thing went wrong in apple Headlines"})
    }
  }catch(error){
    console.log(error)
  }
}

module.exports = {
    newsHeadlines,HeadlinesTechcrunch,AppleHeadlines
};
