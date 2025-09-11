import { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="container my-4">

      {/* Main Image */}
      <div
        className="d-flex justify-content-center align-items-center mb-3"
        style={{
          height: '400px',
          padding: '5px',
          borderRadius: '5px',
        }}
      >
        <img
          src={selectedImage}
          alt="Selected"
          className="img-fluid"
          style={{
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Thumbnails */}
      <div className="d-flex justify-content-center flex-wrap gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumb-${index}`}
            className={`img-thumbnail ${selectedImage === img ? 'border-primary' : ''}`}
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

    </div>
  );
};

export default ImageGallery;
