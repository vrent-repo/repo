import React from "react";

function VehicleModels() {
  return (
    <section id="vehicle-models">
      <p>Vehicle Models</p>
      <h1>Our Rental Fleet</h1>
      <h3>
        Choose a variety of our amazing vehicles to rent for your next trip
      </h3>
      {/* Specification box di sebelah kanan */}
      <div className="w-1/4 bg-white text-black text-xl flex flex-col items-center justify-center m-2 p-4">
        <div className="mb-4 text-2xl font-bold">Rp. 450/day</div>
        <div className="flex justify-between">
          <div className="font-bold">Brand</div>
          <div className="text-normal">Toyota</div>
          <div className="font-bold">Type</div>
          <div className="text-normal">Kijang</div>
          <div className="font-bold">Year</div>
          <div className="text-normal">2021</div>
          <div className="font-bold">Seat</div>
          <div className="text-normal">6</div>
          <div className="font-bold">AC</div>
          <div className="text-normal">Yes</div>
          <div className="font-bold">Transmission</div>
          <div className="text-normal">Manual</div>
          <a
            href="reservation.html"
            className="mt-4 py-2 px-4 bg-black text-white text-lg font-bold text-center rounded-full hover:bg-blue-600 cursor-pointer"
          >
            Reserve Now
          </a>
        </div>
        <div className="flex justify-start mt-4">
          {/* Box kiri */}
          {/* Box for Toyota Rush */}
          <div className="w-64 h-32 bg-white text-black text-xl flex items-center justify-center m-2 cursor-pointer transition duration-300 transform hover:bg-black hover:text-white">
            <img
              src="toyota-rush-image.jpg"
              alt="Toyota Rush"
              className="mx-auto mb-2"
            />
            <a href="toyota-rush.html">Toyota Rush</a>
          </div>
          {/* Box for Ayla */}
          <div className="w-64 h-32 bg-white text-black text-xl flex items-center justify-center m-2 cursor-pointer transition duration-300 transform hover:bg-black hover:text-white">
            <img src="ayla-image.jpg" alt="Ayla" className="mx-auto mb-2" />
            <a href="ayla.html">Ayla</a>
          </div>
          {/* Box for Suzuki Ignis */}
          <div className="w-64 h-32 bg-white text-black text-xl flex items-center justify-center m-2 cursor-pointer transition duration-300 transform hover:bg-black hover:text-white">
            <img
              src="suzuki-ignis-image.jpg"
              alt="Suzuki Ignis"
              className="mx-auto mb-2"
            />
            <a href="suzuki-ignis.html">Suzuki Ignis</a>
          </div>
          {/* Box for Toyota Agya */}
          <div className="w-64 h-32 bg-white text-black text-xl flex items-center justify-center m-2 cursor-pointer transition duration-300 transform hover:bg-black hover:text-white">
            <img
              src="toyota-agya-image.jpg"
              alt="Toyota Agya"
              className="mx-auto mb-2"
            />
            <a href="toyota-agya.html">Toyota Agya</a>
          </div>
          {/* Box for Honda CR-V */}
          <div className="w-64 h-32 bg-white text-black text-xl flex items-center justify-center m-2 cursor-pointer transition duration-300 transform hover:bg-black hover:text-white">
            <img
              src="honda-cr-v-image.jpg"
              alt="Honda CR-V"
              className="mx-auto mb-2"
            />
            <a href="honda-cr-v.html">Honda CR-V</a>
          </div>
          {/* Box for Honda APV */}
          <div className="w-64 h-32 bg-white text-black text-xl flex items-center justify-center m-2 cursor-pointer transition duration-300 transform hover:bg-black hover:text-white">
            <img
              src="honda-apv-image.jpg"
              alt="Honda APV"
              className="mx-auto mb-2"
            />
            <a href="honda-apv.html">Honda APV</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VehicleModels;
