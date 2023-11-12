"use client";
import React from "react";
import { fetchImagesForLast14Days } from "../services/nasaService";
import { Carousel } from "flowbite-react";
import { useEffect } from "react";



export default function Gallery({ slideInterval }) {

    const [imageData, setImageData] = React.useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            const images = await fetchImagesForLast14Days();
            const imagesOnly = images.filter(item => item.media_type === 'image')
            setImageData(imagesOnly)
        };
        fetchData();
    }, []);

    if (!imageData) {
        return <div>Loading...</div>

    }

    

  return (
    
    <div className="img-container h-56 sm:h-64 xl:h-80 2xl:h-96 mx-4 md:mx-8 my-8 rounded-lg overflow-hidden shadow-lg">
      <Carousel slideInterval={slideInterval || 5000}>
        {imageData && imageData.length > 0 ? (
            imageData.map((image, index) => (
                <img
                key={index}
                src={image.url}
                alt={image.title}
                className="w-full object-cover max-h-96 sm:max-h-[500px] lg:max-h-[600px]"

                />
            ))
            ): (
                <p>Loading Images...</p>
            )
            }
      
      </Carousel>
    </div>
  );
}
