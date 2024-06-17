import { useState } from 'react';

function ProfileEditForm({ artisan, onSave, onCancel }) {
  const [formData, setFormData] = useState(artisan);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };
  
  const handleCancel = () => {
    // Reset formData to original artisan data
    setFormData(artisan);
    onCancel();
  }
  
  return (
    <form onSubmit={handleSubmit} className="w-full p-4 mx-auto bg-white rounded-lg shadow-lg">
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
        <button type="submit" onClick={onSave} className="px-4 py-2 text-white bg-green-700 rounded hover:bg-green-800">
          Save
        </button>
      </div>
    </form>
  );
}

export default ProfileEditForm;
