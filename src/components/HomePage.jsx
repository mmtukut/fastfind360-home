import React, { useState } from 'react';
import MapComponent from './MapComponent';
import { Map, BarChart2, Clock, Layers, Info, X } from 'lucide-react';
import image1 from '../assets/images/property1.jpg';
import image2 from '../assets/images/property2.jpg';
import image3 from '../assets/images/property3.jpg';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";


import { Search, MapPin, Building, ChevronDown, Star, Menu, Bell } from 'lucide-react';

const HomePage = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeLayer, setActiveLayer] = useState('all');
  
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Apartment in Lekki",
      price: "₦75,000,000",
      location: "Lekki Phase 1, Lagos",
      beds: 3,
      baths: 2,
      area: "150m²",
      image: image1,
      description: "Spacious apartment with modern amenities.",
      coordinates: [3.421, 6.448],

    },
    {
      id: 2,
      title: "Luxury Villa in Abuja",
      price: "₦120,000,000",
      location: "Maitama, Abuja",
      beds: 5,
      baths: 4,
      area: "300m²",
      image: image2,
      coordinates: [7.492, 9.057]
    },
    {
      id: 3,
      title: "Office Space in Victoria Island",
      price: "₦45,000,000",
      location: "Victoria Island, Lagos",
      beds: null,
      baths: 2,
      area: "200m²",
      image: image3,
      coordinates: [3.421, 6.447]

    }
  ];
  
  const openModal = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-gray-600 mr-4 lg:hidden" />
              <span className="text-2xl font-bold text-[#0066CC]">FastFind360</span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-[#0066CC]">Buy</a>
              <a href="#" className="text-gray-600 hover:text-[#0066CC]">Rent</a>
              <a href="#" className="text-gray-600 hover:text-[#0066CC]">Sell</a>
              <a href="#" className="text-gray-600 hover:text-[#0066CC]">Infrastructure</a>
              <a href="#" className="text-gray-600 hover:text-[#0066CC]">Analytics</a>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-600" />
              <div className="h-8 w-8 rounded-full bg-[#E6F0FF] flex items-center justify-center">
                <span className="text-[#0066CC] font-medium">MT</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-b from-[#E6F0FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            Find Your Perfect Property in Nigeria
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Discover properties and analyze infrastructure with AI-powered insights
          </p>
          
          {/* Search Bar */}
          <div className={`bg-white rounded-lg shadow-lg mx-auto max-w-3xl transition-all duration-300 ${isSearchExpanded ? 'p-6' : 'p-4'}`}>
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by location, property type, or keyword"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]"
                  onFocus={() => setIsSearchExpanded(true)}
                  onBlur={() => setIsSearchExpanded(false)}
                />
              </div>
              <button className="bg-[#0066CC] text-white px-6 py-2 rounded-lg hover:bg-[#003366] transition-colors duration-300">
                Search
              </button>
            </div>
            
            {isSearchExpanded && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <button className="flex items-center justify-center space-x-2 p-2 border border-gray-200 rounded-lg hover:border-[#0066CC]">
                  <Building className="h-4 w-4" />
                  <span>Property Type</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button className="flex items-center justify-center space-x-2 p-2 border border-gray-200 rounded-lg hover:border-[#0066CC]">
                  <MapPin className="h-4 w-4" />
                  <span>Location</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button className="flex items-center justify-center space-x-2 p-2 border border-gray-200 rounded-lg hover:border-[#0066CC]">
                  <span>Price Range</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button className="flex items-center justify-center space-x-2 p-2 border border-gray-200 rounded-lg hover:border-[#0066CC]">
                  <span>More Filters</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>



{/* Modal for Property Details */}
{isModalOpen && selectedProperty && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl shadow-lg w-[700px] max-w-full relative overflow-hidden">
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 h-8 w-8 bg-gray-100 hover:bg-gray-200 flex justify-center items-center rounded-md"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          className="h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </button>
      <div
        className="bg-cover h-80"
        style={{
          backgroundImage: `url(${selectedProperty.image})`,
        }}
      ></div>
      <div className="p-6">
        <h5 className="font-bold text-2xl mb-1.5">{selectedProperty.price}</h5>
        <p className="text-base font-normal mb-4">
          {selectedProperty.beds} bedrooms • {selectedProperty.baths} bathrooms •{" "}
          {selectedProperty.area}
        </p>
        <p className="text-base font-normal mb-6">{selectedProperty.description}</p>

        {/* Map Section */}
        <div className="rounded-lg h-80 relative overflow-hidden">
          <img
            src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+ff0000(${selectedProperty.coordinates[0]},${selectedProperty.coordinates[1]})/${selectedProperty.coordinates[0]},${selectedProperty.coordinates[1]},14,0,0/600x400@2x?access_token=pk.eyJ1IjoibW10dWt1ciIsImEiOiJjbTEyZGk2dmwwbjZyMmtzMXFzb3V0cHRuIn0.pDgNHWd_o6u2NKVFib0EPQ`}
            alt={`Map showing ${selectedProperty.location}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  </div>
)}


      {/* Featured Properties */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Properties</h2>
          <a href="#" className="text-[#0066CC] hover:text-[#003366]">View all</a>
        </div>        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            onClick={() => openModal(property)} // Trigger modal on click
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h3>
                    <p className="text-gray-600">{property.location}</p>
                  </div>
                  <button className="text-[#0066CC] hover:text-[#003366]">
                    <Star className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex items-center justify-between text-gray-600 mb-4">
                  {property.beds && <span>{property.beds} beds</span>}
                  {property.baths && <span>{property.baths} baths</span>}
                  <span>{property.area}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">{property.price}</span>
                  <button className="bg-[#E6F0FF] text-[#0066CC] px-4 py-2 rounded-lg hover:bg-[#0066CC] hover:text-white transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* Explore Listings on the Map */}
<div className="w-screen h-screen p-4 border-r border-gray-200 overflow-hidden">
  <Card className="h-full">
    <CardHeader className="p-4">
      <div className="flex justify-between items-center">
        <CardTitle className="flex items-center gap-2">
          <Map size={12} />
          Explore Listings on the Map
        </CardTitle>
        <div className="flex gap-2">
          <Select value={activeLayer} onValueChange={setActiveLayer}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Layer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="apartment">Apartments</SelectItem>
              <SelectItem value="offices">Offices</SelectItem>
              <SelectItem value="shops">Shops</SelectItem>
              <SelectItem value="plaza">Plaza</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-0 relative h-[calc(100%-70px)] overflow-hidden">
      {/* Map */}
      <div className="absolute inset-0">
        <MapComponent
          zoom={13}
          coordinates={[7.492, 9.057]}
          listings={featuredProperties}
          onMarkerClick={openModal}
        />
      </div>
    </CardContent>
  </Card>
</div>


    </div>
  );
};

export default HomePage;
