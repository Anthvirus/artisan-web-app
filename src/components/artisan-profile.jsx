const reviews = [
  { name: 'John Doe', imageUrl: 'https://via.placeholder.com/40', review: 'Great service!' },
  { name: 'Jane Smith', imageUrl: 'https://via.placeholder.com/40', review: 'Very professional and reliable.' },
];

const portfolio = [
  { caption: 'Kitchen Renovation', imageUrl: 'https://via.placeholder.com/150' },
  { caption: 'Bathroom Remodeling', imageUrl: 'https://via.placeholder.com/150' },
];

const ArtisanProfileCard = () => {
  return (
    <div className="w-full h-[37.5rem] mx-auto overflow-hidden bg-white rounded-lg shadow-lg flex justify-center flex-col">
    <div className="grid items-center w-full h-20 grid-cols-3 text-2xl font-semibold">
      <div className="flex items-center justify-center w-full text-green-900 border-green-800 hover:border-b">Profile</div>
      <div className="flex items-center justify-center w-full text-green-900 border-green-800 hover:border-b">Reviews</div>
      <div className="flex items-center justify-center w-full text-green-900 border-green-800 hover:border-b">Portfolio</div>
    </div>
      <div className="flex items-center justify-center w-full h-full gap-3">
        <img className="block w-56 h-56 mx-auto rounded-full sm:mx-0 sm:flex-shrink-0 md:w-96 md:h-96" src="https://via.placeholder.com/100" alt="Profile" />
        <div className="flex flex-col text-left sm:ml-4 gap-y-3">
          <div className="leading-tight text-7xl">Artisan Name</div>
          <div className="text-2xl text-gray-500">email@example.com</div>
          <div className="text-2xl text-gray-500">+1234567890</div>
          <div className="text-2xl text-gray-500">City, Country</div>
          <div className="text-2xl text-gray-500">123 Artisan Street, Office 456</div>
          <div className="text-2xl text-gray-500">WhatsApp: +1234567890</div>
        </div>
      </div>

      {/* <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="flex items-center mt-4">
            <img className="w-10 h-10 mr-4 rounded-full" src={review.imageUrl} alt={review.name} />
            <div>
              <p className="text-sm font-medium text-gray-800">{review.name}</p>
              <p className="text-sm text-gray-600">{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Portfolio</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {portfolio.map((item, index) => (
            <div key={index} className="overflow-hidden bg-gray-100 rounded-lg">
              <img className="object-cover w-full h-32" src={item.imageUrl} alt={item.caption} />
              <div className="p-2">
                <p className="text-sm text-gray-800">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ArtisanProfileCard;
