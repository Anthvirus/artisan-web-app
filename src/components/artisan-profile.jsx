import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const reviews = [
  { name: 'John Doe', imageUrl: 'https://via.placeholder.com/40', review: 'Great service!' },
  { name: 'Jane Smith', imageUrl: 'https://via.placeholder.com/40', review: 'Very professional and reliable.' },
  { name: 'Jane Smith', imageUrl: 'https://via.placeholder.com/40', review: 'Very professional and reliable.' },
  { name: 'Jane Smith', imageUrl: 'https://via.placeholder.com/40', review: 'Very professional and reliable.' },

];

const images = [
  {title: "Wall Painting"},
  {}
]


const user = {
  type: "artisan"
}

const ArtisanProfileCard = (artisan) => {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [formData, setFormData] = useState({ 
      name: "",
      email: "",
      phoneNumber:"",
      whatsappContact: "",
      officeAddress: "",
      location: "",  
    }
  );
  const [reviewFormData, setReviewFormData] = useState({ rating: '', review: '' });
  const [activeTab, setActiveTab] = useState('profile'); 
  const [allReviews, setAllReviews] = useState(reviews)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowProfileForm(false);
  };

  const handleCancel = () => {
    setFormData(artisan);
    setShowProfileForm(false);
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewFormData({ ...reviewFormData, [name]: value });
  };

  const handleReviewSave = () => {
    const newReview = {
      name: 'Anonymous', // or get the user's name from context or state
      imageUrl: 'https://via.placeholder.com/40',
      review: reviewFormData.review,
      rating: reviewFormData.rating
    };
    setAllReviews([ newReview, ...allReviews]);
    setShowReviewForm(false);
    setReviewFormData({ rating: '', review: '' });
    console.log(allReviews);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        if (showProfileForm){
          return (
            <form onSubmit={handleSubmit} className="w-full p-4 mx-auto overflow-y-auto bg-white rounded-lg shadow-lg">
        <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Profile Picture</label>
        <input
        type="file"
        name="profilePicture"
        onChange={handleChange}
        className="w-full p-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Office Address</label>
        <input
          type="text"
          name="officeAddress"
          value={formData.officeAddress}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">WhatsApp Contact</label>
        <input
          type="text"
          name="whatsappContact"
          value={formData.whatsappContact}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        </div>
        <div className="flex justify-between">
        <button type="button" onClick={handleCancel} className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 text-white bg-green-700 rounded hover:bg-green-800">
          Save
        </button>
      </div>
            </form>         
          )
        } else {
          return (
            <div className="flex flex-col items-center justify-center p-3 py-16 bg-gray-200 overfl0ow-y-auto md:py-0 md:gap-8 md:flex-row gap-y-12">
              <div className="flex-shrink-0">
                <img className="mx-auto rounded-full max-w-72 max-h-72 md:w-96 md:h-96 sm:mx-0" src={formData.imageUrl || 'https://via.placeholder.com/100'} alt="Profile" />
              </div>
              <div className="flex flex-col gap-3 text-left md:ml-4">
                <div className="text-3xl font-bold leading-tight md:text-5xl">{formData.name || 'Artisan Name'}</div>
                <div className="flex items-center gap-x-4">
                  <FaWhatsapp className="w-8 h-8 text-green-500" />
                  <Link to={`https://wa.me/${formData.whatsapp}`} className="text-xl text-gray-700 md:text-2xl">{formData.whatsapp || '+1234567890'}</Link>
                </div>
                <div className="flex items-center gap-x-4">
                  <MdEmail className="w-8 h-8 text-red-500" />
                  <Link to={`mailto:${formData.email}`} className="text-xl text-gray-700 md:text-2xl">{formData.email || 'email@example.com'}</Link>
                </div>
                <div className="flex items-center gap-x-4">
                  <MdPhone className="w-8 h-8 text-green-700" />
                  <Link to={`tel:${formData.phone}`} className="text-xl text-gray-700 md:text-2xl">{artisan.phone || '+1234567890'}</Link>
                </div>
                <div className="text-xl text-gray-700 md:text-2xl">{formData.location || 'City, Country'}</div>
                <div className="text-xl text-gray-700 md:text-2xl">{formData.officeAddress || '123 Artisan Street, Office 456'}</div>
              </div>
              {(user.type === "artisan") ? (
                <Button text="Edit Profile" onClick={()=>(setShowProfileForm(!showProfileForm))}/>
              ) : (<></>)}
            </div>
          );
        }
      case 'reviews':
        if (showReviewForm) {
          return (
            <form className="w-4/5 p-4 mx-auto my-auto bg-white border rounded-xl">
              <h2 className="mb-4 text-xl font-bold md:text-2xl">Add Review</h2>
              <div className="">
              <p>What Rating would you give this artisan:</p>
                <select name="rating" value={reviewFormData.rating} onChange={handleReviewChange} className="w-full h-12 my-2 border">
                  <option value="1" className="h-24">-</option>
                  <option value="1" className="h-24">1</option>
                  <option value="2" className="h-24">2</option>
                  <option value="3" className="h-24">3</option>
                  <option value="4" className="h-24">4</option>
                  <option value="5" className="h-24">5</option>
                </select>
              </div>
              <textarea
                placeholder="Review"
                name="review"
                value={reviewFormData.review}
                onChange={handleReviewChange}
                className="w-full h-32 px-3 py-2 mb-4 bg-gray-200 rounded"
              />
              <div className="flex gap-4">
                <button type="button" onClick={() => setShowReviewForm(false)} className="flex items-center justify-center w-full px-4 py-2 mt-4 text-white bg-red-700 rounded md:w-auto hover:bg-red-600">Cancel</button>
                <button type="button" onClick={handleReviewSave} className="flex items-center justify-center w-full px-4 py-2 mt-4 text-white bg-green-800 rounded md:w-auto hover:bg-green-700">Save</button>
              </div>
            </form>
          );
        } else {
          return (
            <div>
              <div className="flex justify-between my-4">
              <h2 className="m-2 text-xl font-bold text-gray-800 rounded-xl md:text-2xl">Reviews</h2>
              {!showReviewForm && (
                <Button text="Add Review" onClick={() => setShowReviewForm(true)} />
              )}
              </div>
              <div className="grid grid-cols-1 gap-2 rounded-xl">
                {allReviews.map((review, index) => (
                  <div key={index} className="w-full p-4 bg-gray-100 h-36 rounded-xl">
                    <div className="flex items-center h-full mb-2">
                      <img className="w-24 h-24 mr-4 rounded-full" src={review.imageUrl} alt={review.name} />
                      <div>
                        <p className="text-lg font-medium text-gray-800 md:text-xl">{review.name}</p>
                        <p className="text-gray-600">{review.review}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
      case 'portfolio':
        return (
      <div className="flex flex-col overflow-hidden rounded-lg shadow-md">
      <div className="flex-shrink-0">
        {images.length === 1 ? (
          <img className="object-cover w-full h-auto" src={images[0]} alt={images.title} />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                className="object-cover w-full h-auto"
                src={image.src}
                alt={image.title}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <h5 className="text-xl font-bold tracking-tight text-gray-900">{images.title}</h5>
        <p className="mt-1 text-sm text-gray-600">{images.description}</p>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <span>{images.date}</span>
        </div>
      </div>
    </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full max-w-full mx-auto overflow-hidden rounded-lg gap-y-2">
      <div className="grid min-h-16 md:grid-cols-3">
        <button onClick={() => setActiveTab('profile')} className={`col-span-1 px-4 py-2 ${activeTab === 'profile' ? 'bg-green-800 text-white  md:rounded-tl-xl' : 'text-gray-700 hover:bg-green-700 hover:text-white'}`}>
          Profile
        </button>
        <button onClick={() => setActiveTab('reviews')} className={`col-span-1 px-4 py-2 ${activeTab === 'reviews' ? 'bg-green-800 text-white' : 'text-gray-700 hover:bg-green-700 hover:text-white'}`}>
          Reviews
        </button>
        <button onClick={() => setActiveTab('portfolio')} className={`col-span-1 px-4 py-2 ${activeTab === 'portfolio' ? 'bg-green-800 text-white md:rounded-tr-xl' : 'text-gray-700 hover:bg-green-700 hover:text-white'}`}>
          Portfolio
        </button>
      </div>
      <div className="grid h-full p-2 overflow-y-auto bg-gray-200 rounded-xl">
        {renderContent()}
      </div>
    </div>
  );
};

export default ArtisanProfileCard;
