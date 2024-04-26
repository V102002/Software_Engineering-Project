// // JavaScript code to dynamically load images

// // Array containing image URLs
// var imageUrls = [
//   "download.jpg",
//   "download.jpg",
//   "download.jpg"
// ];

// // Function to dynamically load images
// function loadImages() {
//   var sliderContainer = document.querySelector('.slider-container');
//   var slider = document.querySelector('.slider');

//   // Loop through the image URLs array
//   imageUrls.forEach(function(url) {
//       // Create a new image element
//       var img = document.createElement('img');
//       img.src = url;
//       img.alt = "Slide"; // Set alt text for accessibility

//       // Create a new div for the slide and append the image
//       var slide = document.createElement('div');
//       slide.classList.add('slide');
//       slide.appendChild(img);

//       // Append the slide to the slider
//       slider.appendChild(slide);
//   });
// }

// // Call the function to load images when the page loads
// window.onload = loadImages;
// JavaScript code to redirect to other webpages
function redirectToPage(pageUrl) {
  window.location.href = pageUrl;
}
