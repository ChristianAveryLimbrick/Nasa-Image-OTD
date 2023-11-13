"use client";
import React from "react";
import { fetchImagesAndExplanationsForLast14Days } from "../services/nasaService";
import { Carousel } from "flowbite-react";
import { useEffect } from "react";
import "../index.css"



export default function Gallery({ slideInterval }) {

    const [imageData, setImageData] = React.useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            const images = await fetchImagesAndExplanationsForLast14Days();
            console.log("Fetched data with media types:", images.map(item => item.media_type));

            console.log("Fetched images:", images);

            const imagesOnly = images.filter(item => item.media_type === 'image' || !item.media_type);
            console.log(fetchImagesAndExplanationsForLast14Days)
            setImageData(imagesOnly)
        };
        fetchData();
    }, []);

    if (!imageData) {
        return <div>Loading...</div>

    }

    console.log("imageData", imageData);

  return (
    
    <div className="img-container h-56 sm:h-64 xl:h-80 2xl:h-96 mx-4 md:mx-8 my-8 rounded-lg overflow-hidden ">
      <Carousel slideInterval={slideInterval || 5000} pauseOnHover>
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
