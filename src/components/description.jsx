export default function Description({ description, date }) {
  return (
    <div className="flex flex-col justify-center items-center my-8 mx-4 md:mx-8">
      <h1 className="text-2xl md:text-3xl text-center font-semibold text-gray-800 mb-4">
        {` Image of the Day for ${date}`}{" "}
      </h1>
      <p className="text-center text-gray-700 text-lg md:text-xl">
        {description ||
          "Explore the wonders of the universe with NASA's Image of the Day."}
      </p>
    </div>
  );
}
