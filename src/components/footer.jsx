import "../index.css"

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 mt-7">
      <h1 className="text-xl text-center font-bold text-white pt-6" style={{ minHeight: '10vh' }}>
        Created by Christian A Limbrick
      </h1>
      <p className="text-center text-white pb-4">
  <a href="mailto:avelimb@gmail.com" className="text-white">
    avelimb@gmail.com
  </a>
</p>

    </div>
  );
}
