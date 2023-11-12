import axios from 'axios';

const API_KEY = process.env.REACT_APP_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

// Helper function to get the last 14 dates including today
const getLast14Days = () => {
  const dates = [];
  for (let i = 0; i < 14; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};

const fetchImagesForLast14Days = async () => {
  const dates = getLast14Days();
  try {
    const promises = dates.map(date => 
      axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
    );
    const responses = await Promise.all(promises);
    return responses.map(response => response.data);
  } catch (error) {
    console.error("Error fetching NASA Images for the last 14 days: ", error);
    return null;
  }
};

export { fetchImagesForLast14Days };
