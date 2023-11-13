import "../index.css"

export default function Description({ explanation, date, title }) {






  return (
    <div className="flex flex-col justify-center items-center my-8 mx-4 md:mx-8 description">
      <h1 className = 'img-title'>{title} </h1>
      <h4 className="text-xl md:text-3xl text-center font-semibold text-gray-800 mb-4">
        {` Image of the Day for ${date}`}{" "}
      </h4>
      <p className="text-center text-gray-700 text-lg md:text-xl">
        {explanation ||
          "Explore the wonders of the universe with NASA's Image of the Day."}
      </p>
    </div>
  );
}
