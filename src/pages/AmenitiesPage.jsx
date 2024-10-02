import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";

const amenities = [
  {
    name: "Infinity Pool",
    description:
      "Relax in our stunning rooftop infinity pool with panoramic city views.",
    icon: "fi fi-rr-swimming-pool",
  },
  {
    name: "Fitness Center",
    description:
      "Stay fit in our state-of-the-art gym with personal training services.",
    icon: "fi fi-rr-gym",
  },
  {
    name: "Luxury Spa",
    description: "Indulge in rejuvenating treatments at our world-class spa.",
    icon: "fi fi-rr-spa",
  },
  {
    name: "24/7 Concierge",
    description:
      "Our attentive staff is always available to assist with any request.",
    icon: "fi fi-rr-bell-concierge",
  },
  {
    name: "High-Speed Wi-Fi",
    description:
      "Stay connected with complimentary high-speed internet throughout the hotel.",
    icon: "fi fi-rr-wifi",
  },
  {
    name: "Valet Parking",
    description: "Enjoy convenient valet parking service for your vehicle.",
    icon: "fi fi-rr-parking",
  },
  {
    name: "Airport Shuttle",
    description: "Complimentary shuttle service to and from the airport.",
    icon: "fi fi-rr-bus",
  },
  {
    name: "Business Center",
    description:
      "Fully equipped business center for all your professional needs.",
    icon: "fi fi-rr-briefcase",
  },
  {
    name: "Rooftop Bar",
    description:
      "Sip cocktails and enjoy the city skyline at our exclusive rooftop bar.",
    icon: "fi fi-rr-cocktail",
  },
  {
    name: "Private Beach Access",
    description: "Direct access to a pristine private beach (seasonal).",
    icon: "fi fi-rr-umbrella-beach",
  },
];

function AmenitiesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4 text-center text-gray-800">
          Luxurious Amenities
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Indulge in our world-class amenities designed to elevate your stay and
          create unforgettable memories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl"
            >
              <div className="w-1/4 bg-gold-600 h-full flex items-center justify-center p-4">
                <i className={`${amenity.icon} text-5xl text-white`}></i>
              </div>
              <div className="w-3/4 p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {amenity.name}
                </h2>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AmenitiesPage;
