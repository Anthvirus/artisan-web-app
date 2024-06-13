import { useState } from "react";
import Button from "./Button";

const reviews = [
  { name: 'John Doe', imageUrl: 'https://via.placeholder.com/40', review: 'Great service!' },
  { name: 'Jane Smith', imageUrl: 'https://via.placeholder.com/40', review: 'Very professional and reliable.' },
];

const portfolio = [
  { caption: 'Kitchen Renovation', imageUrl: 'https://via.placeholder.com/150' },
  { caption: 'Bathroom Remodeling', imageUrl: 'https://via.placeholder.com/150' },
];

const ArtisanProfileCard = ({artisan, onEdit}) => {
  const [activeTab, setActiveTab] = useState('profile');  
  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="flex flex-col items-center w-full p-3 overflow-y-auto bg-gray-100 gap-y-6 min-h-96 md:flex-row justify-evenly">
          <img className="w-64 h-64 mx-auto rounded-full sm:mx-0 sm:flex-shrink-0 md:w-80 md:h-80" src="https://via.placeholder.com/100" alt="Profile" />
          <div className="flex flex-col text-left sm:ml-4 gap-y-3">
            <div className="text-5xl leading-tight">Artisan Name</div>
            <div className="text-2xl text-gray-500">email@example.com</div>
            <div className="text-2xl text-gray-500">+1234567890</div>
            <div className="text-2xl text-gray-500">City, Country</div>
            <div className="text-2xl text-gray-500">123 Artisan Street, Office 456</div>
            <div className="text-2xl text-gray-500">WhatsApp: +1234567890</div>
          </div>
          <Button text="Edit Profile" onClick={onEdit}/>
        </div>
        
        );
      case 'reviews':
        return (
          <div>
            <h2 className="my-2 text-2xl font-bold text-gray-800">Reviews</h2>
            <div className="grid min-h-full grid-cols-1 gap-4 px-6 py-4 overflow-y-auto bg-gray-200 md:grid-cols-2 rounded-2xl">
            {reviews.map((review, index) => (
              <div key={index} className="flex items-center h-auto p-4 bg-gray-100 rounded-xl">
                <img className="w-64 h-64 mr-4 rounded-full" src={review.imageUrl} alt={review.name} />
                <div>
                  <p className="text-xl font-medium text-gray-800">{review.name}</p>
                  <p className="text-gray-600 text-md">{review.review}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        );
      case 'portfolio':
        return (
          <div>
            <h2 className="my-2 text-2xl font-bold text-gray-800">Portfolio</h2>
            <div className="grid h-full grid-cols-1 gap-4 px-6 py-4 overflow-y-auto bg-gray-200 md:grid-cols-2 rounded-2xl">
              {portfolio.map((item, index) => (
                <div key={index} className="overflow-hidden rounded-lg bg-gray-50 ">
                  <img className="object-cover w-full h-64" src={item.imageUrl} alt={item.caption} />
                  <div className="p-2">
                    <p className="text-lg text-gray-800">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  }
  
  return (
    <div className="max-w-full mx-auto overflow-hidden rounded-lg">
      <div className="grid grid-cols-3 my-2">
        <button onClick={() => setActiveTab('profile')} className={`px-4 py-2 ${activeTab === 'profile' ? 'bg-green-800 text-white rounded-tl-xl' : 'text-gray-700  hover:bg-green-700 hover:text-white'}`}>
          Profile
        </button>
        <button onClick={() => setActiveTab('reviews')} className={`px-4 py-2 ${activeTab === 'reviews' ? 'bg-green-800 text-white' : 'text-gray-700 hover:bg-green-700 hover:text-white'}`}>
          Reviews
        </button>
        <button onClick={() => setActiveTab('portfolio')} className={`px-4 py-2 ${activeTab === 'portfolio' ? 'bg-green-800 text-white rounded-tr-xl' : 'text-gray-700 hover:bg-green-700 hover:text-white'}`}>
          Portfolio
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default ArtisanProfileCard;