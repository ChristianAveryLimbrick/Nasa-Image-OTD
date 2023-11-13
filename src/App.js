import Gallery from "./components/gallery";
import Description from "./components/description";
import Footer from "./components/footer";
import { fetchImagesAndExplanationsForLast14Days } from "./services/nasaService";
import { useEffect, useState } from "react";
import nasalogo from './nasalogo.jpeg'



export default function App() {
  const [imageData, setImageData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchImagesAndExplanationsForLast14Days();
      setImageData(data);
    };
    fetchData();
  }, []);

  // Get the current image data
  const currentImage = imageData[currentIndex] || {};

  return (
    <div className="App">
      <Header />
      <Gallery 
        imageData={imageData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex} // Method to change the current index
      />
      <Description 
        title={currentImage.title}
        date={currentImage.date}
        explanation={currentImage.explanation}
      />
     
    </div>
  );
}

const headerFont = {
  fontFamily: "'Raleway', sans-serif",

};


function Header() {
  return (
    <div className="bg-white py-2 flex items-center justify-center">

      <div className="flex items-center justify-start" style={{ flex: 1, marginLeft: '2rem' }}>
        <img 
          src={nasalogo} 
          alt="NASA Logo" 
          style={{ 
            maxWidth: '25%', // Revert back to original size
            height: 'auto', 
            maxHeight: '100px'
          }} 
        />
      </div>

      <h1 
        className="text-3xl md:text-4xl font-semibold text-gray-800" 
        style={headerFont}
      >
        NASA Image Of The Day
      </h1>

      <div style={{ flex: 1 }}></div> {/* Placeholder to balance the header */}

    </div>
  );
}
