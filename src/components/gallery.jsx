"use client";
import React from "react";
import { fetchImagesAndExplanationsForLast14Days } from "../services/nasaService";
import { Carousel } from "flowbite-react";
import { useEffect } from "react";
import "../index.css"



export default function Gallery({ slideInterval, imageData, currentIndex, setCurrentIndex }) {


  if (!imageData || imageData.length === 0) {
    return (
      <div className='flex justify-center items-center h-screen'>
    <div className='loading'>Loading...</div>
  </div>
    )
}

const handleSlideChange = (newIndex) => {
    setCurrentIndex(newIndex);
};

return (
    <div className="img-container h-56 sm:h-64 xl:h-80 2xl:h-96 mx-4 md:mx-8 my-8 rounded-lg overflow-hidden">
        <Carousel 
            slideInterval={slideInterval || 8000} 
            pauseOnHover
            currentIndex={currentIndex}
            onSlideChange={handleSlideChange}
        >
            {imageData.map((image, index) => (
                <img
                    key={index}
                    src={image.url}
                    alt={image.title}
                    className="w-full object-cover max-h-96 sm:max-h-[500px] lg:max-h-[600px]"
                />
            ))}
        </Carousel>
    </div>
);
}