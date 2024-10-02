import { Link } from "react-router-dom";
import {
  FaPlay,
  FaStar,
  FaQuoteLeft,
  FaSpa,
  FaUtensils,
  FaSwimmingPool,
  FaWifi,
  FaConciergeBell,
  FaShuttleVan,
} from "react-icons/fa";

function HomePage() {
  return (
    <main className="container mx-auto px-4 py-24">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-20">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl text-gray-600 font-bold mb-6">
            Experience Unparalleled Luxury
          </h1>
          <h2 className="text-4xl font-bold mb-6 ">
            Your Perfect Getaway Awaits
          </h2>
          <p className="text-xl mb-8">
            Indulge in world-class amenities, breathtaking views, and impeccable
            service. Book your stay now and create unforgettable memories.
          </p>
          <Link
            to="/booking"
            className="bg-gold-600 text-white font-bold py-3 px-6 rounded-full hover:bg-gold-700 transition duration-300"
          >
            Book Your Stay
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="relative aspect-video bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white bg-opacity-75 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-all duration-300">
                <FaPlay className="text-gold-600 text-4xl ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              Experience Luxury
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FaSpa,
              name: "Luxury Spa",
              description:
                "Relax and rejuvenate with our world-class spa treatments",
            },
            {
              icon: FaUtensils,
              name: "Gourmet Dining",
              description:
                "Savor exquisite cuisine prepared by award-winning chefs",
            },
            {
              icon: FaSwimmingPool,
              name: "Infinity Pool",
              description:
                "Enjoy breathtaking views from our rooftop infinity pool",
            },
            {
              icon: FaWifi,
              name: "High-Speed WiFi",
              description:
                "Stay connected with complimentary high-speed internet",
            },
            {
              icon: FaConciergeBell,
              name: "24/7 Concierge",
              description: "Our dedicated staff is always at your service",
            },
            {
              icon: FaShuttleVan,
              name: "Airport Shuttle",
              description:
                "Complimentary airport transfers for a hassle-free stay",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="text-4xl mb-4 text-gold-600" />
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Experience Luxury
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              alt: "Luxurious Hotel Room",
            },
            {
              src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              alt: "Infinity Pool",
            },
            {
              src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              alt: "Gourmet Restaurant",
            },
            {
              src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              alt: "Relaxing Spa",
            },
            {
              src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              alt: "Elegant Suite",
            },
            {
              src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              alt: "Breathtaking View",
            },
          ].map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Guest Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "John D.",
              rating: 5,
              comment:
                "An unforgettable experience! The service was impeccable and the amenities were top-notch.",
            },
            {
              name: "Sarah M.",
              rating: 4.5,
              comment:
                "Beautiful hotel with stunning views. The spa treatments were incredibly relaxing.",
            },
            {
              name: "Robert L.",
              rating: 5,
              comment:
                "Exceptional dining options and the most comfortable beds I've ever slept in.",
            },
            {
              name: "Emily W.",
              rating: 4.5,
              comment:
                "The staff went above and beyond to make our stay special. We'll definitely be back!",
            },
          ].map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-2xl text-gold-600 mr-2" />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-gold-600 ${
                          i < Math.floor(review.rating)
                            ? "opacity-100"
                            : "opacity-30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gray-100 py-12 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Ready to Experience Luxury?</h2>
        <p className="text-xl mb-8 text-gray-600">
          Book your stay now and create unforgettable memories.
        </p>
        <Link
          to="/booking"
          className="bg-gold-600 text-white font-bold py-3 px-8 rounded-full hover:bg-gold-700 transition duration-300"
        >
          Book Your Stay
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
