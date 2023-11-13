import "../index.css"

export default function Description({ explanation, date, title }) {






  return (
    <div className="bg-white p-4 rounded-lg font">
    <h2 className="text-3xl  text-gray-700 text-center mb-4 font">{title}</h2>
    <p className="text-lg text-gray-600 text-center mb-1 font">{`NASA Image of the Day for: ${date}`}</p>
    <p className = 'text-sm text-gray-600 text-center mb-6 font'>(Hover on image to halt scroll)</p>
    <div className="text-lg text-gray-700 text-center mx-auto px-4 md:max-w-3xl lg:max-w-4xl mb-10 font">
        {explanation || "Explore the wonders of the universe with NASA's Image of the Day."}
    </div>
</div>

  );
}
