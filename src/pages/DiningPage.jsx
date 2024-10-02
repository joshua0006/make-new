import React from "react";
import {
  FaUtensils,
  FaCocktail,
  FaCoffee,
  FaWineGlassAlt,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaRegBuilding,
  FaLeaf,
  FaGlassMartiniAlt,
} from "react-icons/fa";

const restaurants = [
  {
    name: "The Grand Bistro",
    description:
      "Experience fine dining with a modern twist on classic French cuisine.",
    type: "Fine Dining",
    cuisine: "French",
    rating: 4.8,
    image: "https://picsum.photos/seed/bistro/800/600",
    icon: <FaUtensils className="text-3xl" />,
    hours: "5:30 PM - 10:30 PM",
    location: "Main Building, 1st Floor",
  },
  {
    name: "Sakura Sushi",
    description:
      "Authentic Japanese sushi and sashimi prepared by master chefs.",
    type: "Casual Dining",
    cuisine: "Japanese",
    rating: 4.6,
    image: "https://picsum.photos/seed/sushi/800/600",
    icon: <FaLeaf className="text-3xl" />,
    hours: "12:00 PM - 2:30 PM, 6:00 PM - 10:00 PM",
    location: "East Wing, 2nd Floor",
  },
  {
    name: "The Rooftop Lounge",
    description:
      "Enjoy breathtaking views with craft cocktails and light bites.",
    type: "Bar & Lounge",
    cuisine: "International",
    rating: 4.7,
    image: "https://picsum.photos/seed/rooftop/800/600",
    icon: <FaCocktail className="text-3xl" />,
    hours: "4:00 PM - 12:00 AM",
    location: "Rooftop",
  },
  {
    name: "Café Aroma",
    description:
      "Start your day with freshly brewed coffee and delicious pastries.",
    type: "Café",
    cuisine: "International",
    rating: 4.5,
    image: "https://picsum.photos/seed/cafe/800/600",
    icon: <FaCoffee className="text-3xl" />,
    hours: "6:00 AM - 8:00 PM",
    location: "Lobby Level",
  },
  {
    name: "Vineyard",
    description:
      "An extensive wine selection paired with gourmet cheese and charcuterie.",
    type: "Wine Bar",
    cuisine: "International",
    rating: 4.9,
    image: "https://picsum.photos/seed/wine/800/600",
    icon: <FaWineGlassAlt className="text-3xl" />,
    hours: "4:00 PM - 11:00 PM",
    location: "West Wing, Ground Floor",
  },
];

function DiningPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">
          Exquisite Dining Experiences
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Indulge in a culinary journey through our diverse range of restaurants
          and bars.
        </p>
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute top-0 left-0 bg-white bg-opacity-80 text-gold-600 p-3 rounded-br-xl">
                  {restaurant.icon}
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-semibold mb-3">
                  {restaurant.name}
                </h2>
                <p className="text-gray-600 mb-4">{restaurant.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-500 flex items-center">
                    <FaRegBuilding className="mr-2 text-gold-600" />
                    {restaurant.type}
                  </span>
                  <span className="text-gray-500 flex items-center">
                    <FaUtensils className="mr-2 text-gold-600" />
                    {restaurant.cuisine} Cuisine
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <FaClock className="text-gold-600 mr-2" />
                  <span className="text-gray-600">{restaurant.hours}</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-gold-600 mr-2" />
                  <span className="text-gray-600">{restaurant.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaStar className="text-gold-500 mr-1" />
                    <span className="font-bold text-xl">
                      {restaurant.rating}
                    </span>
                    <span className="text-gray-500 ml-1">/ 5</span>
                  </div>
                  <button className="bg-gold-600 text-white py-2 px-6 rounded-full hover:bg-gold-700 transition duration-300 flex items-center">
                    <FaGlassMartiniAlt className="mr-2" />
                    Reserve a Table
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiningPage;
