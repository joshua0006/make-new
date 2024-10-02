import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";

const locationDetails = [
  {
    title: "Address",
    description: "123 Luxury Avenue, Cityville, State 12345, Country",
    icon: "fi fi-rr-marker",
  },
  {
    title: "Nearby Attractions",
    description:
      "Within walking distance of major tourist spots and shopping centers",
    icon: "fi fi-rr-star",
  },
  {
    title: "Transportation",
    description:
      "Easy access to public transit, 15 minutes from International Airport",
    icon: "fi fi-rr-bus",
  },
  {
    title: "Parking",
    description: "Complimentary valet parking for hotel guests",
    icon: "fi fi-rr-parking",
  },
];

function LocationPage() {
  // Replace with your hotel's actual coordinates
  const latitude = "40.7128";
  const longitude = "-74.0060";

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude},${longitude},${latitude}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4 text-center text-gray-800">
          Our Location
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Situated in the heart of the city, our hotel offers the perfect blend
          of convenience and luxury.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {locationDetails.map((detail, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl"
            >
              <div className="w-1/4 bg-gold-600 h-full flex items-center justify-center p-4">
                <i className={`${detail.icon} text-5xl text-white`}></i>
              </div>
              <div className="w-3/4 p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {detail.title}
                </h2>
                <p className="text-sm text-gray-600">{detail.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-2xl font-bold p-4 bg-gold-600 text-white">Map</h2>
          <div className="p-4">
            <iframe
              title="Hotel Location"
              width="100%"
              height="450"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={mapUrl}
              style={{ border: "1px solid black" }}
            ></iframe>
            <br />
            <small>
              <a
                href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Larger Map
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationPage;
