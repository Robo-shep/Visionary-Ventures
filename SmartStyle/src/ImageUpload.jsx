// src/ImageUpload.jsx
import React, { useState } from 'react';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedImage) {
      // Implement your upload logic here
      console.log('Uploading image:', selectedImage);
    } else {
      alert('Please select an image to upload.');
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      {selectedImage && (
        <div>
          <h2>Preview:</h2>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
