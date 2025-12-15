"use client";
import Slider from "react-slick";
// Make sure you import the necessary CSS for react-slick in your main layout/entry file
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css"; 

// Example data array
const defaultImages = [
  { id: 1, imgUrl: '/images/image-1.jpg', altText: 'First slide' },
  { id: 2, imgUrl: '/images/image-2.jpg', altText: 'Second slide' },
  { id: 3, imgUrl: '/images/image-3.jpg', altText: 'Third slide' },
  // Add more images as needed
];

/**
 * Custom Slider Component to display an array of images.
 * * @param {Object[]} images - Array of image objects: [{ id, imgUrl, altText }]
 */
export default function ImgSlider({ images = defaultImages }) {
  
  // Settings for the react-slick slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Optional: automatically move slides
    autoplaySpeed: 3000,     // Optional: time delay between slides (in ms)
    cssEase: "linear"
  };

  return (
    <div className="slider-container max-w-4xl mx-auto">
      <Slider {...settings}>
        {/* Map over the images array to generate slider items */}
        {images.map((image) => (
          <div key={image.id}>
            {/* You can wrap this in an anchor tag if the image is a link */}
            <div className="image-wrapper w-full h-96"> {/* Apply styling for image size */}
              <img 
                src={image.imgUrl} 
                alt={image.altText} 
                className="w-full h-full object-cover" // Ensure image covers the div
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Example usage of the component:
/*
import ImageSlider from './ImageSlider';

const myCustomImages = [
    { id: 10, imgUrl: 'https://example.com/photo-a.jpg', altText: 'Mountain view' },
    { id: 11, imgUrl: 'https://example.com/photo-b.jpg', altText: 'City skyline' },
];

function MyPage() {
    return (
        <main>
            <ImageSlider images={myCustomImages} />
        </main>
    );
}
*/