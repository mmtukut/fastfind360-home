import React, { useState } from 'react';
import { 
  Heart, Share2, MapPin, Bed, Bath, Square, School, 
  Hospital, Bus, ShoppingCart, Phone, Mail, User, ChevronLeft, ChevronRight
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PropertyDetailView = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showInfrastructurePanel, setShowInfrastructurePanel] = useState(false);

  // Sample price history data
  const priceHistory = [
    { month: 'Jan', price: 75000000 },
    { month: 'Feb', price: 76500000 },
    { month: 'Mar', price: 78000000 },
    { month: 'Apr', price: 77500000 },
    { month: 'May', price: 79000000 },
    { month: 'Jun', price: 80000000 },
  ];

  // Sample nearby infrastructure
  const nearbyInfrastructure = [
    { type: 'School', name: 'International School', distance: '0.5km', icon: School },
    { type: 'Hospital', name: 'Central Hospital', distance: '1.2km', icon: Hospital },
    { type: 'Transport', name: 'Bus Station', distance: '0.8km', icon: Bus },
    { type: 'Shopping', name: 'Mall', distance: '1.5km', icon: ShoppingCart },
  ];

  // Sample similar properties
  const similarProperties = [
    {
      id: 1,
      title: "Similar Luxury Apartment",
      price: "₦72,000,000",
      location: "Lekki Phase 1",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Comparable Property",
      price: "₦78,000,000",
      location: "Lekki Phase 1",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Similar Layout Home",
      price: "₦70,000,000",
      location: "Lekki Phase 1",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Property Images/360 Tour Section */}
      <div className="relative h-[70vh] bg-gray-100">
        <img 
          src="/api/placeholder/1200/800" 
          alt="Property View" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 z-10">
          <button onClick={() => window.history.back()} className="bg-white p-2 rounded-full shadow-lg">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="absolute top-4 right-4 z-10 flex space-x-2">
          <button className="bg-white p-2 rounded-full shadow-lg">
            <Share2 className="h-6 w-6 text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-lg">
            <Heart className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                activeImageIndex === index ? 'bg-[#0066CC]' : 'bg-white'
              }`}
              onClick={() => setActiveImageIndex(index)}
            />
          ))}
        </div>
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Modern 3-Bedroom Apartment
                  </h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Lekki Phase 1, Lagos</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-[#0066CC] mb-2">₦75,000,000</div>
                  <div className="text-gray-600">₦500,000/m²</div>
                </div>
              </div>

              <div className="flex space-x-8 mb-6">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 mr-2 text-gray-600" />
                  <span>3 Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-2 text-gray-600" />
                  <span>2 Baths</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-5 w-5 mr-2 text-gray-600" />
                  <span>150m²</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <p className="text-gray-600">
                  Luxurious 3-bedroom apartment in the heart of Lekki Phase 1. 
                  Features modern amenities, 24/7 security, and stunning views. 
                  The property includes a fitted kitchen, spacious living area, 
                  and premium finishes throughout.
                </p>
              </div>
            </div>

            {/* Price History */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Price History</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#0066CC" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Similar Properties */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Similar Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {similarProperties.map(property => (
                  <div key={property.id} className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{property.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{property.location}</p>
                      <p className="text-[#0066CC] font-bold">{property.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[#E6F0FF] flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-[#0066CC]" />
                </div>
                <div>
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-gray-600">Premium Agent</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactModal(true)}
                className="w-full bg-[#0066CC] text-white py-3 rounded-lg mb-3 hover:bg-[#003366] transition-colors duration-300"
              >
                Contact Agent
              </button>
              <button className="w-full border border-[#0066CC] text-[#0066CC] py-3 rounded-lg hover:bg-[#E6F0FF] transition-colors duration-300">
                Schedule Viewing
              </button>
            </div>

            {/* Infrastructure Map */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Nearby Infrastructure</h2>
              <div className="h-64 bg-gray-100 rounded-lg mb-4">
                {/* Map placeholder */}
                <img 
                  src="/api/placeholder/400/300" 
                  alt="Map"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="space-y-3">
                {nearbyInfrastructure.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <item.icon className="h-5 w-5 mr-2 text-[#0066CC]" />
                      <div>
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.type}</div>
                      </div>
                    </div>
                    <span className="text-gray-600">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Agent Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4">Contact Agent</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:border-[#0066CC]"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Email</label>
                <input 
                  type="email"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:border-[#0066CC]"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  className="w-full p-2 border rounded-lg focus:outline-none focus:border-[#0066CC]"
                  rows={4}
                />
              </div>
              <div className="flex space-x-3">
                <button 
                  className="flex-1 bg-[#0066CC] text-white py-2 rounded-lg hover:bg-[#003366] transition-colors duration-300"
                >
                  Send Message
                </button>
                <button 
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetailView;
