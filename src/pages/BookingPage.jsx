import React, { useState } from "react";
import { FaCalendar, FaUser, FaStar } from "react-icons/fa";

function BookingPage() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
  });
  const [availableHotels, setAvailableHotels] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateRandomHotels = () => {
    const hotelNames = [
      "Luxury Palace",
      "Grand Oasis",
      "Royal Retreat",
      "Elegant Suites",
      "Majestic View Hotel",
    ];
    const randomHotels = Array.from({ length: 3 }, () => ({
      name: hotelNames[Math.floor(Math.random() * hotelNames.length)],
      price: Math.floor(Math.random() * (500 - 100 + 1) + 100),
      rating: (Math.random() * (5 - 3) + 3).toFixed(1),
    }));
    setAvailableHotels(randomHotels);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    generateRandomHotels();
  };

  return (
    <main className="container mx-auto px-4 py-16 bg-gray-50">
      <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">
        Book Your Luxurious Stay
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-xl rounded-lg p-8 mb-8"
      >
        <div className="mb-6">
          <label
            htmlFor="checkIn"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Check-in Date
          </label>
          <div className="relative">
            <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="checkOut"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Check-out Date
          </label>
          <div className="relative">
            <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        <div className="mb-8">
          <label
            htmlFor="guests"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Number of Guests
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gold-600 text-white py-3 px-4 rounded-md hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Check Availability
        </button>
      </form>

      {availableHotels.length > 0 && (
        <div className="max-w-2xl mx-auto my-4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Available Hotels
          </h2>
          <div className="space-y-4">
            {availableHotels.map((hotel, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">
                    <span className="font-bold text-gold-600">
                      ${hotel.price}
                    </span>{" "}
                    per night
                    /rooms           </p>
                  <div className="flex items-center">
                    <FaStar className="text-gold-500 mr-1" />
                    <span>{hotel.rating}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-gold-600 text-white py-2 px-4 rounded-md hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default BookingPage;
