import Gallery from "./components/gallery";
import Description from "./components/description";
import Footer from "./components/footer";
import { fetchImagesAndExplanationsForLast14Days } from "./services/nasaService";


export default function App() {
  


  return (
    <div className="App">
      <Header />
      <Gallery />
      <Description />
      
    </div>
  );
}

const headerFont = {
  fontFamily: "'Raleway', sans-serif",

};

function Header() {
  return (
    <div className="bg-white  py-2 ">
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-gray-800" style={headerFont}>
        NASA Image Of The Day
      </h1>
    </div>
  );
}
