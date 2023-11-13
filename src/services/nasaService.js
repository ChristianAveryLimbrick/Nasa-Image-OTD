import axios from 'axios';

const API_KEY = process.env.REACT_APP_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

// Helper function to get the last 14 dates including today
const getLast14Days = () => {
  const dates = [];
  const today = new Date();
   
for (let i = 0; i < 14; i++) {
    const date = new Date(today);


    date.setDate(date.getDate() - i);
    dates.push(date.toISOString().split('T')[0]);
    
  }
  console.log("Dates array:", dates);
  return dates;
};

const fetchImagesAndExplanationsForLast14Days = async () => {
  const dates = getLast14Days();
  try {
    const promises = dates.map(date => 
      axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
        .catch(error => ({ error })) // Catch individual errors
    );
    const responses = await Promise.all(promises);
    console.log("API responses:", responses); 

    const imagesWithExplanations = responses
      .filter(response => !response.error) // Filter out failed requests
      .map(response => {
        return {
          url: response.data.url,
          title: response.data.title,
          explanation: response.data.explanation, // Include explanation
          media_type: response.data.media_type,
          date: response.data.date,
        };
      });

      console.log("Processed data:", imagesWithExplanations); 

    return imagesWithExplanations;
  } catch (error) {
    console.error("Error fetching NASA Images for the last 14 days: ", error);
    return [];
  }
};

export { fetchImagesAndExplanationsForLast14Days };

