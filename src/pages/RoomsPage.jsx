import React from "react";

const rooms = [
  {
    name: "Deluxe King Room",
    description: "Spacious room with a king-size bed and city view.",
    price: "$200 per night",
    image: "https://picsum.photos/seed/deluxe-king/600/400",
  },
  {
    name: "Executive Suite",
    description:
      "Luxurious suite with separate living area and panoramic views.",
    price: "$350 per night",
    image: "https://picsum.photos/seed/executive-suite/600/400",
  },
  {
    name: "Family Room",
    description: "Comfortable room with two queen beds, perfect for families.",
    price: "$250 per night",
    image: "https://picsum.photos/seed/family-room/600/400",
  },
  {
    name: "Ocean View Room",
    description:
      "Stunning room with breathtaking ocean views and a private balcony.",
    price: "$280 per night",
    image: "https://picsum.photos/seed/ocean-view/600/400",
  },
  {
    name: "Penthouse Suite",
    description:
      "Exclusive top-floor suite with premium amenities and 360-degree views.",
    price: "$500 per night",
    image: "https://picsum.photos/seed/penthouse/600/400",
  },
  {
    name: "Standard Twin Room",
    description:
      "Cozy room with two single beds, ideal for friends or colleagues.",
    price: "$180 per night",
    image: "https://picsum.photos/seed/standard-twin/600/400",
  },
];

function RoomsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4 text-center text-gray-800">
          Our Rooms
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Experience luxury and comfort in our carefully designed rooms and
          suites.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{room.name}</h2>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <p className="text-xl font-bold text-yellow-600 mb-4">
                  {room.price}
                </p>
                <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomsPage;
